import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private showMenuSubject = new BehaviorSubject<boolean>(true);
  showMenu$ = this.showMenuSubject.asObservable();

  setShowMenu(show: boolean) {
    this.showMenuSubject.next(show);
  }

  constructor() { }
}
