import { Component } from '@angular/core';
// Get Location Service
import { GetLocationService} from './get-location.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor
  (
    public location:GetLocationService //get instance from GetLocation Service
  )
  {
    this.location.getLocation() // Implement GetLocation Function
  }
  ngOnInit(){
  }
}
