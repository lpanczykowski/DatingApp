import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  
  constructor(public accountService : AccountService) { }

  ngOnInit(): void {
      }

  login () {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    },e => {
      console.log(e);
    });
  }

  logout(){
    this.accountService.logout();
  }

}
