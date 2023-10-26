import { Component } from '@angular/core';
import { faThumbsUp, faThumbsDown, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faRight = faRightFromBracket;
  faThumbs = [faThumbsUp, faThumbsUp, faThumbsUp, faThumbsUp, faThumbsUp, faThumbsUp];
  qt_click = [0, 0, 0, 0, 0, 0];

  myFunction(index: number) {
    const icon = document.getElementById(`i-${index}`) as HTMLElement
    if(this.qt_click[index] == 0){
      this.qt_click[index] += 1

      icon.classList.remove("white")
      icon.classList.add("green")
      icon.classList.add("fa-fade")
      setTimeout(() => {
        icon.classList.remove("fa-fade")
      }, 1000)


    }
    else {
      if(this.qt_click[index] > 1){
        this.qt_click[index] = 0
        icon.classList.remove("red")
        icon.classList.add("white")
        this.faThumbs[index] = (this.faThumbs[index] === faThumbsUp) ? faThumbsDown : faThumbsUp;
        icon.classList.add("fa-fade")
        setTimeout(() => {
          icon.classList.remove("fa-fade")
        }, 1000)
      }

      else {
        this.faThumbs[index] = (this.faThumbs[index] === faThumbsUp) ? faThumbsDown : faThumbsUp;
        this.qt_click[index] += 1
        icon.classList.remove("green")
        icon.classList.add("red")
        icon.classList.add("fa-fade")
        setTimeout(() => {
          icon.classList.remove("fa-fade")
        }, 1000)
      }

    }

  }

}

