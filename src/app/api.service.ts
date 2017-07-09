import {Injectable, Inject} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ApiService {

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

}
