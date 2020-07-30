import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardpostPage } from './cardpost.page';

describe('CardpostPage', () => {
  let component: CardpostPage;
  let fixture: ComponentFixture<CardpostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardpostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardpostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
