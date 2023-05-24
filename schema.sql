-- Create a new database
CREATE DATABASE infoware;

-- Use the newly created database
USE infoware;

-- Create a table for users
CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(50) NOT NULL,
  job_title VARCHAR(100) NOT NULL,
  phone_no VARCHAR(20) NOT NULL,
  email VARCHAR(100) NOT NULL,
  address VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  primary_emergency_contact VARCHAR(100) NOT NULL,
  primary_emergency_contact_no VARCHAR(100) NOT NULL,
  primary_relationship VARCHAR(100) NOT NULL,
  secondary_relationship VARCHAR(100) DEFAULT NULL,
  secondary_emergency_contact VARCHAR(100) DEFAULT NULL,
  secondary_emergency_contact_no VARCHAR(100) DEFAULT NULL,
  password VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
