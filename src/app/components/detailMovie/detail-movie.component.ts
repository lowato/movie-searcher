import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { OmdbApiService } from '../../services/omdbApi/omdb-api.service';
import { QueryParamsById } from '../../models/query-params.model';
import { ResponseByIDOrType } from '../../models/response-by-id-or-type.model';
import { FavoritesService } from '../../services/favorites/favorites.service';
import { Movie } from '../../models/response-by-search.model';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit, OnDestroy {

  @Input() detailImdbID: string;

  public favorites: Array<string>;
  public movie: ResponseByIDOrType;
  public loadingSearch = true;

  private subscriptions: Subscription[] = [];

  constructor(
    private _omdbApiService: OmdbApiService,
    private _favoritesService: FavoritesService
  ) { }

  ngOnInit() {
    let queryParams: QueryParamsById = {
      i: this.detailImdbID
    };

    this.subscriptions.push(
      this._omdbApiService.searchByIdOrType(queryParams).pipe(take(1)).subscribe(
        resp => {
          this.movie = resp;
          this.loadingSearch = false;
        }
      )
    )

    this.subscriptions.push(this._favoritesService.favorites$.subscribe(
      fav => {
          this.favorites = Object.keys(fav).map(key => fav[key]['imdbID'])
        }
      )
    )
  }

  public setFavorite(imdbId: string): void {
    this._favoritesService.saveFavorite(this.customMovie(imdbId));
  }

  public removeFavorite(imdbId: string): void {
    this._favoritesService.removeFavorite(imdbId);
  }

  private customMovie(imdbId: string): Movie {
    return {
      Title:  this.movie.Title,
      Year:   this.movie.Year,
      imdbID: imdbId,
      Type:   this.movie.Type,
      Poster: this.movie.Poster,
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
