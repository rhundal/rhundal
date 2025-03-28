fetch("https://ipinfo.io/json?token=your_actual_token_here") 
  .then(response => response.json()) 
  .then(data => {
      let visitorInfo = `${new Date().toLocaleString()} - ${data.city}, ${data.country}`;

      let visitors = JSON.parse(localStorage.getItem("visitors")) || [];
      visitors.push(visitorInfo);
      localStorage.setItem("visitors", JSON.stringify(visitors));

      displayVisitors(visitors);
  })
  .catch(error => {
      console.error("Error fetching location:", error);
      document.getElementById("visitor-list").innerHTML = "<li>Error loading visitors</li>";
  });

// Function to display visitors on the page
function displayVisitors(visitors) {
    let visitorList = document.getElementById("visitor-list");
    visitorList.innerHTML = visitors.map(v => `<li>${v}</li>`).join("");
}
