'use server';

import OSS from 'ali-oss';
import { db } from '@/lib/db';
import { assets } from '@/lib/db/schema';
import { revalidatePath } from 'next/cache';

/**
 * Uploads an asset to Alibaba Cloud OSS and records it in the database.
 * Optimized for Mainland China delivery.
 */
export async function uploadAsset(formData: FormData, productId: string, orgId: string) {
  const file = formData.get('file') as File;
  if (!file) {
    throw new Error('No file provided');
  }

  // Initialize Alibaba OSS Client
  const client = new OSS({
    region: process.env.ALIYUN_OSS_REGION,
    accessKeyId: process.env.ALIYUN_OSS_ACCESS_KEY_ID!,
    accessKeySecret: process.env.ALIYUN_OSS_ACCESS_KEY_SECRET!,
    bucket: process.env.ALIYUN_OSS_BUCKET!,
    secure: true,
  });

  // Determine asset type based on extension
  const filename = file.name.toLowerCase();
  let type: "IMAGE" | "VIDEO" | "MODEL_3D" | "AR_FILE" = "IMAGE";
  
  if (filename.endsWith('.glb') || filename.endsWith('.gltf')) {
    type = "MODEL_3D";
  } else if (filename.endsWith('.mp4') || filename.endsWith('.mov')) {
    type = "VIDEO";
  } else if (filename.endsWith('.usdz')) {
    type = "AR_FILE";
  }

  // Convert File to Buffer for OSS upload
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Generate a unique path for the asset: [orgId]/[productId]/[timestamp]-[filename]
  const path = `${orgId}/${productId}/${Date.now()}-${file.name}`;

  try {
    // Upload to Alibaba OSS
    const result = await client.put(path, buffer, {
      mime: file.type,
      headers: {
        'x-oss-object-acl': 'public-read',
        'Cache-Control': 'max-age=31536000', // Cache for 1 year
      },
    });

    // Save metadata to database
    const [newAsset] = await db.insert(assets).values({
      productId: productId,
      type: type,
      url: result.url,
      size: file.size,
      metadata: {
        contentType: file.type,
        originalName: file.name,
        ossPath: path,
        ossEtag: (result.res.headers as Record<string, any>)['etag'],
      },
    }).returning();

    revalidatePath('/dashboard/products');
    return newAsset;
  } catch (error) {
    console.error('Alibaba OSS Upload Error:', error);
    throw new Error('Failed to upload asset to Alibaba Cloud');
  }
}
