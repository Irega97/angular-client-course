import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {

  authForm: FormGroup;
  
  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder){}

  ngOnInit(): void {
    //FORMULARIO REACTIVO
    this.authForm = this.formBuilder.group({
      //VALIDADORES QUE NOS MIRAN REQUISITOS
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  //PERMITE ACCEDER A LOS ELEMENTOS DEL FORM GROUP DESDE EL HTML
  get formControls() { return this.authForm.controls; }


  signIn(){
    //SI ALGUNO DE LOS VALIDATORS FALLA ENTRA EN EL IF
    if(this.authForm.invalid){
      return;
    }
    //LE PASAMOS LOS DATOS DEL FORM COMO PARAMETRO A SIGN IN PORQUE ES UN USER
    this.authService.signIn(this.authForm.value);
    this.router.navigateByUrl('/admin');
  }
}
