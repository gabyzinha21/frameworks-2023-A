import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {


  numeros = [5, 10, 15, 20, 25]

  heroes = ["homem arranha", "capitao america", "homem de ferro", "mulher maravilha", "batman" ]
}


