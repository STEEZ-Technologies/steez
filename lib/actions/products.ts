'use server';

import { db } from '@/lib/db';
import { products } from '@/lib/db/schema';
import { eq, and } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function createProduct(data: {
  sku: string;
  name: string;
  organizationId: string;
  description?: string;
  moq?: number;
  price?: string;
  specifications?: any;
}) {
  const [newProduct] = await db.insert(products).values({
    organizationId: data.organizationId,
    sku: data.sku,
    name: data.name,
    description: data.description,
    moq: data.moq,
    price: data.price,
    specifications: data.specifications,
  }).returning();

  revalidatePath('/dashboard/products');
  return newProduct;
}

export async function updateProduct(id: string, orgId: string, data: Partial<{
  sku: string;
  name: string;
  description: string;
  moq: number;
  price: string;
  specifications: any;
}>) {
  const [updatedProduct] = await db.update(products)
    .set({ ...data, updatedAt: new Date() })
    .where(and(eq(products.id, id), eq(products.organizationId, orgId)))
    .returning();

  revalidatePath('/dashboard/products');
  return updatedProduct;
}

export async function deleteProduct(id: string, orgId: string) {
  await db.delete(products)
    .where(and(eq(products.id, id), eq(products.organizationId, orgId)));

  revalidatePath('/dashboard/products');
}
