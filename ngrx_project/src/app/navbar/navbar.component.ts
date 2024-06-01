import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from '../store/counter/counter.reducer';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  store = inject(Store);
  count$ = this.store.select(selectCount)
}
