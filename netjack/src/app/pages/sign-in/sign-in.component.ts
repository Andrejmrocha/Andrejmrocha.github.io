import { Component } from '@angular/core';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  userIcon = faUser;
  passwordIcon = faKey;

  centered = false;
  disabled = false;
  unbounded = false;
  color = "rgba(0,0,0,0.2)";
  radius = 60
}
