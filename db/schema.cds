namespace com.ewe;

using { cuid } from '@sap/cds/common';

entity Units : cuid {
  unitCode      : String(3);
  iSOCode       : String(3);
  externalCode  : String(3);
  text          : String(30);
  decimalPlaces : Integer;
}