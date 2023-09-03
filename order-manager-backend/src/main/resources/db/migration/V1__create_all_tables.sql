CREATE TABLE "products" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR,
    "image_url" VARCHAR,
    "price" INTEGER NOT NULL
);

CREATE TABLE "purchase_orders" (
    "id" SERIAL PRIMARY KEY,
    "products_amount" INTEGER NOT NULL ,
    "surcharge_amount" INTEGER NOT NULL,
    "total_amount" INTEGER NOT NULL,
    "is_shipped" BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE "purchase_orders_products" (
    "id" SERIAL PRIMARY KEY,
    "product_id" INTEGER NOT NULL,
    "purchase_order_id" INTEGER NOT NULL,
    "product_price" INTEGER NOT NULL,
    "product_qty" INTEGER NOT NULL
);

CREATE TABLE "shipping_orders" (
   "id" SERIAL PRIMARY KEY
);

CREATE TABLE "shipping_orders_purchase_orders" (
   "shipping_orders_id" INTEGER NOT NULL,
   "purchase_order_id" INTEGER NOT NULL
);

ALTER TABLE "purchase_orders_products" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");
ALTER TABLE "purchase_orders_products" ADD FOREIGN KEY ("purchase_order_id") REFERENCES "purchase_orders" ("id");
ALTER TABLE "shipping_orders_purchase_orders" ADD FOREIGN KEY ("shipping_orders_id") REFERENCES "shipping_orders" ("id");
ALTER TABLE "shipping_orders_purchase_orders" ADD FOREIGN KEY ("purchase_order_id") REFERENCES "purchase_orders" ("id");
