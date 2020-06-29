DROP DATABASE IF EXISTS wine_shop;
CREATE DATABASE wine_shop;
\c wine_shop;
CREATE TABLE alcohol(
    id SERIAL PRIMARY KEY,
    sku SERIAL,
    currency VARCHAR(5),
    price FLOAT,
    name VARCHAR(75),
    company VARCHAR(50),
    description VARCHAR(150),
    notes VARCHAR(150),
    tags TEXT[],
    inStock INT,
    quantity INT,
    color VARCHAR(10),
    vintage VARCHAR(8),
    size VARCHAR(10),
    img TEXT,
    mevushal BOOL,
    type VARCHAR(16),
    origin VARCHAR(16),
    secondPrice INT 
);

CREATE TABLE second_price(id2 SERIAL PRIMARY KEY, vintage2 VARCHAR(8), size2 VARCHAR(10), price2 FLOAT, name2 VARCHAR(75), inStock2 INT, quantity2 INT, mevushal2 BOOL, color2 VARCHAR(10), firstPrice INT);