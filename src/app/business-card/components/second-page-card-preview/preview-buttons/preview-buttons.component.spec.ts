import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewButtonsComponent } from './preview-buttons.component';

describe('PreviewButtonsComponent', () => {
  let component: PreviewButtonsComponent;
  let fixture: ComponentFixture<PreviewButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
