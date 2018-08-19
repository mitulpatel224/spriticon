import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleGeneratorComponent } from './style-generator.component';

describe('StyleGeneratorComponent', () => {
  let component: StyleGeneratorComponent;
  let fixture: ComponentFixture<StyleGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
