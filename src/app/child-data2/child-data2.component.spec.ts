import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildData2Component } from './child-data2.component';

describe('ChildData2Component', () => {
  let component: ChildData2Component;
  let fixture: ComponentFixture<ChildData2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildData2Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChildData2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
