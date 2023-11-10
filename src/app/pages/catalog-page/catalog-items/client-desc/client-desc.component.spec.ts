import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDescComponent } from './client-desc.component';

describe('ClientDescComponent', () => {
  let component: ClientDescComponent;
  let fixture: ComponentFixture<ClientDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientDescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
