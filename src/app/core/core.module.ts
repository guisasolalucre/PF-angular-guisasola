import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-AR' },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, 
      useValue: {
        appearance: 'outline',
        color: 'accent',
      }
    },
  ],
})
export class CoreModule { }
