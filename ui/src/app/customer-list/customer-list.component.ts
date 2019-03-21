import { Component, OnInit } from '@angular/core';
import { GroomingService } from '../new-grooming-form/grooming.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  title = 'Customers';
  public customerList;
  constructor(private _myService: GroomingService) { }

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers(){
    this._myService.getAllCustomers().subscribe(data=>{
      this.customerList= data;
    },
    err=> console.error(err),
    ()=>console.log('finished loading'))
  };

  onDeleteCustomer(customerId: number){
    this._myService.deleteCustomer(customerId);
    alert('Customer record deleted!!');
  }
}
