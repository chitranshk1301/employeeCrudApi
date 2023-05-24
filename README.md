# Employee API

The Employee API is a RESTful web service that provides CRUD operations for managing employee data.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)

## Features

- Create a new employee with multiple contact details
- List employees with pagination support
- Update an existing employee
- Delete an employee
- Get details of a specific employee

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:chitranshk1301/employeeCrudApi.git
   cd employeeCridApi

2. Install the dependencies:

   ```bash
   npm install

3. Enter environment variables
4. Set up the database:

    Make sure you have a MySQL database server running.
    Update the database configuration in db.js to match your MySQL server settings.

5. Start the server:

   ```bash
   npm start

## Usage
To use the Employee API, you can send HTTP requests to the provided endpoints using tools like cURL, Postman, or your preferred API testing tool.

Before making requests, make sure to start the server and have a MySQL database set up with the appropriate configuration.

## Endpoints

<ul>
<li>**POST /employees/:page/:limit :** Create a new employee with multiple contact details. Request body should include employee data and contact details.</li>

<li>**GET /employees:** List employees with pagination support. Query parameters page and limit can be used to control the result set.</li>

<li>**GET /employees/{id}:** Get details of a specific employee by ID.</li>

<li>**PUT /employees/{id}:** Update an existing employee by ID. Request body should include the updated employee data.</li>

<li>**DELETE /employees/{id}:** Delete an employee by ID.</li>
</ul>

**Note:** 
<ul>
    <li>Replace {id} with the actual ID of the employee in the URL.</li>
    <li>:page and :limit are the limits for pagination</li>
</ul>
