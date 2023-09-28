import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private http: HttpClient) { 
    
  }

  getProduct(){
     this.http.get('https://fakestoreapi.com/products').subscribe(res=>{});
  }
}
