import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor() { }

  private selectedTrack: any;

  public setSelectedTrack(track: any) {
    this.selectedTrack = track;
  }

  public getSelectedTrack() {
    return this.selectedTrack;
  }
}
