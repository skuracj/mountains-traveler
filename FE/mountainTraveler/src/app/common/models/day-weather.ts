export interface DayWeather {
    date: string,
    temp: Temp,
    rain: number,
    icon: string
}

export interface Temp {
    max: number,
    min: number
}
