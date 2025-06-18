import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPagePreviewComponent } from './second-page-preview.component';

describe('SecondPagePreviewComponent', () => {
  let component: SecondPagePreviewComponent;
  let fixture: ComponentFixture<SecondPagePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondPagePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondPagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
