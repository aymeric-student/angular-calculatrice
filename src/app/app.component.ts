import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  display: string = '';

  appendNumber(number: number) {
    this.display += number;
  }

  appendOperator(operator: string) {
    if (this.display && !this.isOperator(this.display.slice(-1))) {
      this.display += operator;
    }
  }

  isOperator(char: string): boolean {
    return ['+', '-', '*', '/'].includes(char);
  }

  clear() {
    this.display = '';
  }

  calculate() {
    try {
      this.display = evaluate(this.display).toString();
    } catch (e) {
      this.display = 'Error';
    }
  }
}
