import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(rawnum: string): string {
    
    if (rawnum.length == 10)
    {
      rawnum = this.espaceTelNumber(rawnum);
      rawnum = rawnum.substr(1);
      return "+33 "+ rawnum;
    }
    
  }

  espaceTelNumber(tel: string): string {
    return tel.substring(0, 2) + ' ' + tel.substring(2, 4) + ' '
      + tel.substring(4, 6) + ' ' + tel.substring(6, 8) + ' ' + tel.substring(8, 10);
  }

}
