import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dbs : DataService,

  ) { }

  ngOnInit() {
  }

  logout(){
    this.dbs.sendLogout();
  }
}
