import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-ocr-page',
  templateUrl: './ocr-page.page.html',
  styleUrls: ['./ocr-page.page.scss'],
})
export class OcrPagePage implements OnInit {
  fileObj: File;
  show = false;
  line = '';
  sentiment = '';
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }
  goToSelectfile(event: any) {
    this.fileObj = event.target.files[0];
    // Object.assign(this.fileObj, event.target.files[0]);
    console.log(event.target.files[0]);
  }
  sendName() {
    const uploadData = new FormData();
    uploadData.append('file', this.fileObj);
    this.http.post('http://127.0.0.1:5000/getText', uploadData).subscribe((res: any) => {
      this.show = true;
      this.line = res.outputText;
      this.sentiment = res.predSentiment;
      console.log(res);
    });
  }
}
