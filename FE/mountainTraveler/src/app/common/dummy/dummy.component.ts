import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dummy-component',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
})
export class DummyComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
