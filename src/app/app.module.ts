import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// App services
import { GetLocationService} from './get-location.service'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GetLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
