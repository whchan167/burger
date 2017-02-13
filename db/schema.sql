CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id integer(11) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(255),
devoured BOOLEAN default false,
date timestamp default CURRENT_TIMESTAMP on update  CURRENT_TIMESTAMP,
PRIMARY KEY(id)
); 
