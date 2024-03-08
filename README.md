# React Application: Posts and Comments

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Conditions](#conditions)
4. [Build/Run Process](#build-run-process)
5. [Approximate Time Needed](#approximate-time-needed)
6. [Console Log](#console-log)
7. [Notes](#notes)

## Introduction
This project is a React application + Tailwind that displays a list of posts and associated comments fetched via a provided API. The application includes two routes: `/posts` and `/post/{id}`. It also features a search input for filtering posts by user data and allows users to click on a post to view it in a new page.
Application is available on Vercel:
`https://ananas-test-dragan-vulesic.vercel.app/`
Git respository:
`https://github.com/vulesic/ananas.git`

## Features
- Two routes: `/posts` and `/post/{id}`
- List of posts and associated comments
- Search input for filtering posts by user data
- Clicking on a post opens it in a new page

## Conditions
- Minimal usable layout with appealing design
- No third-party state management or UI component libraries
- Reusable and resilient components
- Use of advanced React concepts like HOC, Render props, Compound components, etc.
- TypeScript
- Folder structure and code organization as per developer preference
- Linters, code style checkers, and component testers can be included
- Unit tests are highly recommended but not mandatory

## Build/Run Process
1. Clone the repository from GitHub.
2. Install dependencies using `npm install` or `yarn install`.
3. Start the development server with `npm start` or `yarn start`.
4. Access the application in your browser at `http://localhost:3000`.

## Approximate Time Needed
1. Project Setup and Initial Configuration:
   Setting up the React project with create-react-app and configuring TypeScript: 1 hour
2. Component Architecture and Routing:
   Defining component structure and creating routes (/posts and /post/{id}): 1 hour
3. Fetching Data from API:
   Setting up API integration and fetching posts and comments data: 1 hour
4. Posts List Component:
   Designing and implementing the component to display the list of posts: 1.5 hours
   Implementing filtering functionality based on user data: 0.5 hours
5. Post Details Component:
   Designing and implementing the component to display the details of a single post: 1 hour
6. Search Input Component:
   Creating the search input component and integrating it with filtering functionality: 0.5 hours
7. Logging Component Render:
   Implementing the logging functionality to log "Hello from <component name>" for each rendered component: 0.5 hour
8. Styling and UI Design:
   Styling components and ensuring a minimal yet appealing UI design: 1 hour
   Total Approximate Time: 8 hours

## Console Log
Every component once rendered logs "Hello from <component name>" in the console.

## Notes
- Use `create-react-app` for bootstrapping.
- Utilize TypeScript for type safety.
- Ensure code quality with linting and testing tools.
- Follow best practices for component reusability and code organization.

