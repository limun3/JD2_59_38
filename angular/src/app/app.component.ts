import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  name = 'aleksa janjic';
  voce = [
          {naziv : "jabuka", boja : "zelena"},
          {naziv : "banana", boja : "zuta"},
          {naziv : "grozdje", boja : "crno"}
  ];
}
