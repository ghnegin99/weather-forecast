
// let cityName = prompt("Enter city name:");
//Selectors
const form=document.querySelector("form");
const searchBtn=document.querySelector(".search-btn")
const cityList=document.querySelector(".cityList");
const formInput= document.querySelector(".form-input")
const msg=document.querySelector(".msg")

let lat;
let long;
let cityNameFa;
let cityNameEn;
// persianRegex= /^[\u0600-\u06FF\s]+$/;
// englishRegex=/^[a-zA-Z\s]*$/g
//EventListener

form.addEventListener('submit',searchCity)


//Functions


function searchCity(e){
      e.preventDefault();
    
      const cityName=formInput.value;
      console.log(cityName)
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=152f1bb9d3047d07053660c9edcb54c9`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        lat = data[0].lat;
        long = data[0].lon;
        console.log(data);

        // if(englishRegex.test(cityName)){
        //     cityNameFa=data[0].local_names.fa;
        // }
        // if(persianRegex.test(cityName)){
        //     cityNameEn=data[0].local_names.en;
        // }
          
        cityNameFa=data[0].local_names.fa;
        cityNameEn=data[0].local_names.en;
        
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=fa&appid=152f1bb9d3047d07053660c9edcb54c9`;
        fetch(api)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const { main:{temp , humidity}, weather } = data;
                // const{icon}=weather[0];
                const listContent=document.createElement("div");
                listContent.classList.add("city-content");
                const list=document.createElement('li');
                list.classList.add("list-item");
               
                  if(cityName===cityNameEn){
                
                    list.style.backgroundImage=`url( https://source.unsplash.com/random/300*400/?${cityName})`;
                   
                  }
                  else{
                    list.style.backgroundImage=`url( https://source.unsplash.com/random/300*400/?${cityNameEn})`;
                    
                  }
                 
            
                // list.style.backgroundImage=`url( https://source.unsplash.com/random/300*400/?${cityName})`;
               

                list.style.backgroundSize="cover";
                list.style.backgroundPosition="top";
                const img=document.createElement("img");
                img.classList.add("weather-icon")
                
                img.setAttribute("src", `http://openweathermap.org/img/wn/${weather[0].icon}.png`);
                
                // list.innerText=`هوای ${cityName} ${Math.round(temp)} و ${weather[0].description}  است`;
                // list.innerText=`weather in ${cityName} is ${Math.round(temp)} degree and is ${weather[0].description}`;
                
                const cityNameHeader=document.createElement("h2");
                cityNameHeader.classList.add("cityNameHeader");
                if(cityNameFa){
                cityNameHeader.innerText=cityNameFa;
                }else{
                    cityNameHeader.innerText=cityName;
                }


                const temperatureDiv=document.createElement("div");
                temperatureDiv.classList.add("temperatureDiv");
                temperatureDiv.innerText=`${Math.round(temp)}°c`;

                const descriptionImgDiv=document.createElement("div");
                descriptionImgDiv.classList.add("descriptionImgDiv");
                descriptionImgDiv.classList.add("descriptionImgDiv");

                const descriptionDiv=document.createElement("div");
                descriptionDiv.classList.add("descriptionDiv")
                descriptionDiv.innerText=weather[0].description;

                const humidityDiv=document.createElement("div");
                humidityDiv.classList.add("humidityDiv")
                humidityDiv.innerText=`درصد رطوبت:  %${humidity} `;
                

                list.appendChild(cityNameHeader);
                list.appendChild(temperatureDiv);
                descriptionImgDiv.appendChild(descriptionDiv);
                descriptionImgDiv.appendChild(img);
                list.appendChild(descriptionImgDiv);
                list.appendChild(humidityDiv);
                // listContent.appendChild(list);
                // cityList.appendChild(listContent);
                cityList.appendChild(list)
               msg.innerText="";

            })

    }).catch(()=>{
        msg.innerText="‌‌شهر وارد شده غیر‌مجاز می باشد."
        
    })
    formInput.value="";
     
}


















// const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=152f1bb9d3047d07053660c9edcb54c9`
// fetch(url)
//     .then(response => response.json())
//     .then(data => {

//         lat = data[0].lat;
//         long = data[0].lon;
//         cityNameFa = data[0].local_names.fa;
//         console.log(data)
//         const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=152f1bb9d3047d07053660c9edcb54c9`;
//         fetch(api)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//                 const { main, weather } = data;
            


//             })

//     })


