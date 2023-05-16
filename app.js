let user = document.querySelector('#prompt')
let btn = document.querySelector('#btn')

display('karachi')

let body = document.body
console.log(body)

function bodyBg(city){

    const accessKey = 'GpwrbtY1k8dUjAhoV4Z2vnCSq1XceChm1bb9K3hIkDg'
    let url = 'https://api.unsplash.com/search/photos'
    url = `${url}?query=${city}`
    console.log(url)

    fetch(url,{
        headers:{
            'Authorization': `Client-ID ${accessKey}`
        }
    })
    .then( res=>res.json())
    .then((data)=>{
        console.log(data.results[0].urls.full)
        body.style.backgroundImage = `url(${data.results[0].urls.full})`

        body.classList.add('bg')
    })
    .catch(err=>console.log(err))
}


function display(city){

    if(user.value == ''){
        city = 'karachi'
        bodyBg('karachi')
    }
    else{
        city = user.value.replaceAll(" ",'').toLowerCase()
        bodyBg(city)
    }
    console.log(city)
    const key = '80fdd62543b521b7bad79be15309ebb8'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`

    let h2 = document.querySelector("#city")
    let tem = document.querySelector("#temp")
    let des = document.querySelector("#des")
    let img = document.querySelector("#img")
    let humidity = document.querySelector("#humidity")
    let wind = document.querySelector("#wind")

    fetch(url)
    .then(res => res.json())
    .then((data) => {

        h2.textContent = `Weather in ${data.name}`
        tem.innerHTML = `${data.main.temp}°C`
        des.textContent = `${data.weather[0].description}`
        img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        humidity.textContent = `Humidity: ${data.main.humidity}%`
        wind.textContent = `Wind Speed: ${data.wind.speed}km/h`
        user.value = city
        console.log(data)
    }
    )
    .catch(err=>console.log(err))

}

btn.addEventListener('click',display)

