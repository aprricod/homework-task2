import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    console.log('app-child', 'ngOnInit');
  }
  ngOnDestroy(): void {
    console.log('app-child', 'ngOnDestroy');
  }
}
