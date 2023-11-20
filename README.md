# E-commerce Back End 

## Description

This project was intended to give bootcamp students practice with writing back end code for an ecommerce website, so that we can use the skills we learned in future projects or when we get a software engineering job. 

This project was created using starter code from the repo I linked in the [credits](#credits) section. I added code to set up the models being used, create the apis connecting the database and the application, and seeded in data to fill in the tables. This application uses an Express.js API and configures it to use the npm sequelize package to connect with a MySQL database. 

See [usage](#usage) section for screenshots and a walkthrough video of the application in use.

## Installation

To install this project, clone or fork from my github repo: https://github.com/whitbreezy/ecommerce-backend


## Usage

In order to use this application, the user will first need to add their mysql credentials to the .env file. Next, the user will need to start up mysql from the command line and run SOURCE db/schema.sql to set up the database for use. After the database has been created, the user will need to quit mysql and then run the command "npm run seed" to seed the data into the database.

Once the database has been sourced and seeded, the user will need to run "npm install" in the command line to install the needed packages. Finally, the user can start the application by running "npm start" in the command line.

Link to walkthrough video of the application in use:

Screenshots:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

I used the starter code in this repo: https://github.com/coding-boot-camp/fantastic-umbrella

## License

See repo for license info.
