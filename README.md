1.Initialize the project
# npm init -y

2.Core backend dependencies (REQUIRED)
# npm install express mongoose
express → HTTP server + routing
mongoose → schema + MongoDB connection layer

3.Auto-restarts server when files change
# npm install --save-dev nodemon
Add this to package.json:
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}

4.Environment variables
# npm install dotenv

File Structure can be designed by mental model of :
Models = ingredients & recipes (data shape + rules)
Routes = the menu & waiters (how people ask for food)
Server.js = the restaurant building + front door

app.use(express.json()) middleware took the raw JSON  sent and converted it into a JavaScript object.
If not used app.use(express.json()); Express does not understand JSON
req.body will be undefined

req.body is data sent by the client to the server
It only exists for requests like POST, PUT, PATCH


🚀 Job Tracker & Live Job Board
A dynamic web application that allows users to manage their job applications and browse live tech job postings across Europe. This project explores the full cycle of Asynchronous JavaScript, DOM Manipulation, and RESTful API integration.

🛠️ Features
Live Data Fetching: Integrates with the Arbeitnow API to pull real-time job postings.

Application Management: Full CRUD logic for adding and deleting personal job applications.

Interactive UI: Dynamic list generation with confirmation guards and external link redirection.

Error Handling: Robust try...catch blocks to manage network failures and API status errors.

🧠 Development Journey: Problems & Solutions
During the development of this project, I faced several key logic hurdles. Below is an analysis of the challenges and how I overcame them:

1. The "ID Logic" Confusion
Problem: Understanding how to "tap into" data properties (e.g., data._id vs result._id).

Solution: Learned that result is the entire array (the "carton"), while data is the placeholder for the specific object (the "egg") currently inside the loop. I used console.log to inspect the "keys" provided by the API (like MongoDB's _id or Adzuna's company_name).

2. The "Gatekeeper" (Conditional Logic)
Problem: The confirm() dialog was appearing, but the item was being deleted regardless of the user's choice.

Solution: Implemented Boolean logic. Captured the result of confirm() in a variable and wrapped the fetch request in an if statement to ensure the action only proceeds if the user clicks "OK."

3. Execution Order & Scope
Problem: Attempting to manipulate data before it had finished downloading (Async issues) or trying to use document.createElement incorrectly.

Solution: Mastered the async/await flow. I ensured await response.json() was completed before starting the .forEach() loop. I also corrected DOM creation logic by using the global document object rather than specific list elements.

4. Event Listener Misconceptions
Problem: Attempting to use if statements to check for clicks (e.g., if(btn === 'click')).

Solution: Realized that addEventListener is an "invisible ear" that waits for a user action. It replaces the need for an if statement because the function inside only triggers when the specific event occurs.

💻 Technical Stack
Frontend: HTML5, CSS3 (Flexbox), JavaScript (ES6+)

APIs: Arbeitnow Job Board API

Concepts: Fetch API, Async/Await, DOM Manipulation, JSON Handling

🚦 Getting Started
Clone the repository.

Open index.html in your browser.

Use the "Add Job" form to track applications or view live listings from the API.

📝 Reflections
"Building this from scratch was the turning point. It moved my understanding from 'copying code' to 'understanding the data flow'—specifically how an object's properties move from a server to a UI element."