import { Component, OnInit  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BadUIBash';
  numbersThree: string[];
  numbersFour: string[];

  constructor() {
    this.numbersThree = new Array(999).fill(0).map((x,i)=>i+1).map((x)=>this.addLeadingZeros(x,3));
    this.numbersThree.unshift("000");
    this.numbersFour = new Array(9000).fill(1000).map((x,i)=>i+1).map((x)=>this.addLeadingZeros(x,4));
    this.numbersFour.unshift("0000");
  }
  
  addLeadingZeros(num: number, totalLength: number): string {
    return String(num).padStart(totalLength, '0');
  }

  refreshPage() {
    window.location.reload();
  }
}

