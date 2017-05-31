import { Component } from '@angular/core';
import { NgbPaginationConfig } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
        config: NgbPaginationConfig
    ) {
        config.size = 'lg';
        config.pageSize = 15;
        config.boundaryLinks = true;
        config.rotate = true;
        config.maxSize = 10;
        config.ellipses = false;
    }
}
