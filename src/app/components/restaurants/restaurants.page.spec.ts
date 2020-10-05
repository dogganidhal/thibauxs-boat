import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RestaurantsPage } from './restaurants.page';

describe('Tab2Page', () => {
  let component: RestaurantsPage;
  let fixture: ComponentFixture<RestaurantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
