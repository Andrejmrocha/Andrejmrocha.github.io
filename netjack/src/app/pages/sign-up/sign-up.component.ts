import { faL } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from './../../services/header.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private headerService:HeaderService){
    this.headerService.setShowMenu(false);
  }
}
