import { Track } from 'src/app/model/track.model';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { TrackService } from 'src/app/services/track.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-track',
  templateUrl: './detail-track.component.html',
  styleUrls: ['./detail-track.component.css']
})
export class DetailTrackComponent {
  track:Track = new Track('', [], '', '');

  constructor(private trackService:TrackService, private router:Router){

  }

  ngOnInit(){
    this.track = this.trackService.getSelectedTrack();

  }

  ngAfterViewInit(){
    const element1 = document.getElementById("track-name") as HTMLElement;
    if(!this.checkWidth(element1)) {
      element1.style.animation = `none`;

    }

    const element2 = document.getElementById("artists-name") as HTMLElement;
    if(!this.checkWidthArtists(element2)) {

      element2.style.animation = `none`;

    }
  }

  checkWidth(el:HTMLElement) {

    if(el.offsetWidth > 250){
      return true

    }
    else {
      return false;
    }
  }

  checkWidthArtists(el2:HTMLElement){
    if(el2.offsetWidth > 180){
      return true

    }
    else {
      return false;
    }
  }

  func(){
    this.router.navigate(['/home'])
  }
}
