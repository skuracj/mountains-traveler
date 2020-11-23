export interface DayWeather {
    date: string;
    temp: Temp;
    rain: number;
    icon: string;
    sunrise: string;
    sunset: string;
}

export interface Temp {
    max: number;
    min: number;
}
