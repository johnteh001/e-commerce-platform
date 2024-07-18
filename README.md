# Registration Form

This project is a simple registration form implemented in Java Swing that stores user details in a MySQL database.

## Prerequisites

- Java Development Kit (JDK)
- MySQL Server
- MySQL JDBC Driver

## Setup

1. **Create the Database:**

   Run the SQL script in `resources/db/create_database.sql` to create the database and table.

   ```sql
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

