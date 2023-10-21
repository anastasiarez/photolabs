# react-photolabs
PhotoLabs is a simple stock photo application - specifically a React-based single-page application (SPA) that allows users to view photos in different contexts.
The PhotoLabs project for the Web Development React course programming.
## PhotoLab's features

 * [**Display**] all photos from API.
 * [**Display**] all topics from API.
 * User can see [ **larger version**] of photo by clicking on it.
 * User can see [**similar photos**] of the selected photo.
 * User can [**like & unlike**] photos.
 * User can get [**notification**] in the shape of colored heart in the navigation bar by liking the photo.
 * User can see photos related to a [**particular topic**].

 
## Screen Shots from the projects

![Homepage_version](https://github.com/anastasiarez/photolabs/blob/main/Home%20page.jpg)

![larger_version_of_photo](https://github.com/anastasiarez/photolabs/blob/main/Photo%20liked.jpg)

![favourite_image](https://github.com/anastasiarez/photolabs/blob/main/Modal%20open.jpg)
# Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Server

### Setup

Install dependencies with `npm install`.

## Creating The DB

Use the `psql -U labber` command to login to the PostgreSQL server with the username `labber` and the password `labber`. This command **MUST** be run in a vagrant terminal, we are using the PostgreSQL installation provided in the vagrant environment. M1/M2 and WSL2 users can execute this command in their terminal.

Create a database with the command `CREATE DATABASE photolabs_development;`.

Copy the `.env.example` file to `.env.development` and fill in the necessary PostgreSQL configuration. The `node-postgres` library uses these environment variables by default.

```
PGHOST=localhost
PGUSER=labber
PGDATABASE=photolabs_development
PGPASSWORD=labber
PGPORT=5432
```

## Seeding

Run a the development server with `npm start` in the Host environment. We are only using vagrant for `psql` this week.

Both of these achieve the same result.

- Make a `GET` request to `/api/debug/reset` with `curl http://localhost:8001/api/debug/reset`.
- Use the browser to navigate to `http://localhost:8001/api/debug/reset`.

## Run The Server

Running the server normally
```sh
npm start
```

Running the server so it returns an error when saving/deleting for testing the client's error handling capabilities
```sh
npm run error
```


```sh
cd backend
npm start
```

## File structure

#### backend
     #### src
     #### README FILE

#### frontend
    #### src
        #### components
        #### hooks
        #### routes
        #### app.jsx
        #### styles

