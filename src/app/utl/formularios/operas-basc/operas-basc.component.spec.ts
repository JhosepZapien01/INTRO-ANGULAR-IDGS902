import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperasBascComponent } from './operas-basc.component';

describe('OperasBascComponent', () => {
  let component: OperasBascComponent;
  let fixture: ComponentFixture<OperasBascComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperasBascComponent]
    });
    fixture = TestBed.createComponent(OperasBascComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
