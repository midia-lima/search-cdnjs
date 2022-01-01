/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReactiveSearchCdnjsComponent } from './reactive-search-cdnjs.component';

describe('ReactiveSearchCdnjsComponent', () => {
  let component: ReactiveSearchCdnjsComponent;
  let fixture: ComponentFixture<ReactiveSearchCdnjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveSearchCdnjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSearchCdnjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
