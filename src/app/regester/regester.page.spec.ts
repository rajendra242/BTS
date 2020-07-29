import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegesterPage } from './regester.page';

describe('RegesterPage', () => {
  let component: RegesterPage;
  let fixture: ComponentFixture<RegesterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegesterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegesterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
