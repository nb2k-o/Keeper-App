# Keeper App - Note Management Web Application

Welcome to the Keeper App repository! This project aims to create a user-friendly web application where users can manage and store their notes. 
The frontend is built using React to provide an intuitive user interface, while the backend is constructed with Node.js and Express, 
communicating with a MongoDB database to facilitate data management and persistence.

Link to deployed app: https://keeper-iurpifitp-nigel-kumankumahs-projects.vercel.app 

## Features

- **Backend Development**: Utilized Node.js and Express to set up the server and handle API requests. Deployed on Railway.
- **MongoDB Integration**: Integrated MongoDB to facilitate efficient data storage and retrieval.
- **Frontend with React**: Developed a dynamic and responsive user interface using React. Deployed on Vercel.

## Installation (to run locally)

1. Clone the repository:

  ```
  git clone https://github.com/your-username/midterm-keeper-backend.git
  ```

2. Navigate to server/ and run server.js:

  ```
  node server.js
  ```
3. Open a new shell, navigate to client/ and run:

  ```
  npm start
  ```

If the error `node: --openssl-legacy-provider is not allowed in NODE_OPTIONS` pops up, then in the scripts section of the `package.json` file, 
you can replace the start and build commands with the following and it should fix it.

```
"start": "react-scripts start", 
"build": "react-scripts build"
```

## Contribution Guidelines

If you wish to contribute to this project, please follow these guidelines:

-   Fork the repository
-   Create a new branch (`git checkout -b feature`)
-   Make your changes
-   Commit your changes (`git commit -m 'Add feature'`)
-   Push to the branch (`git push origin feature`)
-   Create a pull request
