import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePigReportComponent } from './create-pig-report.component';

describe('CreatePigReportComponent', () => {
  let component: CreatePigReportComponent;
  let fixture: ComponentFixture<CreatePigReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePigReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePigReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
