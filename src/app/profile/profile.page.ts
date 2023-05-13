import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import { UserService } from '../services/user.service';
import { NavController } from '@ionic/angular';
import {Storage} from '@ionic/storage-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private NewsService:NewsService, private US:UserService,  private navCtrl: NavController, private storage:Storage) {}
  stories:any[]=[];
liked: boolean = false;
password: any;
username: any;
likes: any[] =[];
profileImg: any = "person-circle";
loggedIn:any;
async ngOnInit() {
  await this.US.loadData();
  this.username = this.US.getUsername();
  this.likes = this.US.getLikes();
  this.profileImg = this.US.getProfileImg();
  }
  
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

logOut(){
  this.storage.clear();
}

}
