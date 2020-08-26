import { Component } from '@angular/core';
import { IMyComponentProps, MyReactComponent } from './HelloWorld';
import { ReactWrapperComponent } from '../../app/react-wrapper/react-wrapper.component';

@Component({
  selector: 'app-test',
  template: '',
})
export class TestComponent extends ReactWrapperComponent<IMyComponentProps> {
  component = MyReactComponent;
}
