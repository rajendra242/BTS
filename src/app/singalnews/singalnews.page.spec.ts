import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingalnewsPage } from './singalnews.page';

describe('SingalnewsPage', () => {
  let component: SingalnewsPage;
  let fixture: ComponentFixture<SingalnewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingalnewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingalnewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
