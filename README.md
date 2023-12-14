# Keeper App - Note Management Web Application

Welcome to the Keeper App repository! This project aims to create a user-friendly web application where users can manage and store their notes. 
The frontend is built using React to provide an intuitive user interface, while the backend is constructed with Node.js and Express, 
communicating with a MongoDB database to facilitate data management and persistence.

Link to deployed app: https://keeper-iurpifitp-nigel-kumankumahs-projects.vercel.app 

## Features

- **Backend Development**: Utilized Node.js and Express to set up the server and handle API requests. Deployed on Railway.
- **MongoDB Integration**: Integrated MongoDB to facilitate efficient data storage and retrieval.
- **Frontend with React**: Developed a dynamic and responsive user interface using React. Deployed on Vercel.

## Installation (running locally)

1. Clone the repository:

  ```
  git clone https://github.com/your-username/midterm-keeper-backend.git
  ```

2. Navigate to server/ directory:

  * Install dependencies:
  ```
  npm install
  ```

  * Start the backend:
  ```
  node server.js
  ```

3. Open a new shell and navigate to client/ directory:

  * Install dependencies:
  ```
  npm install
  ```

  * Start the frontend:
  ```
  npm start
  ```

If the error `node: --openssl-legacy-provider is not allowed in NODE_OPTIONS` pops up after running `npm start`, 
then in the scripts section of the `package.json` file, 
you can replace the start and build commands with the following and it should fix it.

```
"start": "react-scripts start", 
"build": "react-scripts build"
```

## Screenshots of Keeper App Application
<img width="600" alt="Screenshot 2023-12-13 at 22 35 21" src="https://github.com/nb2k-o/Keeper-App/assets/76924338/be08807d-93e7-401b-a715-65e69c18d25f">

<br/><br/>

<img width="600" alt="Screenshot 2023-12-13 at 22 38 58" src="https://github.com/nb2k-o/Keeper-App/assets/76924338/787613e0-35ac-4832-bdd9-6b4d2161b1c0">


## Contribution Guidelines

If you wish to contribute to this project, please follow these guidelines:

-   Fork the repository
-   Create a new branch (`git checkout -b feature`)
-   Make your changes
-   Commit your changes (`git commit -m 'Add feature'`)
-   Push to the branch (`git push origin feature`)
-   Create a pull request
