import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  @Output()
  onDownloadAlbum = new EventEmitter<string>();
  @Output()
  onRenameAlbum = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  downloadAlbum() {
    this.onDownloadAlbum.emit();
  }
  renameAlbum() {
    this.onRenameAlbum.emit();
  }

}
