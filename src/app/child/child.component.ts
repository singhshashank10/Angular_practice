import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() item = 0;
  constructor() { }

  ngOnInit(): void {
  }
  updateData() {
    this.item = Math.floor(Math.random() * 10);
  }

}

