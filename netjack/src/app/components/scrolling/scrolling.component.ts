import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of, throwError } from 'rxjs';
import { Track } from 'src/app/model/track.model';
import { SearchService } from 'src/app/services/search.service';
import { TrackService } from 'src/app/services/track.service';


@Component({
  selector: 'app-scrolling',
  templateUrl: './scrolling.component.html',
  styleUrls: ['./scrolling.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollingComponent {
  @Input() trackList: Track[]= []

  constructor(private httpClient:HttpClient,
    private router:Router, private trackService:TrackService){

  }

  redirectToDetail(track: Track){
    this.trackService.setSelectedTrack(track)
    this.router.navigate(['/detail'])
  }
}

