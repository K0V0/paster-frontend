import { TranslateService } from './../../../_SharedModule/modules/translate/translate.service';

export class DownloadPlatformsService {
  private translateService: TranslateService;
  private platformSlug: string;
  private platformName: string;
  private releasedVersionNumber: string;
  private description: string;
  private downloadLink: string;
  private downloadButtonText: string;
  private hasRelease: boolean;

  constructor(
    translateService: TranslateService,
    platformSlug: string,
    platformName: string,
    releasedVersionNumber: string
  ) {
    this.translateService = translateService;
    this.platformSlug = platformSlug;
    this.platformName = platformName;
    this.hasRelease = false;
    this.releasedVersionNumber = this.handleReleaseVersionNumberText(releasedVersionNumber);
    this.description = this.handleDescriptionText();
    this.downloadLink = "";
    this.downloadButtonText = this.handleDownloadButtonText();
  }

  public getPlatformName(): string {
    return this.platformName;
  }

  public getReleasedVersionNumber(): string {
    return this.releasedVersionNumber;
  }

  public getDescription(): string {
    return this.description;
  }

  public getDownloadLink(): string {
    return this.downloadLink;
  }

  public getDownloadButtonText(): string {
    return this.downloadButtonText;
  }

  public getHasRelease(): boolean {
    return this.hasRelease;
  }

  private handleReleaseVersionNumberText(versionNumber: string): string {
    if (versionNumber.length == 0) {
      this.hasRelease = false;
      return this.translateService.translate("home.download.notReleased");
    }
    this.hasRelease = true;
    return versionNumber;
  }

  private handleDownloadButtonText(): string {
    if (!this.hasRelease) {
      return this.translateService.translate("home.download.soon");
    }
    return this.translateService.translate("home.download."+ this.platformSlug +".download");
  }

  private handleDescriptionText(): string {
    return this.translateService.translate("home.download."+ this.platformSlug +".description");
  }

}
