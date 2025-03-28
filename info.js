fetch("https://api.ip-api.com/json/?fields=status,country,city")
  .then(response => response.json())
  .then(data => {
      if (data.status !== "success") throw new Error("Failed to fetch location");

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
