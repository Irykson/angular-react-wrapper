import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  Type,
} from '@angular/core';
import React from 'react';
import { FunctionComponent } from 'react';
import * as ReactDOM from 'react-dom';

@Component({
  template: '',
})
export abstract class ReactWrapperComponent<TProps = {}, TState = {}>
  implements OnChanges, OnDestroy, AfterViewInit {
  @Input() props: TProps;

  abstract component:
    | FunctionComponent<TProps>
    | Type<React.Component<TProps, TState>>;

  constructor(private hostElement: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.hostElement.nativeElement);
  }

  private render() {
    ReactDOM.render(
      React.createElement(this.component as any, { ...this.props }),
      this.hostElement.nativeElement
    );
  }
}
