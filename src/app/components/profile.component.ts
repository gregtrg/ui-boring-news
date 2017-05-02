import { Component } from '@angular/core';

import {Profile} from '../dto/profile.dto';

@Component({
  selector: 'cinema',
  templateUrl: './html/profile.component.html',
})
export class CinemaComponent {
  title = 'App name here';
  profile : Profile = {
    firstName : 'Grigorii',
    secondName : 'Moiseev'

  }
}
