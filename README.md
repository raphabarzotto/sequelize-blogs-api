# Sequelize Blogs API
A simple Sequelize API built using express and sequelize in Javascript.
Project was made in August 2022 as a part of [Trybe's Back-end Course](https://www.betrybe.com/)

# How to Install
You can use any of the methods to install.

To test it, you can use any API client like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/).
<details>
  <summary><strong>Locally</strong></summary>

  1. `npm install`
  2. create a `.env` file based on `.env.example`
  2. `npm run prestart` &rarr; to create database
  3. `npm run seed` &rarr; to seed database
  5. `npm start`
</details>
<details>
  <summary><strong>Docker</strong></summary>

  1. `docker-compose up -d` &rarr; to install container
  2. `docker exec -it blogs_api bash` &rarr; to enter container
  3. `npm install`
  4. `npm run prestart` &rarr; to create database
  5. `npm run seed` &rarr; to seed database
  6. `npm start`
</details>

# API's routes
1. `POST /login`
  - body should have a valid email and password:
  ```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```
  - if ok, you will recieve a JWT token after this
2. `POST /user`
  - body should look like this:
  ```json
  {
    "displayName": "Brett Wiltshire",
    "email": "lewishamilton@gmail.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```
  - if ok, you will recieve a JWT token after this
3. `GET /user`
  - needs a valid JWT token in "Authorization" Header
    - see routes 1 or 2 to get a valid token
  - should return an array with all users
4. `GET /user/:id`
  - needs a valid JWT token in "Authorization" Header
    - see routes 1 or 2 to get a valid token
  - should return a user with id given
5. `POST /categories`
  - needs a valid JWT token in "Authorization" Header
    - see routes 1 or 2 to get a valid token
  - body should look like this:
  ```json
  {
    "name": "Typescript"
  }
  ```
6. `GET /categories`
  - needs a valid JWT token in "Authorization" Header
    - see routes 1 or 2 to get a valid token
  - should return an array with all categories
7. `POST /post`
  - needs a valid JWT token in "Authorization" Header
    - see routes 1 or 2 to get a valid token
  - body should look like this:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```
8. `GET /post`
  - needs a valid JWT token in "Authorization" Header
    - see routes 1 or 2 to get a valid token
  - should return an array with all posts
9. `GET /post/:id`
  - needs a valid JWT token in "Authorization" Header
    - see routes 1 or 2 to get a valid token
  - should return all details of a post with id given
10. `DELETE /post/:id`
  - needs a valid JWT token in "Authorization" Header
    - see routes 1 or 2 to get a valid token
  - if ok, should delete post and return HTTPs status `204`
11. `DELETE /user/me`
  - needs a valid JWT token in "Authorization" Header
    - see routes 1 or 2 to get a valid token
  - if ok, should delete user based on id that is inside JWT token and return HTTPs status `204`
