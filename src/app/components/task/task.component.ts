import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/interfaces/task.interface';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { from, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskForm!: FormGroup;
  tasks:Array<Task>=[]
  isChecked = false
  count:number = 0 
  users!: Observable<User>;


  constructor(
     private formBuilder: FormBuilder,    
     private authService: AuthService,
     private store: Store<AppState>,

    ) { }

  ngOnInit(): void {
    this.users = this.store.select('user');

    this.taskForm = this.formBuilder.group({
      check: [],
      task: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9]*$/)
      ]],
      drop: []
    });

  }
  submitTask() {
    this.count++
    if (this.taskForm.valid) {
      const newTask:Task = {
        id: this.count,
        check: false,
        task: this.taskForm.value.task,
        drop:true
      };

      this.tasks.push(newTask);
      this.taskForm.reset();
    }
  }

  deleteTask(task: any) {
    this.tasks = this.tasks.filter((t: Task) => t !== task);
  }

  hiddenDelete(item:Task) {
    const updatedTask = this.tasks.map(p =>
      p.id === item.id
        ? { ...p, check: !item.check ,drop:!item.drop}
        : p
    );

    this.tasks = updatedTask
  }

  onLogout():void{
    this.authService.logout()
  }

}
