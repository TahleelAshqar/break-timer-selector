# break-timer-selector
A simple interactive break-timer selector built with HTML, JavaScript, and jQuery. The app lets users choose a break duration (10–40 minutes) and automatically displays the matching embedded YouTube timer.

# Break Timer Selector ⏱️

A simple interactive web tool that allows users to choose a break duration (10, 15, 20, 30, or 40 minutes) and instantly view the corresponding YouTube countdown timer.

## Features
- Dynamic timer switching based on user selection.
- jQuery-based UI initialization.
- Clean, modular JavaScript functions for updating displayed timers.
- Progressive enhancement: unused timers are hidden automatically.

## How It Works
- The `<select>` element triggers the `select(val)` function to show the correct timer.
- All other timer components are hidden through JavaScript DOM traversal.
- The page defaults to the 10-minute timer on load using jQuery `document.ready()`.

## Technologies Used
- HTML
- JavaScript (DOM manipulation)
- jQuery CDN

## Files
- `break.html` — Main UI and embedded timers.
- `break.js` — Logic for switching timers and handling UI behavior.

## Author
Created by تهليل (Tahleel)
