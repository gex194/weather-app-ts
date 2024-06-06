import { Dayjs } from "dayjs";

export interface CityDailyWeatherData {
    time: Dayjs[],
    temperature2mMax: number[],
    temperature2mMin: number[],
}