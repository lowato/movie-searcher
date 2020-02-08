import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, SelectItem } from 'primeng//api';
import { Types } from '../../models/types.enum';
import { QueryParams } from '../../models/query-params.model';
import { OmdbApiService } from '../../services/omdbApi/omdb-api.service';
import { ResponseBySearch } from '../../models/response-by-search.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit, OnDestroy {

  public searchForm: FormGroup;
  public loadingSearch = false;
  public submitted = false;
  public message: Message[] = [];
  public typesSearch: SelectItem[];
  public optionsSelected: SelectItem[];
  public listMovies: ResponseBySearch;

  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private _omdbApiService: OmdbApiService
  ) { }

  ngOnInit() {

    this.typesSearch = [
      {label: 'Todo', value: 's'},
      {label: 'ID', value: 'i'},
      {label: 'Título', value: 't'}
    ];

    this.optionsSelected = [
      {label: 'Ninguno', value: ''},
      {label: 'Películas', value: Types.MOVIE},
      {label: 'Series', value: Types.SERIES},
      {label: 'Episodios', value: Types.EPISODE}
    ];

    this.searchForm = this.formBuilder.group({
      typesSearch: ['s', Validators.required],
      inputSearch: ['', Validators.required],
      selectedType: [''],
      year: ['', Validators.maxLength(4)],
    });
  }

  get f() { return this.searchForm.controls; }

  onSubmit(): void {

    if (this.searchForm.invalid) {
        return;
    }

    this.loadingSearch = true;

    let queryParams: QueryParams = this.getQueryParams();

    this.subscriptions.push(
      this._omdbApiService.search(queryParams).subscribe(
        resp => {
          this.listMovies = resp;
          this.loadingSearch = false;
        }
      )
    )
  }

  private getQueryParams(): QueryParams {

    let queryParams: QueryParams = null;

    switch (this.searchForm.value.typesSearch) {
      case 's':
        queryParams = {
          s: this.searchForm.value.inputSearch,
          type: this.f.selectedType.value,
          y: this.f.year.value,
        }
        break;

      case 'i':
        queryParams = {
          i: this.searchForm.value.inputSearch,
          type: this.f.selectedType.value,
          y: this.f.year.value,
        }
        break;

      case 't':
        queryParams = {
          t: this.searchForm.value.inputSearch,
          type: this.f.selectedType.value,
          y: this.f.year.value,
        }
        break;

      default:
        break;
    }

    return queryParams;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
