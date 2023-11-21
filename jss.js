<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <link rel="stylesheet" href="style.css">
    <!-- <link rel="stylesheet" href="jquery-ui.min.css"> -->
</head>
<body>
    <fieldset id="fieldset1">
        <h2>Registration Form</h2>
        <form onsubmit="return Submit()">
            <p>
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Enter full Name" name="Name" required>
            </p>
            <p>
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter email" name="Email" required>
            </p>
            <p>    
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter password" name="Password" required>
            </p>
            <p>
                <label for="dob">Date of Birth</label>
                <input type="date" name="DOB" id="dob">
            </p>
            <p id="iagree">
                <input type="checkbox" id="agree-to-terms" required>
                <label for="agree-to-terms">Accept Terms & Conditions</label>
            </p>
            <input type="submit" id="submit" value="Submit"/>
        </form>
    </fieldset>

    <fieldset id="fieldset2">
        <h2>Entries</h2>
        <table id="tableData">
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Dob</th>
                <th>Accepted terms?</th>
            </thead>

            <tbody>
                <!-- rows to be added dynamically -->
            </tbody>
        </table>
    </fieldset>

    <!-- <script src="jquery-3.7.0.min.js"></script>
    <script src="jquery-ui.min.js"></script>

    
    <script>
        $(document).ready(function() {
            $('#date').datepicker({
                dateFormat: "dd-mm-yy",
                changeMonth: true,
                changeYear: true,
                maxDate: '3M',
                minDate: '-3M'
            });
        })
    </script> -->
    <script src="index.js"></script>
</body>
</html>
