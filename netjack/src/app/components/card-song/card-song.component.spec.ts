import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSongComponent } from './card-song.component';

describe('CardSongComponent', () => {
  let component: CardSongComponent;
  let fixture: ComponentFixture<CardSongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSongComponent]
    });
    fixture = TestBed.createComponent(CardSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
