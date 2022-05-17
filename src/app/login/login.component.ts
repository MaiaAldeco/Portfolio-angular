import { Component, OnInit } from '@angular/core';
/* import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticService } from '../service/autentic.service';
import { ServiceScrollrevealService } from '../service/service-scrollreveal.service'; */


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
/* 
  form:FormGroup;
  constructor(private scrollreveal:ServiceScrollrevealService, private formBuilder:FormBuilder, private authService: AutenticService, private route: Router){
    this.form=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      deviceInfo:this.formBuilder.group({
        deviceId:["17867868768"],
        deviceType:["DEVICE_TYPE_ANDROID"],
        notificationToken:["6765757Seececc34"]
      })
    })
  }

  config1reveal = this.scrollreveal.config1reveal */

  ngOnInit(): void {
  }

/*   get Email(){
    return this.form.get('email');
  }
  get Password(){
    return this.form.get('password')
  }

  onSend(e:Event){
    e.preventDefault;
    this.authService.Login(this.form.value).subscribe(data=>{
      console.log('DATA: ' + JSON.stringify(data));
      this.route.navigate(['/portfolio']);
    })
  } */
}

