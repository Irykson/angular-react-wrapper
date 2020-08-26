import { Counter } from './Counter';
import { ReactWrapperComponent } from '../../app/react-wrapper/react-wrapper.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: '',
})
export class CounterComponent extends ReactWrapperComponent {
  component = Counter;
}
