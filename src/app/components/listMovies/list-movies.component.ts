import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FavoritesService } from '../../services/favorites/favorites.service';
import { ResponseBySearch, Movie } from '../../models/response-by-search.model';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit, OnDestroy {

  @Input() listMovies: ResponseBySearch;
  public favorites: Array<string>;
  public detailImdbID: string;

  private subscriptions: Subscription[] = [];

  constructor(
    private _favoritesService: FavoritesService
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this._favoritesService.favorites$.subscribe(
        fav => {
          this.favorites = Object.keys(fav).map(key => fav[key]['imdbID'])
        }
      )
    )
  }

  public setFavorite(imdbId: string) {
    this._favoritesService.saveFavorite(this.getMovieByImdbId(imdbId));
  }

  public removeFavorite(imdbId: string) {
    this._favoritesService.removeFavorite(imdbId);
  }

  private getMovieByImdbId(imdbId: string): Movie {
    const key = Object.keys(this.listMovies.Search).find(key => imdbId === this.listMovies.Search[key].imdbID);
    return this.listMovies.Search[key];
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
