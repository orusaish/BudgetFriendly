-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS budgetfriendly_db;
-- Creates the "blogger" database --
CREATE DATABASE budgetfriendly_db;

USE budgetfriendly_db;

CREATE TABLE budgeting (
id INT NOT NULL AUTO_INCREMENT,
Date VARCHAR(20) NULL,
Category VARCHAR(45),
Cost DECIMAL (100) NULL,
PRIMARY KEY (id)
);

INSERT INTO budgeting (Date, Category, Cost) VALUES ("Jan, 20, 2019", "Automotive", 300);
INSERT INTO budgeting (Date, Category, Cost) VALUES ("Jan, 30, 2019", "Housing", 1000);
INSERT INTO budgeting (Date, Category, Cost) VALUES ("Fen, 09, 2019", "Utilities", 250);