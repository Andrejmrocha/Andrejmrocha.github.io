import { Component } from '@angular/core';
import { faThumbsUp, faThumbsDown, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Track } from 'src/app/model/track.model';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  trackList: Track[] = [];

  constructor(private searchService:SearchService){

  }

  ngOnInit(){
    this.buscar();
  }

  buscar(){
    this.searchService.search("amorim").subscribe((tracks) => {
      this.trackList = tracks
    })
  }
}

