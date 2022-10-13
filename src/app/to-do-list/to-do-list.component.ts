import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arrTask: any[] = [];
  tasks(task: string) {
    this.arrTask.push({ id: this.arrTask.length, name: task })
    console.log(this.arrTask)
  }

  removeTask(id: number) {
    console.log(id);
    this.arrTask = this.arrTask.filter(item => item.id != id)
  }

}
