DROP SCHEMA IF EXISTS idrink_db;
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
on update current_timestamp() DATETIME,

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

INSERT INTO users
VALUES
(DEFAULT, "Pepito", "pepe@gmail.com", "pepeKpo", "1992-02-12" , "/images/uploads/pepe.jpg", curdate(), DEFAULT);
(DEFAULT, "manuel", "manumartinezzavalia@gmail.com", "$2a$10$bZGqxUSuhYZISJkhBX4hT.awcfEqlsglYF.HxHEDbLNn2TstMSI3G", "2002-02-20" , "\images\uploads\f11dbb4fc8f48f0a236aea999905b62f", curdate(), DEFAULT);

INSERT INTO products
VALUES
(DEFAULT, 1, "Corona", "Cerveza Six Pack de 330ml", 1200 , "/images/uploads/product1.jpg", curdate(), curdate()),
(DEFAULT, 1, "Fernet Branca", "Fernet de 750ml", 1300 , "/images/uploads/product2.jpg", curdate(), curdate()),
(DEFAULT, 1, "Beefeater London", "Dry Gin de 700ml", 3000 , "/images/uploads/product3.jpg", curdate(), curdate()),
(DEFAULT, 1, "Heineken", "Cerveza Six Pack de 473ml", 1400 , "/images/uploads/product4.jpg", curdate(), curdate()),
(DEFAULT, 1, "Jagermeister", "Licor Helado de 700ml", 3900 , "/images/uploads/product5.jpg", curdate(), curdate()),
(DEFAULT, 1, "Johnnie Walker", "Whiskey Black Label de 1000ml", 6700 , "/images/uploads/product6.jpg", curdate(), curdate()),
(DEFAULT, 1, "Havana Club", "Ron de 3 años y 750ml", 1900 , "/images/uploads/product7.jpg", curdate(), curdate()),
(DEFAULT, 1, "Schneider", "Cerveza Six pack de 473ml", 950 , "/images/uploads/product8.jpg", curdate(), curdate()),
(DEFAULT, 1, "Jose Cuervo", "Tequila Silver de 750ml", 6400 , "/images/uploads/product9.jpg", curdate(), curdate()),
(DEFAULT, 1, "Smirnoff", "Vodka Común o Saborizado de 750ml", 1100 , "/images/uploads/product10.jpg", curdate(), curdate());


INSERT INTO comments
VALUES
(DEFAULT, 1 , 1 , "Que rica!", curdate(), DEFAULT);


UPDATE `idrink_db`.`products` SET `user_id` = '2' WHERE (`id` = '2');
UPDATE `idrink_db`.`products` SET `user_id` = '2' WHERE (`id` = '3');
UPDATE `idrink_db`.`products` SET `user_id` = '2' WHERE (`id` = '4');
UPDATE `idrink_db`.`products` SET `created_at` = '2022-06-21' WHERE (`id` = '5');

UPDATE `idrink_db`.`users` SET `password` = '$2a$10$bZGqxUSuhYZISJkhBX4hT.awcfEqlsglYF.HxHEDbLNn2TstMSI3G' WHERE (`id` = '1');
UPDATE `idrink_db`.`users` SET `img` = '/images/uploads/f11dbb4fc8f48f0a236aea999905b62f' WHERE (`id` = '2');
