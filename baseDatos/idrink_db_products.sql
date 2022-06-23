-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: idrink_db
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` text,
  `price` int DEFAULT NULL,
  `cover` varchar(255) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,'Corona','Cerveza Six Pack de 330ml',1200,'/images/uploads/product1.jpg','2022-06-23','2022-06-23 00:00:00'),(2,2,'Fernet Branca','Fernet de 750ml',1300,'/images/uploads/product2.jpg','2022-06-23','2022-06-23 00:00:00'),(3,2,'Beefeater London','Dry Gin de 700ml',3000,'/images/uploads/product3.jpg','2022-06-23','2022-06-23 00:00:00'),(4,2,'Heineken','Cerveza Six Pack de 473ml',1400,'/images/uploads/product4.jpg','2022-06-23','2022-06-23 00:00:00'),(5,1,'Jagermeister','Licor Helado de 700ml',3900,'/images/uploads/product5.jpg','2022-06-23','2022-06-23 00:00:00'),(6,1,'Johnnie Walker','Whiskey Black Label de 1000ml',6700,'/images/uploads/product6.jpg','2022-06-23','2022-06-23 00:00:00'),(7,1,'Havana Club','Ron de 3 años y 750ml',1900,'/images/uploads/product7.jpg','2022-06-23','2022-06-23 00:00:00'),(8,1,'Schneider','Cerveza Six pack de 473ml',950,'/images/uploads/product8.jpg','2022-06-23','2022-06-23 00:00:00'),(9,1,'Jose Cuervo','Tequila Silver de 750ml',6400,'/images/uploads/product9.jpg','2022-06-23','2022-06-23 00:00:00'),(10,1,'Smirnoff','Vodka Común o Saborizado de 750ml',1100,'/images/uploads/product10.jpg','2022-06-23','2022-06-23 00:00:00');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-23  1:26:24
