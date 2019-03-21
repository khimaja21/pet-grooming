import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

//we know that response will be in JSON format
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

const groomingUrl= "http://localhost:8000/customers";

@Injectable()
export class GroomingService {

  constructor(private http: HttpClient) { }

  getAllCustomers() {
    return this.http.get(groomingUrl, httpOptions);
  }

  addGrooming(firstName: string, lastName: string, email: string, phone: number, weight: number, appointmentDate: Date/*, selectedPreferredServices: string, selectedAdditionalServices:Array<string>, selectedAllergenServices: Array<string>*/) {
    return this.http.post(groomingUrl, { firstName, lastName, email, phone, weight, appointmentDate/*, selectedPreferredServices, selectedAdditionalServices, selectedAllergenServices*/ }).subscribe((responseData) => {
      console.log(responseData);
    });
  }
  deleteCustomer(id: number) {
    var requestUrl =groomingUrl + "/" + id;
    console.log(" sending delete request to " + requestUrl);
    this.http
      .delete(requestUrl)
      .subscribe(()=> { 
        console.log("Successfully deleted.");
      });
      location.reload();
  }
}
