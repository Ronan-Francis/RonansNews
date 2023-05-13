import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storage: Storage) { }
  password: string ="";
  username: string ="";
  likes: any[] = [];
  profileImg: any = "person-circle";
  loggedIn:boolean = false;

  async isloggedIn(): Promise<boolean>{
    return await this.storage.get('loggedIn');
  }
  getUsername():string{
    return this.username.toString()
  }
  getLikes():any[]{
    return this.likes 
  }
  getProfileImg(){
    return this.profileImg.toString()
  }

  async loadData() {
    await this.storage.create();
    this.password = await this.storage.get('password');
    this.username = await this.storage.get('username');
    this.likes = await this.storage.get('likes') || [];
    this.profileImg = await this.storage.get('profileImg');
    this.loggedIn = await this.storage.get('loggedIn');
    }

  async saveData(username: string, password: string, likes:any) {
    await this.storage.create();
    await this.storage.set('password', password)
    await this.storage.set('username', username)
    await this.storage.set('likes', likes)
    await this.storage.set('profileImg', this.profileImg)
    await this.storage.set('loggedIn', true)
    .then(()=>{}).catch( );
  }


}



