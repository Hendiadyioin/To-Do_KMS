import { Injectable } from '@angular/core';
import { Task } from '../classes/Task';

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  tasks: Task[] = [];
  id =  1;

  constructor() { }

  /**
   * adds a new Task to the Array
   * @param newTask the new Task
   */
  addTask(newTask: Task): void {
    newTask.setid(this.id);
    this.id++;
    this.tasks.push(newTask);
  }

  /**
   * deletes a specific Task
   * @param id id of the Task which needs to get deleted
   */
  deleteTask(id: number): void {
      this.tasks = this.tasks.filter((task) => { task.getid() !== id; });
  }

  /**
   * edits a Task
   * @param editTask Task to be edited
   */
  editTask(editTask: Task): void {

  }

  /**
   * gets all Tasks
   */
  getAllTasks (): Task[] {
    return this.tasks;
  }

  deleteAll(): void {
    this.tasks.length = 0;
  }

  findById (id: number): Task {
    return this.tasks.find((task) => {
      return task.getid() === id;
    });
  }
}
