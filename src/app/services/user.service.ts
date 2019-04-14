import {Injectable} from '@angular/core';
import {User} from '../classes/user';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
  users: Array<User> = [];
  private APIurl = 'http://localhost:8000/users';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.APIurl);
  }

  getUser(id: number) {
    return this.http.get(this.APIurl + '/' + id);
  }

  deleteUser(user: User) {
    const data = {_method: 'DELETE'};
    return this.http.post(this.APIurl + '/' + user.id, data);
  }

  updateUser(user: User) {
    user['_method'] = 'PUT';
    return this.http.post(this.APIurl + '/' + user.id, user);
  }

  createUser(user: User) {
    return this.http.post(this.APIurl, user);
  }
}
