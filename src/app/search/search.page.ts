import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import { SearchbarChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit{

  constructor(private NewsService:NewsService) { }
  results:any[]=[];
  status:any;
  ngOnInit() {
  }

    handleInput(event:any) {
      const query = event.target.value.toLowerCase();
      console.log(query)
      this.NewsService.GetSearch(query).subscribe(
        (data)=>{
          this.results = data.articles;
          this.status = data.status
          console.log(this.results);
        }
      );
    }

}
