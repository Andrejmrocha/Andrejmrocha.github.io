import { Component, Input } from '@angular/core';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Track } from 'src/app/model/track.model';

@Component({
  selector: 'app-card-song',
  templateUrl: './card-song.component.html',
  styleUrls: ['./card-song.component.css']
})
export class CardSongComponent {
  like = faThumbsUp;
  qt_click = 0;

  @Input() track:Track = new Track('', [], '', '');

  @Input() index: number | undefined;
  myFunction(){
    const icon = document.getElementById(`${this.index}`) as HTMLElement;
    if(this.qt_click === 0){
      this.qt_click += 1;

      icon.classList.remove("white");
      icon.classList.add("green");
      icon.classList.add("fa-fade");
      setTimeout(() => {
        icon.classList.remove("fa-fade")
      }, 1000)
    }

    else {
      if(this.qt_click > 1) {
        this.qt_click = 0;
        icon.classList.remove("red")
        icon.classList.add("white")
        this.like = (this.like === faThumbsUp) ? faThumbsDown : faThumbsUp;
        icon.classList.add("fa-fade")
        setTimeout(() => {
          icon.classList.remove("fa-fade")
        }, 1000)
      }

      else {
        this.like = (this.like === faThumbsUp) ? faThumbsDown : faThumbsUp;
        this.qt_click += 1
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
