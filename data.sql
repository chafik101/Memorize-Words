CREATE DATABASE  IF NOT EXISTS `gestion_word` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `gestion_word`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: gestion_word
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `parts`
--

DROP TABLE IF EXISTS `parts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parts` (
  `title` varchar(100) DEFAULT NULL,
  `num_parte` double NOT NULL,
  `num_classification` int DEFAULT NULL,
  `percent` int DEFAULT '0',
  PRIMARY KEY (`num_parte`),
  KEY `ratingd_parts_fk` (`num_classification`),
  CONSTRAINT `ratingd_parts_fk` FOREIGN KEY (`num_classification`) REFERENCES `ratings` (`num_classification`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parts`
--

LOCK TABLES `parts` WRITE;
/*!40000 ALTER TABLE `parts` DISABLE KEYS */;
INSERT INTO `parts` VALUES ('parte 1',1,1,33),('parte 2',2,1,33),('parte 3',3,1,0),('parte 4',4,1,0),('parte 5',5,1,0),('parte 6',6,1,0),('parte 7',7,1,0),('parte 8',8,1,0),('parte 9',9,1,0),('parte 10',10,1,0);
/*!40000 ALTER TABLE `parts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `title` varchar(100) DEFAULT NULL,
  `percent` int DEFAULT NULL,
  `num_classification` int NOT NULL,
  PRIMARY KEY (`num_classification`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
INSERT INTO `ratings` VALUES ('The most important 100 words',7,1),('The most important 100 names',0,2),('The most important 100 verbes',0,3),('The most important 50 adjectif',0,4);
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `word`
--

DROP TABLE IF EXISTS `word`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `word` (
  `id` int NOT NULL,
  `word_an` varchar(100) DEFAULT NULL,
  `word_ar` varchar(100) DEFAULT NULL,
  `num_parte` double DEFAULT NULL,
  `num_classification` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ratingd_word_fk` (`num_parte`),
  CONSTRAINT `ratingd_word_fk` FOREIGN KEY (`num_parte`) REFERENCES `parts` (`num_parte`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `word`
--

LOCK TABLES `word` WRITE;
/*!40000 ALTER TABLE `word` DISABLE KEYS */;
INSERT INTO `word` VALUES (1,'for','االأن',1,1),(2,'they','هم',1,1),(3,'with','مع',1,1),(4,'but','لكن',1,1),(5,'from','من',1,1),(6,'will','سوف',1,1),(7,'would','سيكون',1,1),(8,'about','عن',1,1),(9,'can','يستطيع',1,1),(10,'which','أي',1,1),(11,'there','هناك',2,1),(12,'more','أكثر',2,1),(13,'who','من',2,1),(14,'when','متى',2,1),(15,'what','ماذا',2,1),(16,'up','فوق',2,1),(17,'some','بعض',2,1),(18,'other','آخر',2,1),(19,'out','خارج',2,1),(20,'take','يأخد',2,1),(21,'because','لأن ',3,1),(22,'very','جدا',3,1),(23,'just','فقط',3,1),(24,'could','استطاع',3,1),(25,'than','من',3,1),(26,'now','الآن ',3,1),(27,'then','بعد',3,1),(28,'also','أيضا',3,1),(29,'into','داخل',3,1),(30,'over','فوق',3,1),(40,'any','أي',4,1),(41,'after','بعد',4,1),(42,'where','أين',4,1),(43,'most','معظم',4,1),(44,'should','ينبغي',4,1),(45,'much','كثير',4,1),(46,'how','كيف',4,1),(47,'back','خلف',4,1),(48,'even','حتى',4,1),(49,'here','هنا',4,1);
/*!40000 ALTER TABLE `word` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-12 18:36:31
