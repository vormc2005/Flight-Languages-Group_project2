/**Creating DUmmy table***************************
***********************************************/

-- Drops the day_planner_db if it already exists --
DROP DATABASE IF EXISTS languages;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE languages;

USE languages;

-- Create the table plans.
CREATE TABLE phrases (
  id INTEGER NOT NULL AUTO_INCREMENT,
  english varchar(255) NOT NULL,
  translated varchar(255) NOT NULL,
  country_code integer(3) NOT NULL,
  code varchar (4) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE country_codes(
id integer (3) NOT NULL,
 code  varchar (4) NOT NULL, 
 name varchar(30) NOT NULL,
    PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO phrases (english, translated, country_id) VALUES ("Hello", "Privet", 7);
