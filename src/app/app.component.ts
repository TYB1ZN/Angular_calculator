import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  calValue: number = 0;
  funcT: any = 'noFunction';
  calNumber: any = 'noValue';
  firstNumber: number = 0;
  secondNumber: number = 0;


  onClickValue(val: string, type: any) {
    if (type == 'number') {
      this.onNumberClick(val);
    } else if (type == 'function') {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string) {
    if (this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + val;
    }
    else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }
  onFunctionClick(val: string) {
    // cal the clear all method when click the C function
    if (val == 'c') {
      this.clearAll();
    }

    else if (this.funcT == 'noFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    } else if (this.funcT != 'noFunction') {
      this.secondNumber = this.calValue;
      this.valueCalculator(val);
    }
  }
  valueCalculator(val: string) {
    if (this.funcT == '+') {
      const total = this.firstNumber + this.secondNumber;
      this.totalAssignValue(total, val);
    }
    if (this.funcT == '-') {
      const total = this.firstNumber - this.secondNumber;
      this.totalAssignValue(total, val);
    }
    if (this.funcT == '*') {
      const total = this.firstNumber * this.secondNumber;
      this.totalAssignValue(total, val);

    }
    if (this.funcT == '/') {
      const total = this.firstNumber / this.secondNumber;
      this.totalAssignValue(total, val);

    }
    if (this.funcT == '%') {
      const total = this.firstNumber % this.secondNumber;
      this.totalAssignValue(total, val);
    }

  }
  totalAssignValue(total: number, val: string) {
    this.calValue = total;
    this.firstNumber = total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
    if (val = '=') { this.onEqualPress() }
  }
  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'noFunction';
    this.calNumber = 'noValue';
  }
  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT = 'noFunction';
    this.calNumber = 'noValue';
  }
}
