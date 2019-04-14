import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../classes/User';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  private user: User;
  public title = 'User Detail';

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      p => this.userService.getUser(+p.get('id'))// + è il cast a integer
          .subscribe(
            response => this.user = response['data']
          )
    );
  }

  backToUsers() {
    this.router.navigate(['users']);
  }
}
