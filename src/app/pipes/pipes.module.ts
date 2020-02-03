import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperCaseFirstLetterPipe } from './upperCaseFirstLetter/upper-case-first-letter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UpperCaseFirstLetterPipe
  ],
  exports: [
    UpperCaseFirstLetterPipe
  ]
})
export class PipesModule { }
