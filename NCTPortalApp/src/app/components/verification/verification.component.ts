import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  form: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { 
      let formControls = {
        password: new FormControl('', [Validators.required]),
      }
      this.form = new FormGroup(formControls)
    }

  ngOnInit(): void {
  }

  onSubmit() {
    let inputPassword = this.form.get('password')!.value;

    if(inputPassword === "BaggyJeans") {
      this.loginService.verifyPassword(inputPassword);
    } else {
      this.shakePasswordInput();
    }
  }

  onBack(): void {
    if(this.loginService.wasOnTable) {
      this.loginService.wasOnTable = false;
      this.router.navigate(['/table']);
    } else if(this.loginService.wasOnTableMap) {
      this.loginService.wasOnTableMap = false;
      this.router.navigate(['/table-map']);
    } else if(this.loginService.wasOnTableMoreInfo) {
      this.loginService.wasOnTableMoreInfo = false;
      this.router.navigate(['/table-more-info']);
    }
  }

  shakePasswordInput() {
    const passwordInput = document.getElementById('passwordInput');
    if(passwordInput) {
      passwordInput.classList.add('shake');
      passwordInput.addEventListener('animationend', () => {
        passwordInput.classList.remove('shake');
      }, { once: true });
    }
  }
}
