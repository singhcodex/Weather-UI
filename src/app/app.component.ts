import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DecimalPipe, NgIf } from '@angular/common';
import { WeatherService } from './service/weather.service';
import { WeatherData } from './model/weather.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DecimalPipe, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'Wetter-ui';
  weatherData?: WeatherData;

  constructor(private weatherService: WeatherService){}
  ngOnInit(): void {
   this.weatherService.getWeatherData()
   .subscribe({
    next:(response) => {
      this.weatherData = response;
      console.log(response);
    }
   }); 
  }
  
}
