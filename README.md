# Boss Machine Project

This is a backend API project for the **Boss Machine**, which handles various routes for managing **minions**, **ideas**, and **meetings**. It is designed to interact with a database, persist data, and validate certain conditions with middleware. The project also includes some bonus features like working with minions' tasks.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [API Endpoints](#api-endpoints)
  - [Minions](#minions)
  - [Ideas](#ideas)
  - [Meetings](#meetings)
  - [Bonus - Work Routes](#bonus-work-routes)
- [Project Overview](#project-overview)
- [Contributing](#contributing)

## Technologies Used
- Node.js
- Express.js
- Mocha (for testing)
- Supertest (for API testing)
- MongoDB (or any database of choice)
- Middleware for validation (e.g., checkMillionDollarIdea)
  
## Features
- CRUD operations for **minions**, **ideas**, and **meetings**.
- Validation for certain actions (e.g., ensuring ideas have at least one million dollars in projected yield).
- Error handling and appropriate status codes for invalid inputs.
- Bonus work routes for **minions** and their tasks.
- Middleware to reject insufficiently profitable ideas.

## Installation

Follow these steps to get your local development environment set up:

1. Clone the repository to your local machine:

    ```bash
    git clone <repo-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd project-4-boss-machine-start
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```
4. I have had some problems with updating some dependencies because some of them have old versions

5. Probably you will have to install new version of react-redux:

    ``` bash
    npm install redux@4
    ```

    or

   ``` bash
   npm install react-redux@latest
   ```
   
## Running Tests

To ensure everything works as expected, you can run the tests:

1. Run all tests using Mocha:

    ```bash
    npm run test
    ```

2. Alternatively, you can use the following command to run the tests manually:

    ```bash
    npx mocha
    ```

3. If you want to continuously watch and run the tests while developing:

    ```bash
    npm run watch
    ```

Tests should automatically run if you make changes to server files. If you want you can quit the loop by pressing `Ctrl + C`.

I have had problems running the test and I didn't solve this.

## API Endpoints

### Minions
- **GET** `/api/minions` – Returns an array of all minions.
- **GET** `/api/minions/:minionId` – Returns a single minion object by ID.
- **POST** `/api/minions` – Adds a new minion.
- **PUT** `/api/minions/:minionId` – Updates an existing minion by ID.
- **DELETE** `/api/minions/:minionId` – Deletes a minion by ID.

### Ideas
- **GET** `/api/ideas` – Returns an array of all ideas.
- **GET** `/api/ideas/:ideaId` – Returns a single idea object by ID.
- **POST** `/api/ideas` – Adds a new idea.
- **PUT** `/api/ideas/:ideaId` – Updates an existing idea by ID.
- **DELETE** `/api/ideas/:ideaId` – Deletes an idea by ID.

### Meetings
- **GET** `/api/meetings` – Returns an array of all meetings.
- **POST** `/api/meetings` – Creates a new meeting.
- **DELETE** `/api/meetings` – Deletes all meetings.

### Bonus - Work Routes (For Minions)
- **GET** `/api/minions/:minionId/work` – Returns all work for a specific minion.
- **PUT** `/api/minions/:minionId/work/:workId` – Updates a specific work item by ID.
- **POST** `/api/minions/:minionId/work` – Adds a new work item for a specific minion.
- **DELETE** `/api/minions/:minionId/work/:workId` – Deletes a specific work item by ID.

## Project Overview

You can view a video demonstration of the final app here:

  <a href= "https://s3.amazonaws.com/codecademy-content/programs/build-apis/solution-videos/BossMachine480.mov">Project example</a>
  
## Contributing

Feel free to fork it, make changes, and submit a pull request if you want to contribute to this project. Be sure to write tests for any new features or bug fixes you introduce.


---

Feel free to adapt and expand upon this README as necessary based on your project specifics and additional details you want to include!

