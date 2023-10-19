import { Component, Signal, WritableSignal, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss']
})
export class SignalsComponent {

  height: WritableSignal<number> = signal(5);
  width: WritableSignal<number> = signal(5);
  area: Signal<number> = computed(() => this.height() * this.width());

  constructor() {
    effect(() => console.log('Value changed:', this.area()));
  }

  calculateArea(height: number, width: number) {
    this.height.set(height);
    this.width.set(width);
  }

}
