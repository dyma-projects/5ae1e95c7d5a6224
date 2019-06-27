import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {

  @ViewChild('inputValue', {static: true})
  elInputValue: ElementRef;

  public valeur: string;

  constructor() { }

  ngOnInit() {
    this.valeur = this.elInputValue.nativeElement.value;
  }

  onValueChange(): void {
    console.log(this.elInputValue.nativeElement.value);
    this.valeur = this.elInputValue.nativeElement.value;

  }

}
