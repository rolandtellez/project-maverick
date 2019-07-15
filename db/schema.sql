DROP DATABASE IF EXISTS test_db; 

CREATE DATABASE test_db;

USE test_db;

CREATE TABLE flightKit (
		id INT(10) AUTO_INCREMENT NOT NULL,
        airline_name VARCHAR(200) NOT NULL,
        iata_code VARCHAR(200) NOT NULL,
        icao_code VARCHAR(100)  NOT NULL,
        therapeutic_category VARCHAR(200),
        Generic_Name VARCHAR(200),
        size_strength VARCHAR(200),
        form_type VARCHAR(200), 
        unit VARCHAR(100),
        qty VARCHAR(100),
        location VARCHAR(200),
               
        PRIMARY KEY (id)
);

SELECT * FROM flightKit;