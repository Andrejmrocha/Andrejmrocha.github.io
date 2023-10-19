import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Track } from '../model/track.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient:HttpClient) { }

  public search(){
    const url = 'https://api.spotify.com/';
    const token = 'BQDbF5SXqQPmFTCVm-UDoFjS9JtmVwyyi-Q0x2bfvTP0KxP0ij3KiLPPbjICy5ZTjT8pcU4t3BSA8fZGuQN6neRJWu8pO9uIY1gIhlZxpbSvRdzzUkI'
    const endpoint = "v1/search?q=felina&type=track&market=BR&limit=5";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    this.httpClient.get(`${url}${endpoint}`, { headers: headers}).pipe(
      map(this.mapSearch)
    )

  }

  private mapSearch(data:any){
    console.log(data)
  }
}
