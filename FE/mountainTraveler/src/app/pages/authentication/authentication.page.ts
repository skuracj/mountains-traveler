import { Component } from '@angular/core';
import {AuthenticationActions} from "../../common/constants/AuthenticationActions.enum";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage {
  authenticationActions =  AuthenticationActions;
  selectedAuthenticationAction: string;

  constructor() { }

  onSegmentClicked(event: CustomEvent): void {
    this.setAuthenticationAction(event.detail.value);
  }

  setAuthenticationAction(action: string) {
    this.selectedAuthenticationAction = action;
  }
}
