import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ToDo } from '../../Models/to-do';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../Services/todo.service';

@Component({
  selector: 'app-tododetails',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tododetails.component.html',
  styleUrl: './tododetails.component.css'
})
export class TododetailsComponent implements OnInit {
  todo:ToDo | undefined;

  constructor(private route:ActivatedRoute,private todoservice:TodoService,private router:Router){}

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(){
    const id=String(this.route.snapshot.paramMap.get('id'));
    this.todoservice.getTodoById(id).subscribe(t=>{
      this.todo=t
    });
  }
  updateTodo():void{
    if(this.todo){
      this.todoservice.update(this.todo).subscribe(()=>{
        this.router.navigate(['/todos']);//here i said to you to go to todos after update function
      });
      this.todoservice.getTodos();
    }
  }

}
