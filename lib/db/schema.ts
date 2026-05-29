import { pgTable, uuid, text, integer, decimal, timestamp, pgEnum, jsonb } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Enums
export const subscriptionTierEnum = pgEnum("subscription_tier", ["FREE", "PRO", "ENTERPRISE"]);
export const userRoleEnum = pgEnum("user_role", ["ADMIN", "EDITOR", "SALESREP"]);
export const assetTypeEnum = pgEnum("asset_type", ["IMAGE", "VIDEO", "MODEL_3D", "AR_FILE"]);
export const leadSourceEnum = pgEnum("lead_source", ["DIGITAL_CARD", "MICROSITE", "GENERAL"]);
export const leadStatusEnum = pgEnum("lead_status", ["NEW", "CONTACTED", "CLOSED"]);

// Organizations (Manufacturers)
export const organizations = pgTable("organizations", {
  id: text("id").primaryKey(), // Using Clerk Organization ID string
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  branding: jsonb("branding").$type<{
    primaryColor?: string;
    secondaryColor?: string;
    logoUrl?: string;
  }>(),
  subscriptionTier: subscriptionTierEnum("subscription_tier").default("FREE").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Users (Sales Reps / Admins)
export const users = pgTable("users", {
  id: text("id").primaryKey(), // Using Clerk User ID string
  organizationId: text("organization_id").references(() => organizations.id, { onDelete: "cascade" }),
  role: userRoleEnum("role").default("SALESREP").notNull(),
  name: text("name").notNull(),
  title: text("title"),
  avatarUrl: text("avatar_url"),
  contactInfo: jsonb("contact_info").$type<{
    email?: string;
    phone?: string;
    wechat?: string;
    linkedin?: string;
    whatsapp?: string;
  }>(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Products (Catalogue Items)
export const products = pgTable("products", {
  id: uuid("id").defaultRandom().primaryKey(),
  organizationId: text("organization_id").references(() => organizations.id, { onDelete: "cascade" }).notNull(),
  sku: text("sku").notNull(),
  name: text("name").notNull(),
  description: text("description"),
  moq: integer("moq").default(1),
  price: decimal("price", { precision: 12, scale: 2 }),
  specifications: jsonb("specifications"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Assets (Media & 3D Models)
export const assets = pgTable("assets", {
  id: uuid("id").defaultRandom().primaryKey(),
  productId: uuid("product_id").references(() => products.id, { onDelete: "cascade" }).notNull(),
  type: assetTypeEnum("type").notNull(),
  url: text("url").notNull(),
  size: integer("size"), // in bytes
  metadata: jsonb("metadata"), // e.g., dimensions, duration
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Leads (Buyer Inquiries)
export const leads = pgTable("leads", {
  id: uuid("id").defaultRandom().primaryKey(),
  organizationId: text("organization_id").references(() => organizations.id, { onDelete: "cascade" }).notNull(),
  source: leadSourceEnum("source").default("GENERAL").notNull(),
  buyerName: text("buyer_name").notNull(),
  buyerContact: text("buyer_contact").notNull(),
  message: text("message"),
  status: leadStatusEnum("status").default("NEW").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Relations
export const organizationsRelations = relations(organizations, ({ many }) => ({
  users: many(users),
  products: many(products),
  leads: many(leads),
}));

export const usersRelations = relations(users, ({ one }) => ({
  organization: one(organizations, {
    fields: [users.organizationId],
    references: [organizations.id],
  }),
}));

export const productsRelations = relations(products, ({ one, many }) => ({
  organization: one(organizations, {
    fields: [products.organizationId],
    references: [organizations.id],
  }),
  assets: many(assets),
}));

export const assetsRelations = relations(assets, ({ one }) => ({
  product: one(products, {
    fields: [assets.productId],
    references: [products.id],
  }),
}));

export const leadsRelations = relations(leads, ({ one }) => ({
  organization: one(organizations, {
    fields: [leads.organizationId],
    references: [organizations.id],
  }),
}));
