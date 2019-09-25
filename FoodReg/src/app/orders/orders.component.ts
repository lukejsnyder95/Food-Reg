import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  users = [{fname: 'Christina'},
          {fname: 'Luke'},
          {fname: 'Harsh'},
          {fname: 'Levi'}]
  constructor() { }

  ngOnInit() {
  }

}
