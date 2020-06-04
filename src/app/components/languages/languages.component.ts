import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  @Input() languages: string[];
  @Output() langEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  filter(msg: any) {
    this.langEvent.emit(msg);
  }
}
