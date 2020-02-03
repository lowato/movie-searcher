import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearcherRoutingModule } from './searcher-routing.module';
import { SearcherComponent } from './searcher.component';
import { SearcherLayoutComponent } from '../../layout/searcher-layout/searcher-layout.component';
import { HeaderComponent } from '../header/header.component';
import { ButtonModule } from 'primeng/button';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ListboxModule } from 'primeng/listbox';
import { OnlyDigiDirective } from '../../directives/onlyDigi/only-digi.directive';
import { ListMoviesComponent } from '../listMovies/list-movies.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FavoritesService } from '../../services/favorites/favorites.service';

@NgModule({
  declarations: [
    SearcherComponent,
    SearcherLayoutComponent,
    HeaderComponent,
    OnlyDigiDirective,
    ListMoviesComponent,
    LoadingComponent
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
    ProgressSpinnerModule
  ],
  providers: [
    FavoritesService
  ]
})
export class SearcherModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
