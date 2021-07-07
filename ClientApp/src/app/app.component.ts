import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  client_env_name : string = environment.env_name ;
  server_env_name : string = null ;
}
