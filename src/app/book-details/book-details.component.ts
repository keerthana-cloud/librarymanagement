import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookDetail } from 'src/app/shared/book-detail.model';
import { BookDetailService } from 'src/app/shared/book-detail.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: [
  ]
})
export class BookDetailsComponent implements OnInit {

  constructor(public service: BookDetailService, private toastr:ToastrService, private router:Router) { }

  public showModal : boolean = false;

  public searchInput1:string;
  public searchInput2:string;
  public searchInput3:string;
  public searchInput4:string;
  public searchInput5:string;

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord:BookDetail){
    this.service.formData = Object.assign({}, selectedRecord);
  }                                            //populate form with a record
  onLogout(){
    this.router.navigateByUrl('/login')
  }                                            //logout to home page
  onDelete(id:number){
    if(confirm('Are you sure?'))
    { 
      this.service.deleteBookDetail(id)
      .subscribe(
        res =>{
        this.service.refreshList();
        this.toastr.error("Deleted successfully",'Library books register');
        },
        err =>{console.log(err)}
      )
    }
  }                                              //delete existing record
  search1(){
    if (this.searchInput1!=""){
      this.service.list = this.service.list.filter(res => {
        return res.bookIsbn.toLocaleLowerCase().includes(this.searchInput1.toLocaleLowerCase());
      });
    }
    else if(this.searchInput1 == "" ){
      this.service.refreshList();
    } 
  }                                              //search on book ISBN
  search2(){
    if (this.searchInput2!=""){
      this.service.list = this.service.list.filter(res => {
        return res.bookTitle.toLocaleLowerCase().includes(this.searchInput2.toLocaleLowerCase());
      });
    }
    else if(this.searchInput2 == "" ){
      this.service.refreshList();
    }
  }                                             //search on book title
  search3(){
    if (this.searchInput3!=""){
      this.service.list = this.service.list.filter(res => {
        return res.booksAuthor.toLocaleLowerCase().includes(this.searchInput3.toLocaleLowerCase());
      });
    }
    else if(this.searchInput3 == "" ){
      this.service.refreshList();
    }  
  }                                           //search on book author
  search4(){
    if (this.searchInput4!=""){
      this.service.list = this.service.list.filter(res => {
        return res.bookCategory.toLocaleLowerCase().includes(this.searchInput4.toLocaleLowerCase());
      });
    }
    else if(this.searchInput4 == "" ){
      this.service.refreshList();
    }  
  }                                          //search on book category
  search5(){
    if (this.searchInput5!=""){
      this.service.list = this.service.list.filter(res => {
        return res.bookPublisher.toLocaleLowerCase().includes(this.searchInput5.toLocaleLowerCase());
      });
    }
    else if(this.searchInput5 == "" ){
      this.service.refreshList();
    }
  }                                       //search on book publisher
}  

