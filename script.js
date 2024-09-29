async function fetchURL() {
    const url = document.getElementById('url').value;

    // Fetch the content as a JSONP request or using a simple proxy service like Public APIs
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

    try {
        const response = await fetch(proxyUrl);
        const data = await response.json();

        // Check if the response was successful
        if (data && data.success) {
            document.getElementById('result').innerHTML = data.contents; // Display the content
        } else {
            document.getElementById('result').innerText = "Failed to retrieve the content.";
        }
    } catch (error) {
        console.error("Error fetching the URL:", error);
        document.getElementById('result').innerText = "Error fetching the URL.";
    }
}
