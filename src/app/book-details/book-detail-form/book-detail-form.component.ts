import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookDetail } from 'src/app/shared/book-detail.model';
import { BookDetailService } from 'src/app/shared/book-detail.service';

@Component({
  selector: 'app-book-detail-form',
  templateUrl: './book-detail-form.component.html',
  styles: [
  ]
})
export class BookDetailFormComponent implements OnInit {

  constructor(public service:BookDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    if(this.service.formData.booksListId == 0)
       this.insertRecord(form);
    else
       this.updateRecord(form);
  }                               //add and update records
  insertRecord(form:NgForm){
    this.service.postBookDetail().subscribe(
      res =>{
       this.resetForm(form);
       this.service.refreshList();
       this.toastr.success('Added successfully','Library Books Register')
      },
      err => {console.log(err);}
    );
  }                            //add new record
  updateRecord(form:NgForm){
    this.service.putBookDetail().subscribe(
      res =>{
       this.resetForm(form);
       this.service.refreshList();
       this.toastr.info('Updated successfully','Library Books Register')
      },
      err => {console.log(err);}
    );
  }                           //update old record
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new BookDetail();
  }
}                            //reset form
