-- Create database and tables
CREATE DATABASE Inventory;

-- Use database
USE Inventory;

-- Create tables
CREATE TABLE Category (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE Product (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL,
    quantity_in_stock INT NOT NULL,
    category_id INT(6) UNSIGNED,
    FOREIGN KEY (category_id) REFERENCES Category(id)
);

CREATE TABLE Customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(20)
);

CREATE TABLE Sale (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    date DATETIME NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    customer_id INT(6) UNSIGNED,
    FOREIGN KEY (customer_id) REFERENCES Customer(id)
);

CREATE TABLE SaleDetail (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    sale_id INT(6) UNSIGNED,
    product_id INT(6) UNSIGNED,
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (sale_id) REFERENCES Sale(id),
    FOREIGN KEY (product_id) REFERENCES Product(id)
);

-- Show tables
SHOW TABLES;

-- to describe the structure of a table
DESCRIBE Category;
DESCRIBE Product;
DESCRIBE Customer;
DESCRIBE Sale;
DESCRIBE SaleDetail;
