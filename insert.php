<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hostel_allotment";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$name = $_POST['name'];
$roll_no = $_POST['roll_no'];
$contact_no = $_POST['contact_no'];
$email_id = $_POST['email_id'];
$hostel = $_POST['Hostel'];
$preference1 = $_POST['Preference1'];
$preference2 = $_POST['Preference2'];
$preference3 = $_POST['Preference3'];

// Insert data into the database
$sql = "INSERT INTO applications (name, roll_no, contact_no, email_id, hostel, preference1, preference2, preference3)
VALUES ('$name', '$roll_no', '$contact_no', '$email_id', '$hostel', '$preference1', '$preference2', '$preference3')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>