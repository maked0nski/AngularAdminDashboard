import { Component } from '@angular/core';
import {BankService} from './services/bank.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  banks = [];
  title = 'AdminDashboard';

  constructor(private bankService: BankService) {
    bankService.getBank().subscribe( jsonBank => {
    })
  }
}
