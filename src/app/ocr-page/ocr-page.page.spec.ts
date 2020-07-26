import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OcrPagePage } from './ocr-page.page';

describe('OcrPagePage', () => {
  let component: OcrPagePage;
  let fixture: ComponentFixture<OcrPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcrPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OcrPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
