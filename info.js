fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(data => {
      let visitorInfo = `🌍 Visitor from: ${data.city}, ${data.country_name}`;
      console.log(visitorInfo);
      
      // Display on Page
      let locationElement = document.getElementById("visitor-location");
      if (locationElement) {
          locationElement.innerText = visitorInfo;
      }
  })
  .catch(error => console.error("Error fetching location:", error));
