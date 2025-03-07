async function fetchIPData() {
    try {
        const response = await fetch("https://ipinfo.io/json"); 
        const data = await response.json();
        
        document.getElementById("ip").textContent = data.ip;
        document.getElementById("city").textContent = data.city;
        document.getElementById("country").textContent = data.country;
        document.getElementById("org").textContent = data.org;
        
        const [lat, lon] = data.loc.split(",").map(Number);
        document.getElementById("lat").textContent = lat;
        document.getElementById("lon").textContent = lon;
        
        document.getElementById("map").innerHTML = `<iframe width="100%" height="300" frameborder="0" style="border-radius:10px;"
            src="https://maps.google.com/maps?q=${lat},${lon}&output=embed"></iframe>`;
    } catch (error) {
        console.error("Ошибка загрузки данных", error);
    }
}