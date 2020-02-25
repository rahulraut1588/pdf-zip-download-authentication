import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../common/user.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'my-list',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})

export class UserlistComponent implements OnInit {
  users: any;
  resumeData: any;
  @Input() showPreview = false;
  downloadArray = [];

  constructor( public userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe( (res) => {
      this.users = res;
    });
  }

  appendUser(event) {
    if ( event.target.checked ) {
      this.downloadArray.push(event.target.value)
    } else {
      let index = this.downloadArray.indexOf(event.target.value);
      if (index > -1) {
        this.downloadArray.splice(index, 1);
      }
    }
  }

  previewResume(userId){
    this.userService.getPdf(userId).subscribe( (res) => {
      const blob = new Blob([res], {type: 'application/pdf'});
      let filename = 'resume.pdf';
      FileSaver.saveAs(blob, filename);
    });
  }

  openFile(userId) {
    this.userService.getPdf(userId).subscribe( (res) => {
      const blob = new Blob([res], {type: 'application/pdf'});
      var fileURL = window.URL.createObjectURL(blob);
      window.open(fileURL);
    });
  }

  bulkDownload(downloadArray) {
    this.userService.multipleDownload(downloadArray).subscribe( (res) => {
      console.log(res);
      const blob = new Blob([res], {type: 'application/zip'});
      let filename = 'resume.zip';
      FileSaver.saveAs(blob, filename);
    });
  }

  closePopup() {
    this.showPreview = false;
  }

}
