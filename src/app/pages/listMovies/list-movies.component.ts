import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ResponseBySearch, Movie } from '../../models/response-by-search.model';
import { FavoritesService } from '../../services/favorites/favorites.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit, OnDestroy {

  @Input() listMovies: ResponseBySearch;
  public favorites: Array<string>;
  public detailImdbID: string = null;

  private subscriptions: Subscription[] = [];

  constructor(
    private favoritesService: FavoritesService
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.favoritesService.favorites.subscribe(
        fav => {
          this.favorites = Object.keys(fav).map(key => fav[key]['imdbID'])
        }
      )
    )
  }

  public setFavorite(imdbId: string) {
    this.favoritesService.saveFavorite(this.getMovieByImdbId(imdbId));
  }

  public removeFavorite(imdbId: string) {
    this.favoritesService.removeFavorite(imdbId);
  }

  private getMovieByImdbId(imdbId: string): Movie {
    const key = Object.keys(this.listMovies.Search).find(key => imdbId === this.listMovies.Search[key].imdbID);
    return this.listMovies.Search[key];
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
