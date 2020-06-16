import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() appName: string;
  @Output() toggleMenu: EventEmitter<void>;

  constructor() { this.toggleMenu = new EventEmitter<void>(); }

  ngOnInit(): void {
    
  }

}
