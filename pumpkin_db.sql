-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: pumpkin_db
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1
--
SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `gallery`;
CREATE TABLE `gallery` (
  `gallery_id` int(11) NOT NULL AUTO_INCREMENT,
  `image_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`gallery_id`),
  KEY `image_id` (`image_id`),
  CONSTRAINT `gallery_ibfk_1` FOREIGN KEY (`image_id`) REFERENCES `image` (`image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

LOCK TABLES `gallery` WRITE;

INSERT INTO `gallery` VALUES (1,1),(2,8),(3,32),(4,39),(5,51),(6,52),(7,62),(8,86),(9,106);

UNLOCK TABLES;


DROP TABLE IF EXISTS `image`;

CREATE TABLE `image` (
  `image_id` int(11) NOT NULL AUTO_INCREMENT,
  `image_file` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `year` varchar(4) NOT NULL,
  `rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

LOCK TABLES `image` WRITE;

INSERT INTO `image` VALUES (1,'2010/SANY0163.JPG','Frankenstein, Dracula','2010',NULL),
							(2,'2010/SANY0162.JPG','Frankenstein, Dracula','2010',4),
							(3,'2010/SANY0153.JPG','Dracula','2010',NULL),
							(4,'2010/SANY0151.JPG','Dracula','2010',NULL),
							(5,'2010/SANY0144.JPG','Frankenstein','2010',NULL),
							(6,'2010/SANY0142.JPG','Frankenstein','2010',NULL),
							(7,'2010/SANY0141.JPG','Frankenstein','2010',NULL),
							(8,'2011/SANY0235.JPG','Freddy Kruger, Pinhead, Michael Myers','2011',NULL),
							(9,'2011/SANY0236.JPG','Freddy Kruger, Pinhead, Michael Myers','2011',NULL),
							(10,'2011/SANY0234.JPG','Freddy Kruger, Pinhead, Michael Myers','2011',NULL),
							(11,'2011/SANY0231.JPG','Freddy Kruger, Pinhead, Michael Myers','2011',NULL),
							(12,'2011/SANY0230.JPG','Freddy Kruger, Pinhead, Michael Myers','2011',NULL),
							(13,'2011/SANY0229.JPG','Freddy Kruger, Pinhead, Michael Myers','2011',NULL),
							(14,'2011/SANY0227.JPG','Freddy Kruger, Pinhead, Michael Myers','2011',NULL),
							(15,'2011/SANY0219.JPG','Freddy Kruger','2011',NULL),
							(16,'2011/SANY0218.JPG','Freddy Kruger','2011',NULL),
							(17,'2011/SANY0216.JPG','Freddy Kruger','2011',NULL),
							(18,'2011/SANY0214.JPG','Freddy Kruger','2011',NULL),
							(19,'2011/SANY0213.JPG','Freddy Kruger','2011',NULL),
							(20,'2011/DSC00263.JPG','Freddy Kruger','2011',NULL),
							(21,'2011/DSC00275.JPG','Michael Myers','2011',NULL),
							(22,'2011/DSC00274.JPG','Michael Myers','2011',NULL),
							(23,'2011/DSC00273.JPG','Michael Myers','2011',NULL),
							(24,'2011/DSC00272.JPG','Michael Myers','2011',NULL),
							(25,'2011/DSC00271.JPG','Michael Myers','2011',NULL),
							(26,'2011/DSC00270.JPG','Michael Myers','2011',NULL),
							(27,'2011/DSC00269.JPG','Michael Myers','2011',NULL),
							(28,'2011/DSC00268.JPG','Michael Myers','2011',NULL),
							(29,'2011/DSC00266.JPG','Pinhead','2011',NULL),
							(30,'2011/10-29-11_2224.jpg','Pinhead','2011',NULL),
							(31,'2011/10-29-11_2226.jpg','Pinhead','2011',NULL),
							(32,'2012/DSC00338.JPG','The Mummy, The Wolfman','2012',NULL),
							(33,'2012/DSC00337.JPG','The Mummy, The Wolfman','2012',NULL),
							(34,'2012/DSC00336.JPG','The Mummy','2012',NULL),
							(35,'2012/20121028_212523.jpg','The Mummy','2012',NULL),
							(36,'2012/20121028_212624.jpg','The Mummy','2012',NULL),
							(37,'2012/20121029_220158.jpg','The Wolfman','2012',NULL),
							(38,'2012/20121029_220230.jpg','The Wolfman','2012',NULL),
							(39,'2013/DSC00353.JPG','Bicycle Girl, Tarman','2013',NULL),
							(40,'2013/DSC00354.JPG','Bicycle Girl, Tarman','2013',NULL),
							(41,'2013/DSC00355.JPG','Bicycle Girl, Tarman','2013',NULL),
							(42,'2013/DSC00356.JPG','Tarman','2013',NULL),
							(43,'2013/DSC00357.JPG','Bicycle Girl','2013',NULL),
							(44,'2013/DSC00358.JPG','Bicycle Girl','2013',NULL),
							(45,'2013/DSC00359.JPG','Bicycle Girl, Tarman','2013',NULL),
							(46,'2013/DSC00349.JPG','Tarman','2013',NULL),
							(47,'2013/DSC00350.JPG','Bicycle Girl','2013',NULL),
							(48,'2013/DSC00351.JPG','Bicycle Girl','2013',NULL),
							(49,'2013/DSC00352.JPG','Bicycle Girl, Tarman','2013',NULL),
							(50,'2013/20131027_214133.jpg','Tarman','2013',NULL),
							(51,'2014/CAM00071.jpg','Phantom of the Opera, Creature from the Black Lagoon','2014',NULL),
							(52,'2015/CAM00239.jpg','Nosferatu, Gargoyle','2015',NULL),
							(53,'2015/CAM00240.jpg','Nosferatu','2015',NULL),
							(54,'2015/CAM00241.jpg','Nosferatu','2015',NULL),
							(55,'2015/CAM00242.jpg','Nosferatu','2015',NULL),
							(56,'2015/CAM00244.jpg','Nosferatu','2015',NULL),
							(57,'2015/CAM00245.jpg','Nosferatu','2015',NULL),
							(58,'2015/CAM00249.jpg','Nosferatu','2015',NULL),
							(59,'2015/CAM00246.jpg','Gargoyle','2015',NULL),
							(60,'2015/CAM00247.jpg','Gargoyle','2015',NULL),
							(61,'2015/CAM00248.jpg','Gargoyle','2015',NULL),
							(62,'2016/IMG_20161029_235658.jpg','Carnival of Carnage, Pennywise','2016',5),
							(63,'2016/IMG_20161029_235625.jpg','Carnival of Carnage, Pennywise','2016',NULL),
							(64,'2016/IMG_20161029_235630.jpg','Carnival of Carnage, Pennywise','2016',NULL),
							(65,'2016/IMG_20161029_235636.jpg','Carnival of Carnage, Pennywise','2016',NULL),
							(66,'2016/IMG_20161029_235643.jpg','Carnival of Carnage, Pennywise','2016',NULL),
							(67,'2016/IMG_20161029_235658.jpg','Carnival of Carnage, Pennywise','2016',NULL),
							(68,'2016/IMG_20161029_235703.jpg','Carnival of Carnage, Pennywise','2016',NULL),
							(69,'2016/IMG_20161029_235711.jpg','Carnival of Carnage','2016',NULL),
							(70,'2016/IMG_20161029_235716.jpg','Carnival of Carnage','2016',NULL),
							(71,'2016/IMG_20161029_235721.jpg','Pennywise','2016',NULL),
							(72,'2016/IMG_20161029_235837.jpg','Pennywise','2016',NULL),
							(73,'2016/IMG_20161029_235855.jpg','Pennywise','2016',NULL),
							(74,'2016/IMG_20161029_235922.jpg','Pennywise','2016',NULL),
							(75,'2016/IMG_20161029_235955.jpg','Pennywise','2016',NULL),
							(76,'2016/IMG_20161029_223023.jpg','Pennywise','2016',NULL),
							(77,'2016/IMG_20161029_223427.jpg','Pennywise','2016',NULL),
							(78,'2016/IMG_20161029_223435.jpg','Pennywise','2016',NULL),
							(79,'2016/IMG_20161029_223440.jpg','Pennywise','2016',NULL),
							(80,'2016/IMG_20161029_223447.jpg','Pennywise','2016',NULL),
							(81,'2016/IMG_20161029_235326.jpg','Carnival of Carnage','2016',NULL),
							(82,'2016/IMG_20161029_235334.jpg','Carnival of Carnage','2016',NULL),
							(83,'2016/IMG_20161029_235342.jpg','Carnival of Carnage','2016',NULL),
							(84,'2016/IMG_20161029_235601.jpg','Carnival of Carnage','2016',NULL),
							(85,'2016/IMG_20161029_235608.jpg','Carnival of Carnage','2016',NULL),
							(86,'2017/IMG_20171028_202904.jpg','Grim Reaper, Crimson Ghost','2017',NULL),
							(87,'2017/IMG_20171028_202906.jpg','Grim Reaper, Crimson Ghost','2017',NULL),
							(88,'2017/IMG_20171028_202745.jpg','Grim Reaper, Crimson Ghost','2017',NULL),
							(89,'2017/IMG_20171028_202816.jpg','Grim Reaper, Crimson Ghost','2017',NULL),
							(90,'2017/IMG_20171028_202917.jpg','Crimson Ghost','2017',NULL),
							(91,'2017/IMG_20171028_202803.jpg','Crimson Ghost','2017',NULL),
							(92,'2017/IMG_20171028_202807.jpg','Crimson Ghost','2017',NULL),
							(93,'2017/IMG_20171028_202836.jpg','Crimson Ghost','2017',NULL),
							(94,'2017/IMG_20171028_202843.jpg','Crimson Ghost','2017',NULL),
							(95,'2017/IMG_20171028_203510.jpg','Crimson Ghost','2017',NULL),
							(96,'2017/IMG_20171028_203519.jpg','Crimson Ghost','2017',NULL),
							(97,'2017/IMG_20171028_203602.jpg','Crimson Ghost','2017',NULL),
							(98,'2017/IMG_20171028_203621.jpg','Crimson Ghost','2017',NULL),
							(99,'2017/IMG_20171028_202753.jpg','Grim Reaper','2017',NULL),
							(100,'2017/IMG_20171028_202757.jpg','Grim Reaper','2017',NULL),
							(101,'2017/IMG_20171028_202824.jpg','Grim Reaper','2017',NULL),
							(102,'2017/IMG_20171028_202828.jpg','Grim Reaper','2017',NULL),
							(103,'2017/IMG_20171028_202924.jpg','Grim Reaper','2017',NULL),
							(104,'2017/IMG_20171028_203253.jpg','Grim Reaper','2017',NULL),
							(105,'2017/IMG_20171028_203442.jpg','Grim Reaper','2017',NULL),
							(106,'2018/IMG_20181027_211246.jpg','The Crypt Keeper, Art the Clown','2018',5),
							(107,'2018/IMG_20181027_211248.jpg','The Crypt Keeper, Art the Clown','2018',NULL),
							(108,'2018/IMG_20181027_211249.jpg','The Crypt Keeper, Art the Clown','2018',NULL),
							(109,'2018/IMG_20181027_211300.jpg','The Crypt Keeper, Art the Clown','2018',NULL),
							(110,'2018/IMG_20181027_211303.jpg','The Crypt Keeper, Art the Clown','2018',NULL);


UNLOCK TABLES;
SET FOREIGN_KEY_CHECKS=1;