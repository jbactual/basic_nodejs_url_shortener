# Basic URL Shortener

Description: This is a super simple Node.js URL shortener. This is a backend only project and requires you to be able to make GET, and POST requests.

Works as of: 3/26/2022

## Primary Technologies

1. Node.js
2. Express
3. MongoDB

## Setup

1. Install Node.js
2. Install MongoDB (local instance)
3. Download Repo
4. Run "npm install"
5. Run "npm run dev" -> requires nodemon

## Server Routes

1. [http://localhost:3000/--url short code--]
   - a. Redirects user to URL based on short code

2. http://localhost:3000/api/shorten
   - a. Accepts json body -> { "longUrl":"https:google.com" }
   - b. Creates short code, saves to MongoDB, and responds with json formatted data to include short code
