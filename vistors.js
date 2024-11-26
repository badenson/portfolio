const counter = document.getElementById("counter");
async function updateCounter() {
    try {
      let response = await fetch("https://.lambda-url.us-east-1.on.aws/",);
      let data = await response.json();
      console.log("Response Data:", data);
      //counter.innerHTML = `Views: ${data.count}`;
      counter.innerHTML = `Views: 123`;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      counter.innerHTML = "Error loading counter";
    }
  }
  updateCounter();
