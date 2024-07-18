CREATE DATABASE registrationDB;

USE registrationDB;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    mobile VARCHAR(15),
    gender VARCHAR(10),
    dob DATE,
    address VARCHAR(100)
);