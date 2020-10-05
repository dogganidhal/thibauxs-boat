import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ShopPage } from './shop.page';

describe('Tab1Page', () => {
  let component: ShopPage;
  let fixture: ComponentFixture<ShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShopPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
