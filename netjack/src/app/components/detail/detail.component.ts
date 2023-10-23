import { TrackService } from './../../services/track.service';
import { Component, Input } from '@angular/core';
import { faPlay, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Track } from 'src/app/model/track.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  faRight = faRightFromBracket;
  faPlay = faPlay;
  track:Track = new Track('', [], '', '');
  constructor(private trackService: TrackService){

  }

  ngOnInit(){
    this.track = this.trackService.getSelectedTrack();
    console.log(this.track.name);
    console.log(this.track.artists);
  }

}
