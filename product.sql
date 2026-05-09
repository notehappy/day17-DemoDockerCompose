CREATE TABLE IF NOT EXISTS product (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  product_price NUMERIC NOT NULL,
  product_quantity INTEGER NOT NULL,
  product_image_url TEXT
);

INSERT INTO "product" ("product_id", "product_name", "product_price", "product_quantity", "product_image_url") VALUES (1, 'Example Product', '19.99', 50, 'https://navalapp.com/snp-wp-content/uploads/2024/06/python_3_v1.jpg');
INSERT INTO "product" ("product_id", "product_name", "product_price", "product_quantity", "product_image_url") VALUES (2, 'Example Product', '19.99', 50, 'https://b2dmain-ruk.cdn.jelastic.net/wp-content/uploads/2019/09/sqr_arduino.png.webp');
INSERT INTO "product" ("product_id", "product_name", "product_price", "product_quantity", "product_image_url") VALUES (3, 'Example Product', '19.99', 50, 'https://b2dmain-ruk.cdn.jelastic.net/wp-content/uploads/2019/09/sqr_arduino.png.webp');
INSERT INTO "product" ("product_id", "product_name", "product_price", "product_quantity", "product_image_url") VALUES (4, 'Example Product', '19.99', 50, 'https://b2dmain-ruk.cdn.jelastic.net/wp-content/uploads/2019/09/sqr_arduino.png.webp');
INSERT INTO "product" ("product_id", "product_name", "product_price", "product_quantity", "product_image_url") VALUES (5, 'Example Product', '19.99', 50, 'https://b2dmain-ruk.cdn.jelastic.net/wp-content/uploads/2019/09/sqr_arduino.png.webp');
INSERT INTO "product" ("product_id", "product_name", "product_price", "product_quantity", "product_image_url") VALUES (6, 'Example Product', '19.99', 50, 'https://b2dmain-ruk.cdn.jelastic.net/wp-content/uploads/2019/09/sqr_arduino.png.webp');

SELECT setval(
  pg_get_serial_sequence('product', 'product_id'),
  COALESCE(MAX(product_id), 1)
)
FROM product;