// filepath: d:\GIT\Form_Web\src\app\atoms\button\button.component.ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: string = 'button';

  constructor() { }

  ngOnInit(): void {
  }

}
