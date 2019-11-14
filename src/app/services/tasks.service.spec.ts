import { TasksService } from './tasks.service';
import {Task} from '../classes/Task';

describe('TasksService', () => {
  let service: TasksService;
  beforeEach(() => {
    service = new TasksService();
    service.deleteAll();
  });

  it('should return the right amount of tasks without adding new ones', () => {
    expect(service.tasks.length).toBe(0);
  });

  it('should return the right amount of tasks after adding a task', () => {
    service.addTask(new Task('test', 'Test', false));
    expect(service.tasks.length).toBe(1);
  });

  it('should find the right task by its id', () => {
    // it's assumed, the id is 1, because it's the first task that's added
    const newTask: Task = new Task('test', 'Test', false);
    service.addTask(newTask);
    expect(service.findById(1)).toEqual(newTask);
  });

  it('should delete a task', () => {
    service.addTask(new Task('test', 'Test', false));
    service.deleteTask(1);
    expect(service.tasks.length).toBe(0);
  });
});
