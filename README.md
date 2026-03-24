# The Cinematic Library 🎬

## Project Overview
The Cinematic Library is a dynamic web application that fetches, displays, and manipulates live movie data. The core objective of this project is to build a responsive user interface entirely from scratch while strictly adhering to functional programming principles. 

## Technical Constraints & Execution
Per the project requirements, this application processes data without the use of traditional iterative loops (`for`, `while`). Instead, it relies exclusively on JavaScript Array Higher-Order Functions (HOFs).

* **Data Fetching:** Utilizes the JavaScript `fetch` API to retrieve live, asynchronous data.
* **Rendering:** Employs `.map()` to generate dynamic HTML cards for the DOM.
* **Filtering:** Uses `.filter()` to isolate movies based on specific criteria (e.g., highly-rated films or specific genres).
* **Sorting:** Implements `.sort()` to organize the fetched data chronologically or by user rating.

## Tech Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **API Data Source:** TMDB (The Movie Database) REST API

## Planned Features
* Dynamic grid layout for movie posters and metadata.
* Interactive sorting toggles (e.g., Top Rated, Newest Releases).
* Clean, responsive UI for mobile, tablet, and desktop viewing.
