import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthenticationPage } from './authentication.page';
import {AuthenticationActions} from "../../common/constants/AuthenticationActions.enum";

describe('AuthenticationPage', () => {
  let sut: AuthenticationPage;
  let fixture: ComponentFixture<AuthenticationPage>;
  const authenticationActions = AuthenticationActions;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthenticationPage);
    sut = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(sut, 'setAuthenticationAction').and.callThrough();
    spyOn(sut, 'onSegmentClicked').and.callThrough();
  }));

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  describe('#setAuthenticationAction', function () {
    it('should set authentication action when called ', () => {
      const authAction = 'signIn';

      sut.setAuthenticationAction(authAction);

      expect(sut.setAuthenticationAction).toHaveBeenCalled();
      expect(sut.selectedAuthenticationAction).toEqual(authAction);
    });

    it(`should set selectedAuthenticationAction to ${authenticationActions.signIn} 
      when ion-segment-button with id ${authenticationActions.signIn} clicked`, () => {
      document.getElementById(authenticationActions.signIn).click();

      fixture.detectChanges();

      expect(sut.onSegmentClicked).toHaveBeenCalled();
      expect(sut.selectedAuthenticationAction).toEqual(authenticationActions.signIn);
    })
  });
});
