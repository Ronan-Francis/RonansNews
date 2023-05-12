import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(private UserService:UserService, private navCtrl: NavController) { }
  username:string = "";
  password:string = "";

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.username);
    if (this.username == null || this.password == "") {
      alert("Ensure you input a value in both fields!");
    } else {
      // perform operation with form input
      alert("This form has been successfully submitted!");
      this.UserService.saveData(this.username,this.password, null)
      this.navCtrl.navigateBack('/home')
    }
  }

}
