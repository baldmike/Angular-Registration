import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  onSubmit() {
    console.log("SUBMIT SUBMIT")
  }

  user = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  };
}