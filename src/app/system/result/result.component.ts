import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scu-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

  share() {
    console.log('share!');
  }

  copy() {
    console.log('copy!');
  }

}
