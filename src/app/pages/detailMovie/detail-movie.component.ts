import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { OmdbApiService } from '../../services/omdbApi/omdb-api.service';
import { QueryParamsById } from '../../models/query-params.model';
import { ResponseByIDOrType } from '../../models/response-by-id-or-type.model';
import { FavoritesService } from '../../services/favorites/favorites.service';
import { Movie } from '../../models/response-by-search.model';
import { take } from '../../../../node_modules/rxjs/operators';
import { Subscription } from '../../../../node_modules/rxjs';

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
    private omdbApiService: OmdbApiService,
    private favoritesService: FavoritesService
  ) { }

  ngOnInit() {
    let queryParams: QueryParamsById = {
      i: this.detailImdbID
    };

    this.subscriptions.push(
      this.omdbApiService.searchByIdOrType(queryParams).pipe(take(1)).subscribe(
        resp => {
          this.movie = resp;
          this.loadingSearch = false;
        }
      )
    )

    this.subscriptions.push(this.favoritesService.favorites.subscribe(
      fav => {
          this.favorites = Object.keys(fav).map(key => fav[key]['imdbID'])
        }
      )
    )
  }

  public setFavorite(imdbId: string) {
    this.favoritesService.saveFavorite(this.customMovie(imdbId));
  }

  public removeFavorite(imdbId: string) {
    this.favoritesService.removeFavorite(imdbId);
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
