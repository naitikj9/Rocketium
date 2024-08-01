Here's the updated `README.md` file with your GitHub repository details:

```markdown
# Rocketium API

## Overview

Rocketium API is a Node.js application built with Express that allows you to manage user data. The API provides endpoints to fetch, add, update, and delete users. It also supports sorting and filtering of data.

## Features

- Fetch all user data with sorting and filtering.
- Fetch user data by ID.
- Add new users.
- Update existing users.
- Delete users.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git@github.com:naitikj9/Rocketium.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Rocketium
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Fetch the initial data:

   ```bash
   npm run fetch-data
   ```

### Running the Server

To start the server, use the following command:

```bash
npm start
```

The server will be available at [http://localhost:3000](http://localhost:3000).

## API Endpoints

### Fetch All Data

- **URL:** `/api/data`
- **Method:** `GET`
- **Query Parameters:**
  - `sort`: Sorting criteria in the format `key:order` (e.g., `name:asc` or `version:desc`).
  - `filter`: Filter keyword to search within the data.

- **Response:**
  ```json
  {
    "count": 100,
    "data": [ ... ]
  }
  ```

### Fetch Data by ID

- **URL:** `/api/data/:id`
- **Method:** `GET`
- **URL Params:**
  - `id`: The ID of the user to fetch.

- **Response:**
  ```json
  {
    "name": "Naitik Jain",
    "language": "Haryanavi",
    "id": "13SDFJSFNEOF3",
    "bio": " HI ",
    "version": 1.02
  }
  ```

### Add a New User

- **URL:** `/api/data`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "language": "English",
    "id": "NEWUSERID",
    "bio": "New user bio",
    "version": 1.00
  }
  ```

- **Response:**
  ```json
  {
    "name": "John Doe",
    "language": "English",
    "id": "NEWUSERID",
    "bio": "New user bio",
    "version": 1.00
  }
  ```

### Update an Existing User

- **URL:** `/api/data/:id`
- **Method:** `PUT`
- **URL Params:**
  - `id`: The ID of the user to update.

- **Request Body:**
  ```json
  {
    "name": "John Updated",
    "language": "French",
    "bio": "Updated bio",
    "version": 1.01
  }
  ```

- **Response:**
  ```json
  {
    "name": "John Updated",
    "language": "French",
    "id": "NEWUSERID",
    "bio": "Updated bio",
    "version": 1.01
  }
  ```

### Delete a User

- **URL:** `/api/data/:id`
- **Method:** `DELETE`
- **URL Params:**
  - `id`: The ID of the user to delete.

- **Response:**
  ```json
  {
    "name": "John Updated",
    "language": "French",
    "id": "NEWUSERID",
    "bio": "Updated bio",
    "version": 1.01
  }
  ```

## Scripts

- `npm start`: Starts the server.
- `npm run fetch-data`: Fetches and saves the initial data from the remote URL.

## License

This project is licensed under the MIT License.

## Author

Naitik Jain

## GitHub Repository

[https://github.com/naitikj9/Rocketium](git@github.com:naitikj9/Rocketium.git)

## Postman Documentation

You can import the Postman collection from the following link:

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/36707684-a49167aa-f547-4b3c-96ed-219daea473c5?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D36707684-a49167aa-f547-4b3c-96ed-219daea473c5%26entityType%3Dcollection%26workspaceId%3Da803abed-9c88-4e00-8874-518950ff8d80)



Kindly Fork To see or You can see postman JSON file

```



