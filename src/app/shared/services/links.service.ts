import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Link} from '../models/link.model';
import {map} from 'rxjs/operators';

@Injectable()
export class LinksService {
  constructor(private http: HttpClient) {}

  getShortLinkByLongLink(longLink: string): Observable<Link> {
    return this.http.get(`http://localhost:3001/links?longLink=${longLink}`)
      .pipe(map((links: Link[]) => links[0] ? links[0] : undefined));
  }

}
