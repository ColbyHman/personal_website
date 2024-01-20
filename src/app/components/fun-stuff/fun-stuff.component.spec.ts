import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunStuffComponent } from './fun-stuff.component';

describe('FunStuffComponent', () => {
  let component: FunStuffComponent;
  let fixture: ComponentFixture<FunStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunStuffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
