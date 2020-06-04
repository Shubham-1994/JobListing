import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {

  @Input() level: string;
  @Output() levelEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  filter(msg: any) {
    this.levelEvent.emit(msg);
  }

}
