import { Component } from '@angular/core';
import { IMyComponentProps } from 'src/components/HelloWorld/HelloWorld';
import { ICounterProps } from 'src/components/Counter/Counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  testComponentState = {
    counter: 20,
  };

  counterProps: ICounterProps = {
    initialCount: 10,
  };

  testComponentProps: IMyComponentProps = {
    counter: 20,
  };

  constructor() {
    this.testComponentProps.onClick = this.onClick;
  }

  onClick = () => {
    this.testComponentProps.counter++;
  };
}
