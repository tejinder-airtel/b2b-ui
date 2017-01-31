import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { SignUpDetails } from '../../models/signupdetails'
import { BaseClass } from '../base-class/base-class';


@Component({
  selector: 'tbs-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../../css/style.css','../../css/reset.css']
})
export class SignupComponent extends BaseClass { 

  signUpDetails:SignUpDetails;
  constructor(private router:Router){
		super();
    this.signUpDetails = new SignUpDetails();
  }
  
  formSubmit(formObject:NgForm){
    console.log(formObject.value.emailId);
    console.log(formObject.value.firstName);
    console.log(formObject.value.lastName);
    console.log(formObject.value.password == formObject.value.confirmPassword);
    console.log(this.signUpDetails);
    this.router.navigate(['regAlert']);
  }

}
