import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FriendsListComponent } from './friends-list.component';
import {StoriesService} from '../../services/stories.service';
import {usersMock} from '../../common/testing/mocks/users';

describe('FriendsListComponent', () => {
  let component: FriendsListComponent;
  let fixture: ComponentFixture<FriendsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsListComponent ],
      imports: [IonicModule.forRoot()],
      providers: [StoriesService]
    }).compileComponents();

    fixture = TestBed.createComponent(FriendsListComponent);
    component = fixture.componentInstance;
    // component.friendsIds = usersMock[0].friendsIds;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
