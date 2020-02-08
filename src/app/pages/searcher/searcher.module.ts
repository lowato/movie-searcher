import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { ListboxModule } from 'primeng/listbox';
import { HttpClient } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SearcherRoutingModule } from './searcher-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../../components/header/header.module';

import { OnlyDigiDirective } from '../../directives/onlyDigi/only-digi.directive';

import { SearcherComponent } from './searcher.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { ListMoviesComponent } from '../../components/listMovies/list-movies.component';
import { DetailMovieComponent } from '../../components/detailMovie/detail-movie.component';
import { SearcherLayoutComponent } from '../../layout/searcher-layout/searcher-layout.component';

import { FavoritesService } from '../../services/favorites/favorites.service';

@NgModule({
  declarations: [
    SearcherComponent,
    SearcherLayoutComponent,
    OnlyDigiDirective,
    ListMoviesComponent,
    DetailMovieComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    SearcherRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    InputTextModule,
    SelectButtonModule,
    ListboxModule,
    ProgressSpinnerModule,
    HeaderModule,
    RouterModule
  ],
  providers: [
    FavoritesService
  ]
})
export class SearcherModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
