export interface CustomerModel {
  AppointmentDate: Date;
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: number;
  Weight: number;
  PreferredService: string;
  AdditionalServices: string[];
  AllergenServices: string[];
}
