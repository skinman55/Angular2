import { Component } from '@angular/core';
import { StocksComponent } from './stocks.component';
import { Stock } from './stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular2!';
  today = Date();

  profile = { id: 100001, name: 'James Bond', role: 'Administrator' };

  submitted = false;
  newStock = new Stock(0, '', '');

  onSubmit() {
    this.submitted = true;
  }

  cancel() {
    this.submitted = false;
    this.newStock = new Stock(0,'','');
  }

}
