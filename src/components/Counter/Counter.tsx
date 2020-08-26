import React from 'react';

export interface ICounterProps {
  initialCount?: number;
}

interface ICounterState {
  count: number;
}

export class Counter extends React.Component<ICounterProps, ICounterState> {
  constructor(props: ICounterProps) {
    super(props);

    this.state = {
      count: props.initialCount ?? 0,
    };
  }

  increase() {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  decrease() {
    console.log('Test');
    this.setState((state) => ({ count: state.count - 1 }));
  }

  render() {
    return (
      <div>
        <span>current count: {this.state.count}</span>
        <button onClick={() => this.increase()}>+</button>
        <button onClick={() => this.decrease()}>-</button>
      </div>
    );
  }
}
