import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSongComponent } from './post-song.component';

describe('PostSongComponent', () => {
  let component: PostSongComponent;
  let fixture: ComponentFixture<PostSongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostSongComponent]
    });
    fixture = TestBed.createComponent(PostSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
