import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { catchError, map, of, throwError } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-scrolling',
  templateUrl: './scrolling.component.html',
  styleUrls: ['./scrolling.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollingComponent {

  tracks: any[] = [];
  artists: any[] = [];

  constructor(private httpClient:HttpClient, private searchService:SearchService){

  }

  ngOnInit() {
     // Substitua pelo endpoint desejado
    const method = 'GET'; // Substitua pelo método HTTP desejado (GET, POST, etc.)
    this.searchService.search()

  }

}

