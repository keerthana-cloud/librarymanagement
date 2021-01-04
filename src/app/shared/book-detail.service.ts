import { Injectable } from '@angular/core';
import { BookDetail } from './book-detail.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookDetailService {
 
  formData:BookDetail =new BookDetail();
  readonly baseURL = 'http://localhost:56107/api/BooksList'
  list : BookDetail[];
  
  constructor(private http:HttpClient) { }

  postBookDetail(){
    return this.http.post(this.baseURL, this.formData);
  }

  putBookDetail(){
    return this.http.put(`${this.baseURL}/${this.formData.booksListId}`, this.formData);
  }

  deleteBookDetail(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  
  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as BookDetail[]);
  }

}

