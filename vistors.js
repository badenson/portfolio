const counter = document.getElementById("counter");
async function updateCounter() {
    try {
      let response = await fetch("https://6tz57xjw2vvmlup2a4ea2dp6ga0uyvqc.lambda-url.us-east-1.on.aws/",);
      let data = await response.json();
      console.log("Response Data:", data);
      counter.innerHTML = `Views: ${data.count}`;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      counter.innerHTML = "Error loading counter";
    }
  }
  updateCounter();
