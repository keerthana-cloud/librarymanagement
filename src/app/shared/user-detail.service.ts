import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetail } from './user-detail.model';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
 
  readonly baseURL = 'http://localhost:56107/api/UsersList'
  list : UserDetail[];
  userEmail: string;
  userPassword: string;
  
  constructor(private http:HttpClient) { }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as UserDetail[]);
  }
  
}
