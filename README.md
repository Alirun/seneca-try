# seneca-try

## Description

Tweeter-like API server for testing seneca in action

## Running the server

Server starts by following commands on port 3000

````
npm install
npm start
````

## API

### Users

- POST /users { username, password } -> { accessToken, expiresAt } # Registration & login
- PUT /users { username, password } -> { accessToken, expiresAt } # Login

- GET /tweets [BEARER_AUTH] -> [{ id, text }] # fetch all tweets for current user
- POST /tweets [BEARER_AUTH] { text } # post new tweet