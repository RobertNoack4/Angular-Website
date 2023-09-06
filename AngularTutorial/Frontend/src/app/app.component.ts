import { Component } from '@angular/core';
import { Auth, getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import 'firebase/compat/auth'
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTutorial';

  constructor(
    public auth: AngularFireAuth,
    private logger: LogService,
  ) {}

  signInClicked(): void {
    //this.logger.log 
    this.logger.log("Test1");
    try{
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider).catch();
    }
    catch(error){
      this.logger.log(error)
    }
  }
  
  signOutClicked(): void {
    this.auth.signOut()
  }
}
