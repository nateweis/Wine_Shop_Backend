INSERT INTO alcohol(currency, price, name, company, description, notes, tags, inStock, color, vintage, size, img, mevushal, type, secondPrice) VALUES(
    'USD', 14.00, 'Red Italian Basket NV', 'Cantina Gabriele', 'Merlot & Sangiovese', null, '{"semi-sweet"}', 10, 'red', 'NV', '750ml', 
    'public\wine_imgs\Italy\Cantina Gavirele\red_italian_basket_nv.png', true, 'wine', null
);

INSERT INTO alcohol(currency, price, name, company, description, notes, tags, inStock, color, vintage, size, img, mevushal, type, secondPrice) VALUES(
    'USD', 11.00, 'Dolcemente Red', 'Cantina Gabriele', 'Cabernet Sauvignon & Cesanese', null, '{"semi-sweet", "vegan"}', 15, 'red', '2017', '750ml', 
    'public\wine_imgs\Italy\Cantina Gavirele\dolcemente_red.png', true, 'wine', 1
);
















INSERT INTO second_price(firstPrice, vintage2, size2, price2, inStock2) VALUES(1, '2017', '375ml', 6.00, 21);