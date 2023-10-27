import { Component, Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menu = faBars;
  showMenu: boolean = true;

  constructor(private headerService: HeaderService){
    this.headerService.showMenu$.subscribe(show => this.showMenu = show);
  }
}
