document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("https://gn4ytme5f37wzlbja37xubhxya0dlakw.lambda-url.us-east-1.on.aws/");
        const data = await response.json();
        document.getElementById("count").innerText = data.count;
    } catch (error) {
        console.error("Error fetching visitor count:", error);
    }
});
