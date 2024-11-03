let ip;

let userIp;

////////////////////////////

let isp;

let countryCode;

let country;

let governorate;

let city;

let latitude;

let longitude;

////////////////////////////

let v_isp = document.querySelector(".isp");

let v_countryCode = document.querySelector(".country-code");

let v_country = document.querySelector(".country");

let v_governorate = document.querySelector(".governorate");

let v_city = document.querySelector(".city");

let v_latitude = document.querySelector(".latitude");

let v_longitude = document.querySelector(".longitude");

let v_mapLink = document.querySelector(".maps-link");

////////////////////////////

let ipInput = document.querySelector(".ip-input");

let getData = document.querySelector(".get-data");

fetch("https://api.ipify.org?format=json")

    .then(response => response.json())

    .then(data => {

        userIp = data.ip;

        ipInput.value = userIp;

        ipInput.placeholder = userIp;

    });

getData.onclick = () => {

    ip = ipInput.value;

    if (ipInput.value != "") {

        fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=e9714e17a51e4a889294a1ed4f232e46&ip=${ip}`)

            .then(response => response.json())

            .then(data => {

                isp = data.isp;

                countryCode = data.calling_code;

                country = data.country_name;

                governorate = data.state_prov;

                city = data.city;

                latitude = data.latitude;

                longitude = data.longitude;

                ////////////////////////////

                v_isp.innerText = `ISP : ${isp}`;

                v_countryCode.innerText = `Country Code : ${countryCode}`;

                v_country.innerText = `Country : ${country}`;

                v_governorate.innerText = `Governament : ${governorate}`;

                v_city.innerText = `City : ${city}`;

                v_latitude.innerText = `Latitude : ${latitude}`;

                v_longitude.innerText = `Longitude : ${longitude}`;

                v_mapLink.href = `https://www.google.com/maps/place/${latitude}, ${longitude}`;

                v_mapLink.innerText = "Open Map";

            });

    } else {

        fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=e9714e17a51e4a889294a1ed4f232e46&ip=${userIp}`)

            .then(response => response.json())

            .then(data => {

                isp = data.isp;

                countryCode = data.calling_code;

                country = data.country_name;

                governorate = data.state_prov;

                city = data.city;

                latitude = data.latitude;

                longitude = data.longitude;

                ////////////////////////////

                v_isp.innerText = `ISP : ${isp}`;

                v_countryCode.innerText = `Country Code : ${countryCode}`;

                v_country.innerText = `Country : ${country}`;

                v_governorate.innerText = `Governament : ${governorate}`;

                v_city.innerText = `City : ${city}`;

                v_latitude.innerText = `Latitude : ${latitude}`;

                v_longitude.innerText = `Longitude : ${longitude}`;

                v_mapLink.href = `https://www.google.com/maps/place/${latitude}, ${longitude}`;

                v_mapLink.innerText = "Open Map";

            });

    }

};