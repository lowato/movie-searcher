import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Message, SelectItem } from 'primeng//api';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../services/storage/storage.service';
import { Types } from '../../models/types.enum';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  public searchLogin: FormGroup;
  public loadingFull = true;
  public submitted = false;
  public message: Message[] = [];
  public typesSearch: SelectItem[];
  public optionsSelected: SelectItem[];

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private translateService: TranslateService,
    private storageService: StorageService
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

    this.searchLogin = this.formBuilder.group({
      typesSearch: ['s', Validators.required],
      inputSearch: ['', Validators.required],
      selectedType: [''],
      year: ['', Validators.maxLength(4)],
    });
  }

  onSubmit() {
    console.log('formulario: ', this.searchLogin.value);
  }

}
