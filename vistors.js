document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("https://6tz57xjw2vvmlup2a4ea2dp6ga0uyvqc.lambda-url.us-east-1.on.aws/");
        const data = await response.json();
        document.getElementById("count").innerText = data.count;
    } catch (error) {
        console.error("Error fetching visitor count:", error);
    }
});
