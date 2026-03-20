export const url = "https://simplejobtracker-yaoq.onrender.com/api/jobs";

async function getJobData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }
    //data of arbeitUrl
    const resultOfdata = await response.json();

    const jobs = resultOfdata.data;

    console.log(jobs);

    const list = document.getElementById("job-list");
    list.innerHTML = ""; //clearning the list before adding

    //loop through each data and splice list only 10 jobs for now
    jobs.slice(0, 10).forEach((job) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>
    ${job.company_name} </strong> <br>
     ${job.title}`;
      list.appendChild(li);

      // view btn to go to url for job listing
      const viewBtn = document.createElement("button");
      viewBtn.textContent = "view";
      //click event to redirect to url
      viewBtn.addEventListener("click", function () {
       window.location.href = job.url; // navigates to the job listing
      });
      li.appendChild(viewBtn);
    });
  } catch (err) {
    console.error("Fetch error:", err);
  }
}
getJobData();
