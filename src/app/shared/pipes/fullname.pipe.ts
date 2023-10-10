import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Student } from 'src/app/model';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  constructor(
    private titlecasePipe: TitleCasePipe,
  ){}

  transform(value: Student, ...args: unknown[]): unknown {
    const nameTitleCase = this.titlecasePipe.transform(value.name)
    const surnameTitleCase = this.titlecasePipe.transform(value.surname)
    const result = `${nameTitleCase} ${surnameTitleCase}`;

    return result
  }

}
