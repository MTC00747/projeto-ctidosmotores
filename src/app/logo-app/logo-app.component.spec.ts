import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAppComponent } from './logo-app.component';

describe('LogoAppComponent', () => {
  let component: LogoAppComponent;
  let fixture: ComponentFixture<LogoAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoAppComponent]
    });
    fixture = TestBed.createComponent(LogoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
