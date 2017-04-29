DROP DATABASE IF EXISTS retrogatchi;

CREATE DATABASE retrogatchi;

USE retrogatchi;

CREATE TABLE stats (
  id int NOT NULL AUTO_INCREMENT,
  food integer NOT NULL DEFAULT 100,
  entertainment integer NOT NULL DEFAULT 100,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
