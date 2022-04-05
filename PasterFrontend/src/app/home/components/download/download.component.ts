import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent {
  title = 'Download';

  @Input()
  platform: string;

  constructor() {
    this.platform = "";
  }
}
