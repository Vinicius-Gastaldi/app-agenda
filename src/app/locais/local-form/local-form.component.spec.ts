import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalFormComponent } from './local-form.component';

describe('LocalFormComponent', () => {
  let component: LocalFormComponent;
  let fixture: ComponentFixture<LocalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
