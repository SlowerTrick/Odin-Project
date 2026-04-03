export function renderResult(status, location, temperature, feelslike, humidity, wind) {
    const container = document.querySelector('.container');
    const info_flag = container.querySelector('.info');
    if(info_flag)
        container.removeChild(info_flag);
    const info = document.createElement('div');
    info.classList.add('info')
    
    if(!status)
    {
        createChild('h3', location.toUpperCase(), info);
        createChild('p', 'Temperature: ' + temperature + '°C', info);
        createChild('p', 'Fells Like: ' + feelslike + ' °C', info);
        createChild('p', 'Humidity: ' + humidity + '%', info);
        createChild('p', 'Wind Speed: ' + wind + ' Km/H', info);
    }
    else
    {
        createChild('h3', "ERROR! location: '" + location + "' not found", info);
    }
    container.appendChild(info);
}

function createChild(type, text, parent) {
    const child = document.createElement(type);
    child.innerText = text;
    parent.appendChild(child);
}