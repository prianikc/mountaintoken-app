# ************************************************************
# Sequel Pro SQL dump
# Версия 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Адрес: 127.0.0.1 (MySQL 5.7.21)
# Схема: mnt_users_db
# Время создания: 2018-04-13 10:09:27 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Дамп таблицы users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `email`, `password`)
VALUES
	(1,'123@qwe.ru','pass'),
	(79,'12332@13323.23','123124'),
	(80,'12113@qwe.ru','pass'),
	(81,'asd@asd.er','asdsd'),
	(82,'qwew@22323.32','23123'),
	(83,'user@mnt.ru','qweqwe'),
	(84,'asd@asd.sd','asd'),
	(85,'user@example.com','asd'),
	(86,'usear@example.com','asd'),
	(87,'askjjhjd@asd.sd',',l'),
	(88,'user@mnt.rum','asd'),
	(89,'gffdh@gfjfg.yu','ljhlh;lj;ljk'),
	(90,'qweqe@asdasd','asdasdd'),
	(91,'qwee@lkj','wfwer'),
	(92,'asdf@sdsg','sgsdg'),
	(93,'AS@DSAD','ASD'),
	(94,'ASD@ASD','ASD'),
	(95,'jkj@gsa','m,njh'),
	(96,'fff@fg','hhj'),
	(97,'jkjkhj@ghjjk','jkjkjk'),
	(98,'kg@ggvb','klj'),
	(99,'kjh@hnlk','lklkj'),
	(100,'prianikc@gmail.com','qwqweqwe'),
	(101,'priasnikc@gmail.com','asdasd');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
