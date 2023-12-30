# Donuts Api

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [REST Api](#REST-Api)

# General info:

Modern back-end application created with Node.js, RESTful API, and MongoDB.

Front-end repository: https://github.com/aleksandra-depta/Donuts-React-Toolkit
> Front-end technologies: React, Redux Toolkit, Styled-Components & Bootstrap

Deployment: https://donnuts.netlify.app/

# Technologies:

* Node.js, 
* Express.js,
* MongoDB,
* Mongoose

# Setup

Clone this repository 

    https://github.com/aleksandra-depta/Donuts-Node.js-api.git


Create an .env file in your project root folder

    NODE_ENV = ...
    PORT = ...

    DATABASE_PASSWORD=...
    DATABASE=...
    DATABASE_LOCAL=...


To run this project, install it locally using npm:

    $ npm install
    $ npm start


# REST API

## Products

GET All Products

    https://donuts-api.onrender.com/api/v1/products

GET Product

    https://donuts-api.onrender.com/api/v1/products/:id


POST Create New Product

    https://donuts-api.onrender.com/api/v1/products

PATCH Update Product

    https://donuts-api.onrender.com/api/v1/products/:id

DELETE Product

    https://donuts-api.onrender.com/api/v1/products/:id


## Locations

GET All Locations

    https://donuts-api.onrender.com/api/v1/locations

GET Location

    https://donuts-api.onrender.com/api/v1/locations/:id

POST Create Location

    https://donuts-api.onrender.com/api/v1/locations

PATCH Update Location

    https://donuts-api.onrender.com/api/v1/locations/:id

DELETE Location

    https://donuts-api.onrender.com/api/v1/locations/:id





