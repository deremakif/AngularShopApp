import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseUrl: string = "http://localhost:3500/";

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.baseUrl + 'products');
  }

}
