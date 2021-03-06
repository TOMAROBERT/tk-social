import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
// import auth from 'firebase/firebase-auth';
// import firebase from 'firebase/app';
// import auth from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string ="";
  password: string ="";
  constructor(public afAuth : AngularFireAuth , private router: Router) { }

  ngOnInit() {
  }

  async login(){
    var x = document.getElementById("wrongSubmit");
    const { username,password } = this
    try{
      x.style.display = "none" ;
      const res = await this.afAuth.signInWithEmailAndPassword(username,password);
      this.router.navigateByUrl('/tabs/news');
    }catch(err){
      x.style.display = "block" ;
      console.log("wrong username or pass");
    }
  }
}