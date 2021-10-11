-- database-2.cluster-ro-cowe6qx6tye0.us-east-2.rds.amazonaws.com
-- CREATE USER 'msis-reader'@'%' IDENTIFIED BY 'msisreadonly';

USE msisdb;
DROP TABLE IF EXISTS books;
CREATE TABLE books (
    title varchar(24) PRIMARY KEY,
    authors varchar(24) NOT NULL,
    yrpublished int NOT NULL,
    publisher varchar(48)   NOT NULL,
    pagect int NOT Null,
    MSRP FLOAT NOT NULL
);

INSERT INTO books (title, authors, yrpublished, publisher, pagect, MSRP) VALUES 
('Twilight','Stephenie Meyer', 2005, 'Little, Brown and Company', 498, 10.99),
('New Moon','Stephenie Meyer', 2006, 'Little, Brown and Company', 563, 16.99),
('Eclipse','Stephenie Meyer', 2007, 'Little, Brown and Company', 629, 9.99),
('Breaking Dawn','Stephenie Meyer', 2008, 'Little, Brown and Company', 756, 9.99);