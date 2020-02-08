import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearcherRoutingModule } from './searcher-routing.module';
import { SearcherComponent } from './searcher.component';
import { SearcherLayoutComponent } from '../../layout/searcher-layout/searcher-layout.component';
import { ButtonModule } from 'primeng/button';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ListboxModule } from 'primeng/listbox';
import { OnlyDigiDirective } from '../../directives/onlyDigi/only-digi.directive';
import { ListMoviesComponent } from '../../components/listMovies/list-movies.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FavoritesService } from '../../services/favorites/favorites.service';
import { DetailMovieComponent } from '../../components/detailMovie/detail-movie.component';
import { HeaderModule } from '../../components/header/header.module';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from '../../components/pagination/pagination.component';

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
