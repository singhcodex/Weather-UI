import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../model/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  api_key = "8ca1bf554fe26dff41d635d4e2f866ed";
  
  getWeatherData(): Observable<WeatherData>{
    return this.httpClient.get<WeatherData>("https://api.openweathermap.org/data/2.5/weather?q=Wiesbaden,de&appid=8ca1bf554fe26dff41d635d4e2f866ed&units=metric")
  }
}
