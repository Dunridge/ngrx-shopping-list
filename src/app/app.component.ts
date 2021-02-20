import {Component, OnInit} from '@angular/core';
import {AppState} from './store/models/app-state.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ShoppingItem} from './store/models/shopping-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  shoppingItems$: Observable<ShoppingItem[]>;
  title = 'ngrx-shopping-list';

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping); // in future this will be replaced with a selector
  }
}
