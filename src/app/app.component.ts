import { Component } from '@angular/core';
import {BankService} from './services/bank.service';
import {UserService} from './services/user.service';
// import {CrossOrigin} from '@angular-devkit/build-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})


export class AppComponent {
  banks = [];
  users = [];
  title = 'AdminDashboard';

  // @CrossOrigin(origin = "https://bank.gov.ua/NBU_BankInfo/get_data_branch?json")

  constructor(private banksService: BankService, private usersService: UserService) {
    banksService.getBank().subscribe(jsonBank => {
      this.banks = jsonBank;
    });
    usersService.getUser().subscribe(jsonUser => {
      this.users = jsonUser;
    });
  }
}

