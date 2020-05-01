DROP DATABASE IF EXISTS wine_shop;
CREATE DATABASE wine_shop;
\c wine_shop;
CREATE TABLE alcohol(
    id SERIAL PRIMARY KEY,
    sku VARCHAR(8),
    currency VARCHAR(5),
    price FLOAT,
    name VARCHAR(75),
    company VARCHAR(50),
    description TEXT,
    notes VARCHAR(150),
    tags TEXT,
    inStock INT,
    color VARCHAR(10),
    dryness VARCHAR(15),
    size VARCHAR(10),
    img TEXT,
    vintage YEAR,  
    mevushal BOOL,
    type VARCHAR(16),
    secondPrice BOOL 
);