import {Component} from '@angular/core';
import {StockService} from './stock.service';

@Component({
    selector: 'stocks',
    template: `<h2>Stocks</h2>
    {{title}}

    <ul [ngStyle] = "{'color': myColor, 'font-size': mySize}">
        <li *ngFor="let stock of stocks">
            {{stock}}
        </li>
    </ul>

    <hr>
    Number of StockMarkets: {{stockMarkets.length}}
    
    <ul *ngIf="stockMarkets.length == 5" [ngClass]="{customClass:isColorBrown , centerClass:isCenter}">
        <li *ngFor="let stockMarket of stockMarkets">
            {{stockMarket}}
        </li>
    </ul>

    <hr>
    
    <div [ngSwitch]="market" [ngClass]="'customClass centerClass'">
        <div *ngSwitchCase = "'NYSE'">New York Stock Exchange</div>
        <div *ngSwitchCase = "'LSE'">London Stock Exchange</div>
        <div *ngSwitchDefault>Could not find a match"</div>

    </div>
    `, styles:[`
        .customClass{
            color: brown;
        }

        .centerClass{
            text-align : center;
        }
    `

    ]
})

export class StocksComponent{
    title = 'List of Stocks: ';

    isCenter = true;
    isColorBrown = true;
    
    myColor = 'blue';
    mySize = '200%';
    //manual implementation, (replaced by service)
    //stocks=['AAPL', 'IBM', 'GOOG','UDEMY'];
    stocks;

    market = 'NYSE';

    stockMarkets = ['NYSE', 'NASDAQ','EURONEXT', 'HKSE', 'LSE'];

    constructor(stockService : StockService){
        this.stocks = stockService.getStocks();
    }



}

