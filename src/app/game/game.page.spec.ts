import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePage } from './game.page';

describe('GamePage', () => {
  let component: GamePage;
  let fixture: ComponentFixture<GamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GamePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
