export class Contract {
  id?: Number;
  store_code?: Number;
  sap_code?: String;
  governorate?: String;
  province?: String;
  end_date?: String | null;
  valid_through?: String | null;
  renewal_date?: String | null;
  opening_date?: String | null;
  receiving_date?: String | null;
  branch_name?: String;
  branch_address?: String;
  status?: String;
  has_attachment?: Boolean;
}
