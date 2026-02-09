import { url } from "./practiceArbeitnowUrl.js";

console.log(url);

let allJobs = [];

async function getjobsData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      const message = `An error occured: ${response.status}`;
      throw new Error(message);
    }

    const result = await response.json();
    console.log(result);
    allJobs = result.data;

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


    function searchBar() {
      const searchInput = document.getElementById("job-search");
      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        console.log("Search query (live input):", query);

        const filtered= allJobs.filter(job=> {
          const cName= job.company_name.toLowerCase().includes(query);
          const jTitle = job.title.toLowerCase().includes(query);
          return cName || jTitle
        })
        addJobToList(filtered);
      });
    }
    searchBar();
  } catch (error) {
    console.error(error.message);
  }
}
getjobsData();
