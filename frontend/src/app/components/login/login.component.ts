import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user={
    email: "",
    password: ""
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  login(){
    console.log(this.user)
    this.userService.login(this.user).subscribe(
      res=>{
        
        localStorage.setItem('token', res.token);
        this.router.navigate(['/profil'])
      },
      err=>{
        console.log(err)
      }
    )
  }

}
