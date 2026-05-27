# Codebase File Summary

This document lists all primary files in the workspace and describes their functionality.

## Backend (Express & MongoDB)

*   **[backend/server/index.js](file:///e:/labpw/backend/server/index.js)**: Main server entry point. Connects to MongoDB, configures middleware (CORS, JSON parsing), and implements REST API CRUD endpoints for managing projects.
*   **[backend/server/models/Project.js](file:///e:/labpw/backend/server/models/Project.js)**: Mongoose database schema defining the structure of a `Project` document (contains `title`, `tech`, and `done` fields).
*   **[backend/server/package.json](file:///e:/labpw/backend/server/package.json)**: Node.js configuration file for the server, listing dependencies like `express`, `mongoose`, and `cors`.

## Frontend (React & Vite)

### Core Files
*   **[src/main.jsx](file:///e:/labpw/src/main.jsx)**: Entry point for React. Mounts the root component (`App`) into the HTML DOM.
*   **[src/App.jsx](file:///e:/labpw/src/App.jsx)**: Defines client-side page routing using React Router and coordinates page render logic.
*   **[src/Navbar.jsx](file:///e:/labpw/src/Navbar.jsx)**: Renders the navigation bar with page links and the mascot GIF.
*   **[src/index.css](file:///e:/labpw/src/index.css)**: Global CSS rules for background colors, default fonts, and theme-level styling.
*   **[src/App.css](file:///e:/labpw/src/App.css)**: Layout styling specific to the application shell and navigation element styles.

### Component Widgets
*   **[src/Card.jsx](file:///e:/labpw/src/Card.jsx)**: UI card component used to display individual project details (title, tech) and handle toggle completion actions.
*   **[src/Clock.jsx](file:///e:/labpw/src/Clock.jsx)**: Widget showing the current local system time, updating once per second.
*   **[src/Quicknote.jsx](file:///e:/labpw/src/Quicknote.jsx)**: Interactive text box showing user input in real-time.
*   **[src/Todolist.jsx](file:///e:/labpw/src/Todolist.jsx)**: Client-side task list manager allowing users to add or remove item entries.
*   **[src/ProjectList.jsx](file:///e:/labpw/src/ProjectList.jsx)**: Fetches project entries from the backend API database, handles inline edits, toggles completions, and renders individual project cards.
*   **[src/ProjectForm.jsx](file:///e:/labpw/src/ProjectForm.jsx)**: Submit form for creating a new project in the database via API post request.
*   **[src/ContactForm.jsx](file:///e:/labpw/src/ContactForm.jsx)**: Simple contact input form providing mock feedback based on field inputs.

### Page Views (under `src/pages/`)
*   **[src/pages/About.jsx](file:///e:/labpw/src/pages/About.jsx)**: Text view content for the About page route.
*   **[src/pages/NotFound.jsx](file:///e:/labpw/src/pages/NotFound.jsx)**: Standard 404 page layout displayed for invalid URLs.
*   **[src/pages/Home.jsx](file:///e:/labpw/src/pages/Home.jsx)**: Static home page component (currently shadowed by the inline `Home` declaration in `App.jsx`).
*   **[src/pages/Projects.jsx](file:///e:/labpw/src/pages/Projects.jsx)**: Project list page component (shadowed by inline declaration in `App.jsx`).

## Workspace Root Configs
*   **[package.json](file:///e:/labpw/package.json)**: Main package manifest listing Vite and React dependencies.
*   **[vite.config.js](file:///e:/labpw/vite.config.js)**: Configures Vite compiler plugins for React.
*   **[eslint.config.js](file:///e:/labpw/eslint.config.js)**: Configures ESLint code analysis and styles.
