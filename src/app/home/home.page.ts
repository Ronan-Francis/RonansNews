import { Component , OnInit} from '@angular/core';
import {NewsService} from '../services/news.service';
import { UserService } from '../services/user.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
stories:any[]=[];
liked: boolean = false;
password: any;
username: any;
likes: any[] =[];
profileImg: any;
loggedIn:any;
constructor(private NewsService:NewsService, private US:UserService,  private navCtrl: NavController, private storage: Storage) {}
  async ngOnInit(): Promise<void> {
    console.log("**initiliazed**");
    //on start get the user data 
    this.US.loadData();
    if(await this.US.isloggedIn()){
      console.log("hello")
    }
    else {
      this.navCtrl.navigateBack('/sign-in')
    }
    this.NewsService.GetTopHeadlines().subscribe(
      (data)=>{
        this.stories = data.articles;
      }
    );
  }
  
  //like function

  async save(article: any): Promise<void> {
    if (!this.isLiked(article) ){
      this.likes.push(article);
      this.storage.create().then(() => {
        this.storage.set("likes", this.likes)
        console.log("set")  
      })
        .catch();
    } 
    else{
      this.likes.splice(this.likes.indexOf(article), 1)
    }
    console.log('Liked Articles:', this.likes);
  }
  isLiked(article: any): boolean{
   return this.likes.includes(article);


}
}
