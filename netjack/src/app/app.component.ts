import { Component } from '@angular/core';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netjack';
  faMusic = faMusic;

  ngAfterViewInit() {
    const musicIcon1 = document.getElementById('music-icon-1') as HTMLElement;
    const musicIcon2 = document.getElementById('music-icon-2') as HTMLElement;
    const musicIcon3 = document.getElementById('music-icon-3') as HTMLElement;

    let x1 = 0;
    let y1 = 0;
    let x2 = musicIcon2.clientWidth;
    let y2 = 500;
    let x3 = musicIcon3.clientWidth;
    let y3 = musicIcon3.clientHeight;

    let xDirection1 = 1;
    let yDirection1 = 1;
    let xDirection2 = 1;
    let yDirection2 = 1;
    let xDirection3 = 1;
    let yDirection3 = 1;

    function moveMusicIcon1() {
      x1 += 1 * xDirection1;
      y1 += 1 * yDirection1;

      musicIcon1.style.left = x1 + 'px'
      musicIcon1.style.top = y1 + 'px'

      if (x1 >= window.innerWidth - musicIcon1.clientWidth || x1 <= 0) {
        xDirection1 = -xDirection1;
      }
      if (y1 >= window.innerHeight - musicIcon1.clientHeight || y1 <= 0) {
        yDirection1 = -yDirection1;
      }

    }

    function moveMusicIcon2() {
      x2 += 2 * xDirection2;
      y2 += 2 * yDirection2;

      musicIcon2.style.right = x2 + 'px'
      musicIcon2.style.bottom = y2 + 'px'

      if (x2 >= window.innerWidth - musicIcon1.clientWidth || x2 <= 0) {
        xDirection2 = -xDirection2;
      }
      if (y2 >= window.innerHeight - musicIcon2.clientHeight || y2 <= 0) {
        yDirection2 = -yDirection2;
      }

    }

    function moveMusicIcon3() {
      x3 += 1.5 * xDirection3;
      y3 += 1.5 * yDirection3;

      musicIcon3.style.right = x3 + 'px'
      musicIcon3.style.bottom = y3 + 'px'

      if (x3 >= window.innerWidth - musicIcon3.clientWidth || x3 <= 0) {
        xDirection3 = -xDirection3;
      }
      if (y3 >= window.innerHeight - musicIcon3.clientHeight || y3 <= 0) {
        yDirection3 = -yDirection3;
      }

    }

    setInterval(moveMusicIcon1, 16);
    setInterval(moveMusicIcon2, 16);
    setInterval(moveMusicIcon3, 16);
  }

}
