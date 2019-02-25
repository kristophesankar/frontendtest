# Chess.com Front-End Challenge
This app was developed for submission to chess.com as part of their hiring process.

A demo can be found at: http://patchdev.com/demos/frontendtest/index.html

## Installation

`yarn install` to install all dependencies
`yarn serve` to run development server at (`localhost:8080`)
`yarn run build` builds app for deployment

## Application Rubric

- Create a page with a chessboard and a sidebar. 👍
- On desktop devices the sidebar should be positioned to the right of the chessboard. 👍
- On mobile devices the sidebar should be positioned below the chessboard. 👍
- The chessboard should resize responsively to consume available space. 👍
- Clicking a chessboard square should highlight the square. 👍
- Keep track of which squares are clicked and the order in which they're clicked. 👍
- Display the information collected from step 6 in the sidebar. 👍

## Design Approach

- Planning: Draw all views of the app
- Break each view into components
- Determine events
- Determine what data lives on the store
- Coding: Design store
- Create each view and connect them to the store
- Finishing touches: Style app

## Usage

Open the demo at http://patchdev.com/demos/frontendtest/index.html or run the
development app using `yarn serve`.

- Click the squares to highlight them
- A history of all clicked quares are shown in the right sidebar with a timestamp.

## Developer Notes

- Simple fun project to implement 🙂