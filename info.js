fetch("https://ipinfo.io/json?token=your_ipinfo_token") 
  .then(response => response.json()) 
  .then(data => {
      let visitorInfo = `${new Date().toLocaleString()} - ${data.city}, ${data.country}`;

      // Retrieve all visitors from localStorage
      let visitors = JSON.parse(localStorage.getItem("visitors")) || [];

      // Add the new visitor at the end
      visitors.push(visitorInfo);

      // Save updated visitors list to localStorage
      localStorage.setItem("visitors", JSON.stringify(visitors));

      // Display all visitors
      displayVisitors(visitors);
  })
  .catch(error => console.error("Error fetching location:", error));

// Function to display visitors on the page
function displayVisitors(visitors) {
    let visitorList = document.getElementById("visitor-list");
    visitorList.innerHTML = visitors.map(v => `<li>${v}</li>`).join("");
}
