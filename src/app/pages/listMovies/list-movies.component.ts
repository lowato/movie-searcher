import { Component, OnInit, Input } from '@angular/core';
import { ResponseBySearch, Movie } from '../../models/response-by-search.model';
import { FavoritesService } from '../../services/favorites/favorites.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  @Input() listMovies: ResponseBySearch;
  public favorites: Array<string>;

  constructor(
    private favoritesService: FavoritesService
  ) { }

  ngOnInit() {
    this.favoritesService.favorites.subscribe(
      fav => {
        this.favorites = Object.keys(fav).map(key => fav[key]['imdbID'])
      }
    );
  }

  isFavorite(imdbId: string) {
    return imdbId in this.favorites;
  }

  setFavorite(imdbId: string) {
    this.favoritesService.saveFavorite(this.getMovieByImdbId(imdbId));
  }

  removeFavorite(imdbId: string) {
    this.favoritesService.removeFavorite(imdbId);
  }

  getMovieByImdbId(imdbId: string): Movie {
    const key = Object.keys(this.listMovies.Search).find(key => imdbId === this.listMovies.Search[key].imdbID);
    return this.listMovies.Search[key];
  }
}
