import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetLocationService {

  constructor() {

   }
  // Using Geolocation API
  // Get Location function  
 getLocation() 
 {
    if (navigator.geolocation) {
      // get currentPosition
        navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
  }
  // show the longitude and latitude from cuurent position
showPosition(position) {
  console.log(position.coords.latitude )
  console.log(position.coords.longitude); 
}
}
