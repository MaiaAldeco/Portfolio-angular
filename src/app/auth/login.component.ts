import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from '../models/login-usuario';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  roles:string[];
  errorMsj:string;

  constructor(private tokenService:TokenService,
    private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
    //COMPRUEBA SI ESTAMOS LOGGEADOS
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin():void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe({
      next: (v) => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(v.token);
        this.tokenService.setUsername(v.nombreUsuario);
        this.tokenService.setAthorities(v.authorities);
        this.roles = v.authorities;
        this.router.navigate(['/menu']);
      },
      error: (e) => {
        console.log(e.error.message);
        this.errorMsj = e.error.message;
        this.isLogged = false;
        this.isLoginFail = true;
      }
    })
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
    this.router.navigate(['/login'])
  }
}
