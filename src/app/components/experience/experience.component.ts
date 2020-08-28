import {Component, Input, OnInit} from '@angular/core';
import {Experience} from '../../models/experience.model';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input()
  experience: Experience;
  constructor() { }

  ngOnInit(): void {
  }

}
