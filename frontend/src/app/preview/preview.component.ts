import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'my-preview',
  templateUrl: './preview.component.html',
  styleUrls:['./preview.component.scss']
})

export class PreviewComponent {

  @Input() resumeData: any;
  @ViewChild('resume', { static: false }) table;
  @Output() closePopup = new EventEmitter<string>();

  constructor() { }

  close() {
    this.closePopup.next('closePopup');
  }

  downloadPdf() {
    html2canvas(this.table.nativeElement).then(canvas => {
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('MYPdf.pdf');
    });
  }
}
