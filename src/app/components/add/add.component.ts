import { Component, Input, OnInit } from '@angular/core';
import { Developer } from 'src/app/model/developer.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  developer!: Developer[];

  constructor() { }

  ngOnInit(): void {
  }

}
