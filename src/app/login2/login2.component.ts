import { Component,} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],

})
export class Login2Component {
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }
  login() {
    /** this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());*/
    var googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
   prompt: 'select_account'
});
firebase.auth().signInWithRedirect(googleAuthProvider)
  }
  logout() {
    this.afAuth.auth.signOut();
    
  }

}
