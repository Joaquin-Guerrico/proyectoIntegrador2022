CREATE SCHEMA idrink_db;
USE idrink_db;

CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(100) ,
email VARCHAR(150) ,
password VARCHAR (255) ,
birthday DATE ,
img VARCHAR(255) ,
created_at DATE,
updated_at DATE
);

CREATE TABLE products (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
user_id INT UNSIGNED ,
title VARCHAR(100) ,
description TEXT ,
price INT,
cover VARCHAR(255) ,
created_at DATE,
updated_at DATE,

FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
product_id INT UNSIGNED ,
user_id INT UNSIGNED ,
comment VARCHAR(255) ,
created_at DATE,
updated_at DATE,

FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (product_id) REFERENCES products(id) 
);

INSERT INTO products
VALUES
(DEFAULT, DEFAULT, "Corona", "Cerveza Six Pack de 330ml", 1200 , "product1.jpg", DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "Fernet Branca", "Fernet de 750ml", 1300 , "product2.jpg", DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "Beefeater London", "Dry Gin de 700ml", 3000 , "product3.jpg", DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "Heineken", "Cerveza Six Pack de 473ml", 1400 , "product4.jpg", DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "Jagermeister", "Licor Helado de 700ml", 3900 , "product5.jpg", DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "Johnnie Walker", "Whiskey Black Label de 1000ml", 6700 , "product6.jpg", DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "Havana Club", "Ron de 3 años y 750ml", 1900 , "product7.jpg", DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "Schneider", "Cerveza Six pack de 473ml", 950 , "product8.jpg", DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "Jose Cuervo", "Tequila Silver de 750ml", 6400 , "product9.jpg", DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "Smirnoff", "Vodka Común o Saborizado de 750ml", 1100 , "product10.jpg", DEFAULT, DEFAULT);
