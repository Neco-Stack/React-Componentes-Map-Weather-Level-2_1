import "./DayForecast.css"
import "../../../weatherData.json"

export interface DayForecastProps {
    date: string; 
    temp: number; 
    condition: string;
}

export interface WeatherData {
    forecast: DayForecastProps[]
}

const DayForecast: React.FC<DayForecastProps> = ({date, temp, condition}) => {
    return (
        <div className="day-forecast">
            <h3>{new Date(date).toLocaleDateString('de-DE', {weekday:'long'})}</h3>
            <p>Datum: {date}</p>
            <p>Temperatur: {temp}</p>
            <p>Wetterlage: {condition}</p>
        </div>
    );
}
 
export default DayForecast;