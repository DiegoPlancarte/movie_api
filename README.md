# Movie Look-Up

## Table of Contents
* [General Info](https://github.com/DiegoPlancarte/movie_api/blob/main/README.md#general-info)
* [Usage](https://github.com/DiegoPlancarte/movie_api/blob/main/README.md#usage)
* [Technologies](https://github.com/DiegoPlancarte/movie_api/blob/main/README.md#technologies)
* [Setup](https://github.com/DiegoPlancarte/movie_api/blob/main/README.md#setup)

[General Info]: (https://github.com/DiegoPlancarte/movie_api/blob/main/README.md#general-info)

## General Info
This project is a movie look-up website powered by the IMDb API.

## Usage
Search for any movie by title, receive a list of movies that match your search.
![gif of search function](https://github.com/DiegoPlancarte/movie_api/blob/main/app/assets/images/search.gif "search")

Choose one of the options and view details for the film, such as: Plot, Cast, Year released, etc.
![gif of looking through movie info](https://github.com/DiegoPlancarte/movie_api/blob/main/app/assets/images/info.gif "info")

Vote on the movie! Let us know if you liked it or disliked it. See a table of movies that have been voted on by our users.
![gif of voting and looking at table of movies that have been voted for](https://github.com/DiegoPlancarte/movie_api/blob/main/app/assets/images/table.gif "vote table")

## Technologies
Project was created with:
* Ruby 2.7.2
* Rails 6.0.3
* React 17.0.1
* IMDb API
* React-Rails 2.6
* Bootstrap 4.5
* DotENV-rails 2.7

## Setup
To run this project, install locally and run:

To install dependecies:
```
bundle install
```

To setup database:
```
db:create
db:migrate
```

To start the app:
```
rails s
```
