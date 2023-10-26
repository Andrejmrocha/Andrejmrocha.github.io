import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { faRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Track } from 'src/app/model/track.model';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-post-song',
  templateUrl: './post-song.component.html',
  styleUrls: ['./post-song.component.css']
})
export class PostSongComponent implements OnInit{
  faRight = faRightFromBracket;
  faSearch = faSearch;
  input!: HTMLInputElement;
  trackList: Track[] = [];

  constructor(private searchService: SearchService){
  }

  ngOnInit(){
    this.input = document.getElementById('search-input') as HTMLInputElement

  }

  buscar(x: any){
    this.searchService.search(x.target.value).subscribe((tracks) => {
      this.trackList = tracks
    })
  }
}
