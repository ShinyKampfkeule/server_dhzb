# Deutsches Herzzentrum Berlin - Onboarding Platform

___ 

This is the Server-App and MongoDB-Config for the DHZB React-Project !

## Table of Contents

___

* [General info](#general-info)
* [Technologies](#technologies)
* [Features](#features)
* [Setup](#setup)

## General Info
___

All Server-Calls of the React-App will link to this Server

## Technologies
___

Project is created with:

* express version: 4.16.1
* mongoose version: 6.1.8
* mongoDB version: 5.0.5
* mongo-express: 0.54.0
* and many more little packages

## Features
___

* Login-View - Log into your account
* Task-View - See all your tasks to do
* Home-View - See urgent informations and navigate through different views

#### To Do:

* User Informations - Input or refresh your personal Data
* Timetable - Get Infromations about your first days at DHZB
* Messages - Read Messages

## Setup
___

To run this project, install it locally using npm:

```
$ cd ../dhzbreact  
$ npm install  
$ npm start
```

To configurate and start your MongoDB inside Docker:

```
$ docker-compose -f docker-compose.yml up
Then run writeDB.js
```

Warning: You have to start the project dhzbreact and you need to setup a mongoDB to get Access ! All informations how to start the React-App is inside dhzbreact-ReadMe

Link for dhzbreact Download:
https://github.com/ShinyKampfkeule/dhzbreact.git

Link for Github Repo (reactdhzb):
https://github.com/ShinyKampfkeule/dhzbreact