import { TranslateService } from './../../../_SharedModule/modules/translate/translate.service';
import { DownloadPlatformsService } from './download.platforms.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent {
  title = 'Download';
  platforms: Map<string, DownloadPlatformsService>;

  @Input()
  platform: string;

  constructor(private translateService: TranslateService) {
    this.platform = "";
    this.platforms = new Map([
      ["win", new DownloadPlatformsService(translateService, "win", "Windows", "")],
      ["linux", new DownloadPlatformsService(translateService, "linux", "Linux", "")],
      ["mac", new DownloadPlatformsService(translateService, "mac", "Mac OS", "")],
      ["android", new DownloadPlatformsService(translateService, "android", "Android", "")],
      ["ios", new DownloadPlatformsService(translateService, "ios", "iOS", "")]
    ]);
  }
}
