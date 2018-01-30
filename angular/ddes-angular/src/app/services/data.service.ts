import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Longname} from '../models/longname';
import {LongnameApiReponse} from '../models/longname-api-reponse';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {

  private longnames: BehaviorSubject<LongnameApiReponse>
    = new BehaviorSubject<LongnameApiReponse>(new LongnameApiReponse());

  constructor(private httpClient: HttpClient) {
  }

  populateLongname() {
    this.httpClient
      .get<LongnameApiReponse>(
        'https://devcentral.app.cloud.gov/api/index.php/api_longname?api=longname&transform=1&order=longname&page=1,100'
      )
      .subscribe(response => this.longnames.next(response));
  }

  getLongnames(): Observable<Longname[]> {
    return this.longnames.asObservable()
      .map(longnameResponse => longnameResponse.api_longname);
  }
}
