document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("https://ojw4oegq5l.execute-api.us-east-1.amazonaws.com/visitorcount");
        const data = await response.json();
        document.getElementById("count").innerText = data.count;
    } catch (error) {
        console.error("Error fetching visitor count:", error);
    }
});
