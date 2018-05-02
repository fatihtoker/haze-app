export class TrackModel {
  id: number;
  album: any;
  artists: any[];
  href: string;
  name: string;
  previewUrl: string;
  type: string;
  external_urls: any[];

  constructor (data) {
    if (data) {
      this.id = data.id;
      this.album = data.album;
      this.artists = data.artists;
      this.href = data.href;
      this.name = data.name;
      this.previewUrl = data.preview_url;
      this.type = data.type;
      this.external_urls = data.external_urls;
    }
  }
}
