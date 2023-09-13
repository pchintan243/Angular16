import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent {
  count = signal(0);

  inc() {
    // Set method is use when value is not depend on previous value.
    // this.count.set(this.count() + 1);

    // In such scenario if application depend on previous value at that time we will use update method.
    this.count.update((prev) => prev + 1);
  }
  
  dec() {
    this.count.update((prev) => prev - 1);
  }
}
