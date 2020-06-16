import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public showSidenav: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showSidenav = false;
  }

  public toggleSidenav() {
    this.showSidenav = !this.showSidenav;
  }
}
