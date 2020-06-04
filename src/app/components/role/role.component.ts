import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  @Input() role: string;
  @Output() roleEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  filter(msg: any) {
    this.roleEvent.emit(msg);
  }

}
