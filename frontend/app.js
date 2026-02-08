//fetching jobs data

async function getData() {
  const url = "http://localhost:5000/api/applications";
  const myResponse = await fetch(url);
  const myData = await myResponse.json();
  // 1. Grab the actual HTML element from your index.html
  const jobList = document.getElementById("job-list");

  //Clear whatever is on HTML
  jobList.innerHTML = "";

  myData.forEach((data) => {
    //create list item
    const li = document.createElement("li");
    //set content to something specific from database
    li.innerHTML = `
        <strong>${data.company}</strong> ➡️ ${data.position} 
        <br>
        <small>📝 Note: ${data.notes || data.note || 'No notes'}</small>
    `;
    jobList.appendChild(li);
    
  });
}

const jobForm = document.getElementById("job-form");
jobForm.addEventListener("submit", function (e) {
  // alert("I was clicked");
  e.preventDefault();
  //capture values inside the listener
  const companyName = document.getElementById("company").value;
  const jobPosition = document.getElementById("position").value;
  const noteValue = document.getElementById("note").value;

  //create data object to store the values
  const newJob = {
    company: companyName,
    position: jobPosition,
    status: "Applied",
    email: "test@test.com",
    userName: "AdminUser",
    notes: noteValue
  };
  console.log("ready to send to backend:", newJob);

  //calling postData here as this trigger the send data to server
  postData(newJob);

  //POST function

  async function postData(newJob) {
    try {
      const url = "http://localhost:5000/api/applications";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newJob)
      });

      const result = await response.json();
      console.log("Success! Saved to DB:", result);

      //call getData() to refresh list automatically
      getData();
    } catch (err) {
      console.error("Error:", err.message);
    }
  }
});

getData();


