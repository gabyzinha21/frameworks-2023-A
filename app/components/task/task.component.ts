import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  tasks = []

  task = new FormControl('')
  descricao = new FormControl ('')
  responsavel = new FormControl ('')
  dt_inicio = new FormControl('')
  dt_fim = new FormControl('')

  addtask() {
    console.log(this.task.value);
    console.log(this.descricao.value);
    console.log(this.responsavel.value);
    console.log(this.dt_inicio.value);
    console.log(this.dt_fim.value);
  
  }

  removeTask() {}
}
