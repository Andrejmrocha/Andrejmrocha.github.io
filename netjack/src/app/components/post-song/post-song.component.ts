import { Component } from '@angular/core';
import { faRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-song',
  templateUrl: './post-song.component.html',
  styleUrls: ['./post-song.component.css']
})
export class PostSongComponent {
  faRight = faRightFromBracket;
  faSearch = faSearch;
}
