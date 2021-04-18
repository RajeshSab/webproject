const cityname = document.getElementById('cityname');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_value = document.getElementById('temp_real_value');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityname.value;
   
    if(cityVal === ""){
        city_name.innerText = `please write the name before you search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d146a546d3a0191c88c6028123646851`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data]; //array of an obj


        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp_real_value.innerText = arrData[0].main.temp;

        const tempMod = arrData[0].weather.main;
        //condition to check sunny or cloudy

        if(tempMod == "clear"){
            temp_status.innerHTML = 
            "<i class= 'fas fa-sun' style='color: #eccc68;'></i>";
        }else if(tempMod == "Clouds") {
                temp_status.innerHTML = 
                "<i class= 'fas fa-cloud' style='color: #f1f2f6;'></i>";
        }else if(tempMod == "Rain") {
            temp_status.innerHTML = 
            "<i class= 'fas fa-rain' style='color: #a4b0be;'></i>";
    }else{
        temp_status.innerHTML = 
            "<i class= 'fas fa-sun' style='color: #eccc68;'></i>";
    }
    datahide.classList.remove('data_hide');
        
        }catch{
            city_name.innerText = `please enter city name properly`;
            datahide.classList.add('data_hide');
        }
    }
    
}
submitBtn.addEventListener('click', getInfo);