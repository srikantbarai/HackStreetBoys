CREATE DATABASE hostel_allotment;

USE hostel_allotment;

CREATE TABLE allotment_form (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    roll_no VARCHAR(50),
    contact_no VARCHAR(15),
    email_id VARCHAR(100),
    previous_hostel VARCHAR(50),
    preference1 VARCHAR(50),
    preference2 VARCHAR(50),
    preference3 VARCHAR(50)
);
