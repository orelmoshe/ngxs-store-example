
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { User } from './../models/user.model'
import { Observable } from 'rxjs'
import { RemoveUser } from './../actions/user.actions'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})

export class ReadComponent implements OnInit {

  users$: Observable<User>

  constructor(private store: Store) {
      this.users$ = this.store.select(state => state.users.users)
  }

  deleteUser(user) {
    this.store.dispatch(new RemoveUser(user))
  }

  ngOnInit() {}

}