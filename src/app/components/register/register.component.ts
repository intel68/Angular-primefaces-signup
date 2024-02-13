import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatchValidation } from 'src/app/shared/password-match.directives';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  registerForm = this.fb.group({
    fulName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {
    Validators: passwordMatchValidation
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router) { }

  get fullName() {
    return this.registerForm.controls['fulName'];
  }
  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword(){
    return this.registerForm.controls['confirmPassword'];
  }
  submitDetails() {
    const postData = { ...this.registerForm.value };
    delete postData.comfirmPassword;
    this.authService.registerUser(postData as User).subscribe({
      next:(response) => 
      {console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register Succesfully' });
        this.router.navigate(['login'])
      },
      error:error=>{
        
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
        
      }
      
    }
      
     
    )
  }
}