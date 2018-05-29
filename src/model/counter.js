import { observable, action, autorun } from 'mobx';

class Counter {
  constructor() {
    autorun(() => {
      console.log("Count: " + this.count)
    })
  }

  @observable count = 0;

  @action
  increment() {
    this.count += 1;
  } 

  @action
  decrement() {
    this.count -= 1;
  }
}

export default Counter;