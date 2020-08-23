# Migration `20200823002213-optional-landing-for-businesses`

This migration has been generated by Ignacio Carlos Monzalvo Milan at 8/23/2020, 12:22:13 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200822232425-create-landing-info-adn-business-image..20200823002213-optional-landing-for-businesses
--- datamodel.dml
+++ datamodel.dml
@@ -6,9 +6,9 @@
 }
 datasource db {
   provider = "postgres"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 model AvailabilityItem {
   id         String   @default(cuid()) @id
@@ -93,17 +93,17 @@
   bookings    Booking[]
 }
 model Business {
-  id       String      @default(cuid()) @id
+  id       String       @default(cuid()) @id
   name     String
-  email    String      @unique
-  phone    String      @unique
-  owner    User        @relation(fields: [ownerId], references: [id])
+  email    String       @unique
+  phone    String       @unique
+  owner    User         @relation(fields: [ownerId], references: [id])
   ownerId  String
-  handle   String      @unique
+  handle   String       @unique
   branches Branch[]
-  landing  LandingInfo
+  landing  LandingInfo?
 }
 model BusinessImage {
   id            String       @default(cuid()) @id
```

