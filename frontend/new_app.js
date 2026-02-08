const url = "http://localhost:5000/api/applications";

async function usersData() {
  try {
    const output = await fetch(url);
    if (!output.ok) {
      throw new Error(`Response status: ${output.status}`);
    }

    const result = await output.json();
    console.log(result);

    const company = document.getElementById("company");
    const position = document.getElementById("position");
    const listContainer = document.getElementById("job-list");
    listContainer.innerHTML = ""; //prevents the doc to duplicate

    result.forEach((data) => {
      const li = document.createElement("li");
      li.textContent = `${data.company} ➡️ ${data.position}`;
      listContainer.appendChild(li);

      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete Me";
      li.appendChild(delBtn);
      delBtn.addEventListener("click", () => deleteJob(data._id));
    });
  } catch (err) {
    console.error(err.message);
  }
}

usersData();

async function getFormData(e) {
  e.preventDefault();
  const companyInput = document.getElementById("company").value;
  const positionInput = document.getElementById("position").value;
  try {
    const jsonString = JSON.stringify({
      userName: "itsAname",
      email: "test@test.com",
      company: companyInput,
      position: positionInput,
      status: "Interviewing"
    });
    // console.log(jsonString);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: jsonString
    });
    //POST method
    if (response.ok) {
      console.log("Success! New job added. ");
      usersData();

      //clear the form
      e.target.reset();
    }
  } catch (err) {
    console.error("The Messenger failed", err.message);
  }
}

//target the form
const formData = document.getElementById("job-form");
formData.addEventListener("submit", getFormData);

//delete the list
async function deleteJob(id) {
  try {
    const url = `http://localhost:5000/api/applications/${id}`;
    const isConfirmed = confirm("Are you sure?"); // built in function to If the user does not confirm → stop.
    if(!isConfirmed) return; // stop if user clicks Cancel also if (userSaidNo) stopEverything;


    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("Item deleted successfully from the API");

    usersData();

  } catch (err) {
    console.error("Error deleting data:", err);
  }
  
}


