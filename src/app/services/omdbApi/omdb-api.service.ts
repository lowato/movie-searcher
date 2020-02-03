import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ResponseBySearch } from '../../models/response-by-search.model';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {

  constructor(
    private http: HttpClient
  ) { }

  search(queryParams): Observable<ResponseBySearch> {
    return this.http.get<any>(environment.omdbApi, {params: queryParams})
      .pipe(map(data => {
        return data;
      }));
  }
}
