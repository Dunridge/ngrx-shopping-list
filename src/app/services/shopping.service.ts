import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {ShoppingItem} from '../store/models/shopping-item.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private SHOPPING_URL = 'http://localhost:3000/shopping';

  constructor(
    private http: HttpClient
  ) { }

  getShoppingItems() {
    return this.http.get<ShoppingItem[]>(this.SHOPPING_URL)
      .pipe(
        delay(5000)
      );
  }

  addShoppingItem(shoppingItem: ShoppingItem): Observable<any> {
    return this.http.post(this.SHOPPING_URL, shoppingItem)
      .pipe(
        delay(5000)
      );
  }

  deleteShoppingItem(id: string): Observable<any> {
    return this.http.delete(`${this.SHOPPING_URL}/${id}`)
      .pipe(
        delay(5000)
      );
  }
}
