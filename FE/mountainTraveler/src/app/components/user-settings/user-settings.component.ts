import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async dismissModal() {
    await this.modalController.dismiss();
  }

}
