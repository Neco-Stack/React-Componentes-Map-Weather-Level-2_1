import DayForecast, { WeatherData } from "../DayForecast/DayForecast";
import "../../../weatherData.json"
import "./WeatherForecast.css"
import weatherData from "../../../weatherData.json";

const WeatherForecast: React.FC = () => {
    const {forecast} = weatherData as WeatherData;
    return (
        <div className="weather-forecast">
            <h2>5-Tage-Wettervorhersage</h2>
            {forecast.map((day, index) => (
                <DayForecast key={index} {...day}/>
            ))}
                
        </div>
      );
}

export default WeatherForecast;
