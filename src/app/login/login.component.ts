import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../common/login.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const user = this.loginForm.get('username').value;
      const pwd = this.loginForm.get('password').value;
      this.loginService.logIn(user, pwd)
        .subscribe(res => {
          if (res) {
            this.router.navigate(['/trivia'], { relativeTo: this.route});
          } else {
            this.snackBar.open('Authentication failed', 'OK', {duration: 5000});
          }
        });
    } else {
      this.snackBar.open('Veuillez compléter tous les champs');
    }

  }
}
