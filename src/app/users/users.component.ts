import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../classes/User';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  @Output() updateUser = new EventEmitter<User>();
  constructor(private service: UserService) {}
  ngOnInit() {
    this.service.getUsers().subscribe(
      response => this.users = response['data']
    );
  }

  onDeleteUser(user: User) {
    const deleteUser = confirm('Do you really want to delete the user?');
    this.service.deleteUser(user).subscribe(
      response => {
        const idx = this.users.indexOf(user);
        this.users.splice(idx, 1);
      }
    );
  }

  onSelectUser(user: User) {
    const clonedUser = Object.assign({}, user); // cloniamo user per evitare il passaggio del parametro per riferimento
    this.updateUser.emit(clonedUser);
  }
}
