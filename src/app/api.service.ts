import {Injectable, Inject} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ApiService {

  subject: Subject<any> = new Subject();

  private _cart = [];
  get cart(): Array<any> {
    return this._cart;
  }

  set cart(value: Array<any>) {
    this._cart = value;
  }

  constructor(private http: Http, @Inject('API_ENDPOINT') private apiEndpoint: string) {
  }

  getCategories() {
    return this.http.get(`${this.apiEndpoint}/categories`)
      .map(response => response.json())
  }

  getProductsByCategory(categoryId: string) {
    return this.http.get(`${this.apiEndpoint}/products/category/${categoryId}`)
      .map(response => response.json())
  }

  addToCart(product) {
    this.subject.next('PRODUCT_ADDED');
    this._cart.push(product);
  }

  getCartObservable() {
    return this.subject.asObservable();
  }

  getAllProducts(){
    return this.http.get(`${this.apiEndpoint}/products`)
      .map(response => response.json())
  }
}
