import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Output() public compteurChanged: EventEmitter<number> = new EventEmitter();

  compteur: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onIncrement(): void {

    this.compteur ++;
    this.compteurChanged.emit(this.compteur);
  }

  onDecrement(): void {

    this.compteur --;
    this.compteurChanged.emit(this.compteur);

  }

}
