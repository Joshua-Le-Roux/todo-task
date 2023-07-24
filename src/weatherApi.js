
  //function for weather fetch api
export default async function Forecast () {
    try {
    const api = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-33.9258&longitude=18.4232&hourly=temperature_2m,relativehumidity_2m,windspeed_10m&current_weather=true")
    //converting from text to obj
    const result = await api.json()
    //grabbing the current temp 
    const currentTemp = await result.current_weather.temperature
    // setting null usestate to current temp
    return currentTemp
  }
    catch (error) {
        console.log(error)
    }
  };