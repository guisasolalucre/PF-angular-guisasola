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

  transform(name: string, surname: string, ...args: unknown[]): unknown {
    const nameTitleCase = this.titlecasePipe.transform(name)
    const surnameTitleCase = this.titlecasePipe.transform(surname)
    const result = `${nameTitleCase} ${surnameTitleCase}`;

    return result
  }

}
