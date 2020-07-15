import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphysComponent } from './giphys.component';

describe('GiphysComponent', () => {
  let component: GiphysComponent;
  let fixture: ComponentFixture<GiphysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
