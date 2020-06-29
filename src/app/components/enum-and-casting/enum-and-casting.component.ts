import { Component, OnInit } from '@angular/core';
import { User, UserType } from '../../others/interfaces';

@Component({
  selector: 'app-enum-and-casting',
  templateUrl: './enum-and-casting.component.html',
  styleUrls: ['./enum-and-casting.component.scss']
})
export class EnumAndCastingComponent implements OnInit {

  constructor() { }

  user: User[] = [
    {
      ID: 1,
      name: 'Daniel',
      apel: 'Hernandez',
      email: 'daguiheso@gmail.com',
      password: 'pepe',
      type: UserType.Cliente,
    },
    {
      ID: 2,
      name: 'David',
      apel: 'Hernandez',
      email: 'davuiheso@gmail.com',
      password: 'pepe2',
      type: UserType.Administrador,
    }
  ];

  user2: User = {
    ID: 1,
    name: 'Daniel',
    apel: 'Hernandez',
    email: 'daguiheso@gmail.com',
    password: 'pepe',
    type: UserType.Cliente,
  } as User;

  ngOnInit(): void {
  }


}
