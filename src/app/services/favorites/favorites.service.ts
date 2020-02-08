import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../../models/response-by-search.model';

const keyFavorites = 'favorites';
@Injectable({
  providedIn: 'root'
})

export class FavoritesService {

  private favoritesSubject: BehaviorSubject<Movie[]>;
  public favorites$: Observable<Movie[]>;

  constructor(
    private storageService: StorageService
  ) {
    this.favoritesSubject = new BehaviorSubject<Movie[]>(this.storageService.getLocalStorage(keyFavorites));
    this.favorites$ = this.favoritesSubject.asObservable();
  }

  public get getFavorites(): Movie[] {
    return this.favoritesSubject.value;
  }

  saveFavorite(movie: Movie): void {
    // TODO: Save favorites by user
    let favorites =  this.storageService.getLocalStorage(keyFavorites);
    favorites = !favorites ? [] : favorites;
    favorites.push(movie);
    this.storageService.setLocalStorage(keyFavorites, favorites);
    this.favoritesSubject.next(favorites);
  }

  removeFavorite(imdbID: string): void {
    // TODO: Remove favorites by user
    let favorites: Movie[] =  this.storageService.getLocalStorage(keyFavorites);
    const key = Object.keys(favorites).find(key => imdbID === favorites[key].imdbID);
    delete favorites[key];
    favorites = favorites.filter(function (el) {
      return el != null;
    });
    this.storageService.setLocalStorage(keyFavorites, favorites);
    this.favoritesSubject.next(favorites);
  }
}
