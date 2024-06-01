import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { counterActions } from './store/counter/counter.action';
import { selectCount } from './store/counter/counter.reducer';
import { AsyncPipe } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count: number = 0;
  store = inject(Store);
  count$ = this.store.select(selectCount)
  increment() {
    this.store.dispatch(counterActions.increment());
  }
  decrement() {
    this.store.dispatch(counterActions.decrement());
  }
  reset() {
    this.store.dispatch(counterActions.reset());
  }


}
