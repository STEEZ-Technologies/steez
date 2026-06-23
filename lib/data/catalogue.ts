import 'server-only';

import { db } from '@/lib/db';
import { organizations, products, assets } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function getCatalogueBySlug(slug: string) {
  const org = await db.query.organizations.findFirst({
    where: eq(organizations.slug, slug),
    with: {
      products: {
        with: {
          assets: true,
        },
      },
      users: {
        where: (users, { eq }) => eq(users.role, 'SALESREP'),
      },
    },
  });

  return org;
}

export async function getProductDetails(productId: string) {
  const product = await db.query.products.findFirst({
    where: eq(products.id, productId),
    with: {
      assets: true,
      organization: true,
    },
  });

  return product;
}
