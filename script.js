async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b3b6ffd719msh9b03b07492ce1c9p1bb6f6jsn7213d83ec9db',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=Dallas&days=3&dt=2023-01-16', options);
        const jsonResponse = await response.json();

        console.log(jsonResponse);
        myJavaScriptVar = JSON.stringify(jsonResponse);
        document.getElementById("weather").innerHTML = myJavaScriptVar;
    } catch (error) {
        console.error(error);
    }
}
fetchData();
