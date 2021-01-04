import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import { UserDetailService } from '../shared/user-detail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public service:UserDetailService, private router:Router) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  onSubmit(form:NgForm){
    for(let uds of this.service.list){
      if(this.service.userEmail== uds.userEmail && this.service.userPassword==uds.userPassword)
        this.router.navigateByUrl('/book-details');
      else{
        alert('Invalid username or password');
      }
    }
  }
}