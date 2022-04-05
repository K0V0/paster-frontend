import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogregAnimations } from './logreg.animations';

@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.scss'],
  animations: [ LogregAnimations.logregAnimation ]
})
export class LogregComponent implements OnInit {

  currentUrl: string;

  constructor(
    private router: Router
  ) {
    this.currentUrl = "";
  }

  ngOnInit() {
    this.currentUrl = this.router.url;
  }

}
