--
-- Database: `healthcareblockchain_db`
--

CREATE DATABASE IF NOT EXISTS `healthcareblockchain_db`;
USE `healthcareblockchain_db`;


-- ENTITIES

--
-- Struttura della tabella `doctor`
--

CREATE TABLE IF NOT EXISTS `doctor` (
	`name` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `patient`
--

CREATE TABLE IF NOT EXISTS `patient` (
	`name` varchar(130) ,
	`surname` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `report`
--

CREATE TABLE IF NOT EXISTS `report` (
	`date` date ,
	`type` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`mail` varchar(130) ,
	`name` varchar(130) ,
	`password` varchar(130)  NOT NULL,
	`roles` varchar(130) ,
	`surname` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

ALTER TABLE `user` MODIFY COLUMN `password` varchar(128)  NOT NULL;

INSERT INTO `healthcareblockchain_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `healthcareblockchain_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);





-- relation m:m patients Doctor - Patient
CREATE TABLE IF NOT EXISTS `Doctor_patients` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_Doctor` int(11)  NOT NULL REFERENCES doctor(_id),
    `id_Patient` int(11)  NOT NULL REFERENCES patient(_id)
);

-- relation 1:m doctor Report - Doctor
ALTER TABLE `report` ADD COLUMN `doctor` int(11)  REFERENCES doctor(_id);


