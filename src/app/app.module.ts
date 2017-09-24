import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { StocksComponent } from './stocks.component';
import { StockDirectiveDirective } from './stock-directive.directive';
import { HighlightDirective } from './highlight.directive';
import { StockService } from './stock.service';
import { DateFormatterPipe } from './date-formatter.pipe';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BondsDirective } from './bonds.directive'
import { HttpModule } from '@angular/http'


@NgModule({
  declarations: [
    AppComponent,
    MutualfundsComponent,
    StocksComponent,
    StockDirectiveDirective,
    HighlightDirective,
    DateFormatterPipe,
    DashboardComponent,
    BondsDirective
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
