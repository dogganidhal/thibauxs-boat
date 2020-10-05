import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutAuthorComponent } from './about-author.component';

describe('AboutAuthorComponent', () => {
  let component: AboutAuthorComponent;
  let fixture: ComponentFixture<AboutAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAuthorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
