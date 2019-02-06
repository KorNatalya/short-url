import { Component } from '@angular/core';

@Component({
  selector: 'scu-shortcut',
  templateUrl: './shortcut.component.html',
  styleUrls: ['./shortcut.component.scss']
})
export class ShortcutComponent {

  constructor() { }

  cut() {
    console.log('cut!');
  }
}
