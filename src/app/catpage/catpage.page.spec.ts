import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatpagePage } from './catpage.page';

describe('CatpagePage', () => {
  let component: CatpagePage;
  let fixture: ComponentFixture<CatpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
