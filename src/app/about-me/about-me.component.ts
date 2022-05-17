import { Component, OnInit } from '@angular/core';
import { ServiceScrollrevealService } from '../service-scrollreveal.service';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {

  faPenToSquare = faPenToSquare;
  
  constructor(private scrollreveal:ServiceScrollrevealService){
    
  }

  config1reveal = this.scrollreveal.config1reveal

  ngOnInit(): void {
  }

}
