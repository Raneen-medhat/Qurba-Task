import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// App services
import { GetLocationService} from './get-location.service'
import { QueryService} from './query.service';
import { LoginGuestComponent } from './login-guest/login-guest.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginGuestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GetLocationService,QueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
