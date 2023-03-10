async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'YOUR API KEY HERE',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    try {
        //const response = await fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=Dallas&days=3&dt=2023-01-16', options);
        const response = await fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=Dallas&days=3', options);
        const jsonResponse = await response.json();

       
        myJavaScriptVar = JSON.stringify(jsonResponse);
        tdata = JSON.parse(myJavaScriptVar);
        temp_f = tdata.current.temp_f

        const maxtemp_f_day0 = tdata.forecast.forecastday[0].day.maxtemp_f;
        const maxtemp_f_day1 = tdata.forecast.forecastday[1].day.maxtemp_f;
        const maxtemp_f_day2 = tdata.forecast.forecastday[2].day.maxtemp_f;

        const mintemp_f_day0 = tdata.forecast.forecastday[0].day.mintemp_f;
        const mintemp_f_day1 = tdata.forecast.forecastday[1].day.mintemp_f;
        const mintemp_f_day2 = tdata.forecast.forecastday[2].day.mintemp_f;

        //myJavaScriptVar = tdata.current.toString();

        console.log(tdata);
        console.log("tdata.current.temp_f is: " + tdata.current.temp_f);
        // high temperatures
        console.log("tdata.forecast is: " + tdata.forecast);
        console.log("tdata.forecast.forecastday[0].day.maxtemp_f is: " + tdata.forecast.forecastday[0].day.maxtemp_f);
        document.getElementById("1h").innerHTML = maxtemp_f_day0 + "&#176";

        console.log("tdata.forecast.forecastday[1].day.maxtemp_f is: " + tdata.forecast.forecastday[1].day.maxtemp_f);
        document.getElementById("2h").innerHTML = maxtemp_f_day1 + "&#176";;

        console.log("tdata.forecast.forecastday[2].day.maxtemp_f is: " + tdata.forecast.forecastday[2].day.maxtemp_f);
        document.getElementById("3h").innerHTML = maxtemp_f_day2 + "&#176";;

        //low temperatures
        console.log("tdata.forecast.forecastday[0].day.mintemp_f is: " + tdata.forecast.forecastday[0].day.mintemp_f);
        document.getElementById("1l").innerHTML = mintemp_f_day0 + "&#176";;

        console.log("tdata.forecast.forecastday[1].day.mintemp_f is: " + tdata.forecast.forecastday[1].day.mintemp_f);
        document.getElementById("2l").innerHTML = mintemp_f_day1 + "&#176";;

        console.log("tdata.forecast.forecastday[2].day.mintemp_f is: " + tdata.forecast.forecastday[2].day.mintemp_f);
        document.getElementById("3l").innerHTML = mintemp_f_day2 + "&#176";;


        //current temperatures
        document.getElementById("current_temp").innerHTML = temp_f + "&#176";;
        //all weather data
        document.getElementById("weather").innerHTML = myJavaScriptVar;

    } catch (error) {
        console.error(error);
    }
}
fetchData();
