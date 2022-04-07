CREATE DATABASE fullMyExpenses;

USE fullMyExpenses;

CREATE TABLE `fullmyexpenses`.`buy` ( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(50) NOT NULL , `value` INT NOT NULL , `description` VARCHAR(150) NOT NULL , `createdAt` DATE NOT NULL , `updateAt` DATE NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB; 
