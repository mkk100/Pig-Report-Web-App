import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PigReportComponent } from './pig-report.component';

describe('PigReportComponent', () => {
  let component: PigReportComponent;
  let fixture: ComponentFixture<PigReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PigReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PigReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
