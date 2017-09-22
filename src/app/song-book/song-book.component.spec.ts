import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongBookComponent } from './song-book.component';

describe('SongBookComponent', () => {
  let component: SongBookComponent;
  let fixture: ComponentFixture<SongBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
