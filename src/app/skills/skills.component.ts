import { Component, OnInit } from '@angular/core';
import { ServiceScrollrevealService } from '../service-scrollreveal.service';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  faPenToSquare = faPenToSquare;

  constructor(private scrollreveal:ServiceScrollrevealService){
    
  }

  config1reveal = this.scrollreveal.config1reveal

  ngOnInit(): void {
  }

}
