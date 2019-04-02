import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// we know that response will be in JSON format
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CustomerService {
  baseUrl = 'http://localhost:8000/customers';
  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get(this.baseUrl, httpOptions);
  }

  getCustomerById(customerId: string) {
    return this.http.get(`${this.baseUrl}/${customerId}`);
  }

  addCustomer(
    firstName: string,
    lastName: string,
    email: string,
    phone: number,
    weight: number,
    appointmentDate: Date
    /*, selectedPreferredServices: string, selectedAdditionalServices:Array<string>, selectedAllergenServices: Array<string>*/
  ) {
    return this.http
      .post(this.baseUrl, {
        firstName,
        lastName,
        email,
        phone,
        weight,
        appointmentDate /*, selectedPreferredServices, selectedAdditionalServices, selectedAllergenServices*/
      });
  }

  // Update Customer details
  updateCustomer(
    customerId: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: number,
    weight: number,
    appointmentDate: Date
  ) {
    return this.http.put(`${this.baseUrl}/${customerId}`, {
      firstName,
      lastName,
      email,
      phone,
      weight,
      appointmentDate
    });
  }

  deleteCustomer(customerId: number) {
    const requestUrl = `${this.baseUrl}/${customerId}`;
    console.log(' sending delete request to ' + requestUrl);
    return this.http.delete(requestUrl);
  }
}
