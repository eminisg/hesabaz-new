import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class FieldsComponent implements OnInit {
  @Input()fieldData = undefined;
  constructor() { }

  ngOnInit() {
    console.log(this.fieldData);
  }

}
