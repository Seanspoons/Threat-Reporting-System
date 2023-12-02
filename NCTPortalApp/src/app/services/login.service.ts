import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  reportID: string;
  correctPassword = "fcab0453879a2b2281bc5073e3f5fe54";
  wasOnRectangleContainer = false;
  wasOnRectangleMap = false;
  wasOnRectangleMoreInfo = false;
  wasOnThreeComponents = false;
  correctPasswordBoolean = false;

  constructor(private http: HttpClient, private router: Router) { 
    this.reportID = "";
  }

  verifyPassword(enteredPassword: string) {
    this.http.get(`https://api.hashify.net/hash/md5/hex?value=${enteredPassword}`)
      .subscribe(
        (response: any) => {
          const hashedPassword = response.Digest;

          if (hashedPassword !== this.correctPassword) {
            this.correctPasswordBoolean = false
          } else {
            this.router.navigate(['edit-report']);
          }
        }
      );
  }
}
