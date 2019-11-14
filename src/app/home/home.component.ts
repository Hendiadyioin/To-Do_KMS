import { Component, OnInit } from '@angular/core';
import { Task } from '../classes/Task';
import {TasksService} from '../services/tasks.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allTasks: Task[] = [];


  constructor(private tasksService: TasksService) {
    const test: Task = new Task('Wäsche waschen', 'Die Wäsche muss ganz dringend gewaschen und sauber gemacht werden', false);
    this.tasksService.addTask(test);
    this.allTasks = this.tasksService.getAllTasks();
  }

  ngOnInit() {
  }


  changeDone(task: Task) {
    task.isDone = !task.isDone;
  }
}
