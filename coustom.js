document.querySelector('.btn').addEventListener('click', function(){
    const inputValue = document.querySelector('.form-control').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue+'&units=metric&appid=fc59b04aa5b2df91d35db6fbf4800b7b')
    .then(response => response.json())
    .then(data => {
        const tempValue = data.main.temp;
        document.querySelector('.temp').innerText = tempValue;
        const cityName = data.name;
        document.querySelector('.city').innerText = cityName || "Unknown Location!";
        const desc = data.weather[0].description;
        document.querySelector('.desc').innerText = desc;
        document.querySelector('.icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    });

        

});