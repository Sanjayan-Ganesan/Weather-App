//var name = document.getElementById("name").value;
var container = document.getElementById("display_container");

var map_container = document.getElementById("map_container");

var main_container = document.getElementById("container");

async function search(){
    var key = "56a0f5000c489d8dff3b8924440ee521";
    var name = document.getElementById("name").value;
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}&units=metric`);
    let data = await res.json();
    //console.log(data);
    append_data(data);
}
//search();



function append_data(data){
    console.log(data);


 
document.getElementById("display_container").innerHTML = "";
document.getElementById("map_container").innerHTML = "";

        let main_div = document.createElement("div");


        let city_name= document.createElement("h2");
        city_name.textContent = `${data.name}`;
        city_name.style.color = `white`;
        city_name.style.marginLeft = `36.25%`

        let lat= document.createElement("h6");
        lat.textContent = `Latitude: ${data.coord.lat}°`;
        lat.style.color = `white`;
        lat.style.marginLeft = `15%`

        let lon= document.createElement("h6");
        lon.textContent = `Longitude: ${data.coord.lon}°`;
        lon.style.color = `white`;
        lon.style.marginTop = `-10.65%`;
        lon.style.marginLeft = `50%`;

        let temp= document.createElement("h1");
        temp.textContent = `${data.main.temp}°C`;
        temp.style.color = `white`;
        temp.style.marginTop = `10.65%`;
        temp.style.marginLeft = `35%`;

       






        

        let des =  document.createElement("p");
        des.innerHTML = data.weather[0].description;
        des.style.color = `white`;
        des.style.marginLeft = `35%`;


        let hum = document.createElement("h4");
        hum.innerHTML = `Humidity: ${data.main.humidity}%`
        hum.style.color = `white`;
        hum.style.marginLeft = `5%`;
        hum.style.marginTop = `10%`;



     
        let wind = document.createElement("h4");
        wind.innerHTML = `Wind: ${data.wind.speed}m/s.`
        wind.style.color = `white`;
        wind.style.marginLeft = `62%`;
        wind.style.marginTop = `-11%`;

        
       let iframe = document.createElement("iframe");
       iframe.src = src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
       iframe.style.width = "1000px";
       iframe.style.height = "350px";
       iframe.style.borderRadius = "20px"





        main_div.append(city_name,lat,lon,temp,des,hum,wind);
        container.append(main_div);

        map_container.append(iframe);

        main_container.append(map_container,container);


  
}



/*
main:
feels_like: 14.34
humidity: 87
pressure: 1017
temp: 14.56
temp_max: 16.02
temp_min: 13.23
*/