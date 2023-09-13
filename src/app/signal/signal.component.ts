import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent {
  count = signal(0);

  // We can give the type of data explicitly using diamond bracket.
  message = signal<string[]>([]);

  // If we want to apply some logic on signal variable data then we will use computed method.
  doubleCount = computed(() => this.count() * 2)

  constructor() {
    // We use effect function whenever we want to execute some code when the value of a signal changes.
    // Make sure you must use signal inside callback function.
    effect(() => {
      console.log('count value change', this.count());
    })
  }

  inc() {
    // Set method is use when value is not depend on previous value.
    // this.count.set(this.count() + 1);

    // In such scenario if application depend on previous value at that time we will use update method.
    this.count.update((prev) => prev + 1);

    // this.message.update((prevMsg) => [...prevMsg, "Message" + this.count()])

    // When we dealing with an array use mutate method instead of update method.
    // Update method create a new array every time and get the previous data first and after that push it.
    // When we are dealing with immutable types like boolean, number, string at that time we use set or update method.
    // When we dealing with objects and array at that time we use mutate method.
    this.message.mutate((prevMsg) => prevMsg.push('' + this.count()))
  }

  dec() {
    this.message.mutate((prevMsg) => prevMsg.pop())
    this.count.update((prev) => prev - 1);
  }
}
