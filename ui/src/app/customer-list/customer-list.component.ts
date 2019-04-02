import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  title = 'Customers';
  public customerList;
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(
      data => {
        this.customerList = data;
      },
      err => console.error(err),
      () => console.log('finished loading')
    );
  }

  onDeleteCustomer(customerId: number) {
    this.customerService.deleteCustomer(customerId).subscribe(() => {
      console.log('Deleted:' + customerId);
      this.getCustomers();
    });

  }
}
