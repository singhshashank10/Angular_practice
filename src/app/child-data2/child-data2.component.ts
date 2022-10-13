import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-data2',
  templateUrl: './child-data2.component.html',
  styleUrls: ['./child-data2.component.css']
})
export class ChildData2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() getDataEvent = new EventEmitter<string>();

}
