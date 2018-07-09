import { Component, OnInit } from '@angular/core';
// Get Location Service
import { GetLocationService} from '../get-location.service'
@Component({
  selector: 'app-login-guest',
  templateUrl: './login-guest.component.html',
  styleUrls: ['./login-guest.component.css']
})
export class LoginGuestComponent implements OnInit {

  constructor
  (
    public location:GetLocationService //get instance from GetLocation Service
  ) 
  {
      this.location.getLocation() // Implement GetLocation Function
   }

  ngOnInit() {
  }

}
