import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../Models/to-do';
import { TodoService } from '../../Services/todo.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todojson',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './todojson.component.html',
  styleUrl: './todojson.component.css'
})
export class TodojsonComponent implements OnInit {
  title:string='To Do List Application';
imgLink:string='data:image/png;base64,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'

todos:ToDo[]=[];
newTodo:ToDo={} as ToDo;

constructor(private todoService:TodoService){}
  ngOnInit(): void {
    this.getTodos();
    console.log('onInit is wotking')
  }

  getTodos(){
     this.todoService.getTodos().subscribe(t => {
      this.todos=t;
    })
  }
  createTodo():void{
    const newTodo1={id:this.newTodo.id,title:this.newTodo.title,completed:false};
    this.newTodo=newTodo1;
    this.todoService.createTodo(newTodo1).subscribe(todo =>
    {
      this.todos.push(todo);
      console.log(todo.title)
    });
  }

  // createTodo(): void {
  //   this.todoService.createTodo(this.newTodo).subscribe(t => {
  //     this.todos.push(t); // Push the returned todo from the service
  //     this.newTodo = { title: '', completed: false } as ToDo; // Reset newTodo
  //   });
  // }

  deleteTodo(id:string):void{
    this.todoService.delete(id).subscribe(()=>{
      this.todos=this.todos.filter(todo=>todo.id!==id);
    })
  }
}
