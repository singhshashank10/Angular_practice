import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';

  Data: any = {};


  getData(data: NgForm) {
    console.log(data);
    this.Data = data;
  }

  display = true;
  toggle() {
    this.display = !this.display;
  }

  data = 1;
  userDetails = [
    { name: "Shashank Singh", email: 'shashank@tet.com' },
    { name: "Sid Pal", email: 'sid@tet.com' },
    { name: "Vishal Mishra", email: 'vish@tet.com' },
    { name: "Aakarshit Giri", email: 'akar@tet.com' },
  ]

}
