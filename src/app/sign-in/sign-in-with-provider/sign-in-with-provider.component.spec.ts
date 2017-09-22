import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInWithProviderComponent } from './sign-in-with-provider.component';

describe('SignInWithProviderComponent', () => {
  let component: SignInWithProviderComponent;
  let fixture: ComponentFixture<SignInWithProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInWithProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInWithProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
