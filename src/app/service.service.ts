import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getResultados(): Observable<any> {
    return this.http.get<any[]>(this.url);
  }

}
