import { url } from "./practiceArbeitnowUrl.js";

console.log(url);

let allJobs = [];

//jobs array
function addJobToList(allJobs) {
  const jobList = document.getElementById("job-list");
  jobList.innerHTML = ""; //clear old list
  allJobs.forEach((job) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${job.company_name} ➡️${job.title}</strong>`;
    jobList.appendChild(li);
  });
}
addJobToList(allJobs);

//The searchbar

function searchBar() {
  const searchInput = document.getElementById("job-search");
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    console.log("Search query (live input):", query);

    const filtered = allJobs.filter((job) => {
      const cName = job.company_name.toLowerCase().includes(query);
      const jTitle = job.title.toLowerCase().includes(query);
      return cName || jTitle;
    });
    addJobToList(filtered);
  });
}
searchBar();

//Main fetch
async function getjobsData() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    allJobs = result.data;
  } catch (error) {
    console.error(error.message);
  }
}
getjobsData();

//Job-form listener
const form= document.getElementById("job-form");
form.addEventListener('submit', function(event){
  // Stop the form from submitting normally and reloading the page
  event.preventDefault();
//variables for the two inputs using .value
const company = document.getElementById("company").value;
const position = document.getElementById("position").value;

//Create JobObject
const newJobs ={
  company_name : company,
  title : position
}
//add to main list 
allJobs.push(newJobs);

addJobToList(allJobs);   

//clear form after adding
event.target.reset();
})
