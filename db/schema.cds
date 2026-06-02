namespace com.ewe;

using { cuid } from '@sap/cds/common';

entity Units : cuid {
  UnitCode      : String(3);
  ISOCode       : String(3);
  ExternalCode  : String(3);
  Text          : String(30);
  DecimalPlaces : Integer;
}