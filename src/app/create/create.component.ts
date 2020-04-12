
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddUser } from './../actions/user.actions';
import { User } from './../models/user.model';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  constructor(private store: Store) { }

  addUser(name) {
    this.store.dispatch(new AddUser({ name: name }))

  }

}