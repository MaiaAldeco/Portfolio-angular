import { Component, OnInit } from '@angular/core';
import { ServiceScrollrevealService } from '../service-scrollreveal.service';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  
  faPenToSquare = faPenToSquare;

  constructor(private scrollreveal:ServiceScrollrevealService){
    
  }

  config1reveal = this.scrollreveal.config1reveal

  ngOnInit(): void {
  }

}
