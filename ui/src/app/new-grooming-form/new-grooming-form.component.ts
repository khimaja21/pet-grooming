import { Component, OnInit } from '@angular/core';
import { String } from 'typescript-string-operations';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-new-grooming-form',
  templateUrl: './new-grooming-form.component.html',
  styleUrls: ['./new-grooming-form.component.css']
})
export class NewGroomingFormComponent implements OnInit {
  title = 'grooming-services';

  mode = 'Add';
  private id: string;
  customer;

  AppointmentDate = new Date();
  FirstName = '';
  LastName = '';
  Email = '';
  Phone = null;
  Weight = 0;

  SelectedPreferredService = '';
  SelectedAdditionalServices = [];
  SelectedAllergenServices = [];

  PreferredServices = [];
  AdditionalServices = [];
  Allergens = [];
  form: any;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    public route: ActivatedRoute
  ) {
    this.PreferredServices = [
      ' -- Select Service -- ',
      'Bath Only ($12)',
      'Partial Groom($20)',
      'Full Groom($35)',
      'Spa Treatments($50)',
      'Puppy Groom($40)',
      'Desheding Treatment($24)',
      'Little Paws Puppy Treatment($15)'
    ];

    this.AdditionalServices = [
      'Hair Coloring ($8)',
      'Hair Trim ($5)',
      'Hair wash and Blowdry($10)',
      'Ear Cleaning($8)',
      'Ear Pluck($5)',
      'Teeth Brushing($6)',
      'Sanitary Trim ($15)'
    ];

    this.Allergens = [
      'Fragnances',
      'Soy',
      'Eggs',
      'Fish',
      'Pork',
      'Lamb',
      'Wheat',
      'Dairy'
    ];
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        this.mode = 'Edit';
        this.id = paramMap.get('_id');

        this.customerService.getCustomerById(this.id).subscribe(
          data => {
            this.customer = data;
            this.FirstName = this.customer.firstName;
            this.LastName = this.customer.lastName;
            this.Email = this.customer.email;
            this.Phone = this.customer.phone;
            this.Weight = this.customer.weight;
            this.AppointmentDate = this.customer.appointmentDate;
            this.SelectedPreferredService = this.customer.preferredServices;
            this.SelectedAdditionalServices = this.customer.additionalServices;
            this.SelectedAllergenServices = this.customer.allergens;
          },
          err => console.error(err),
          () => console.log('finished loading')
        );
      } else {
        this.mode = 'Add';
        this.id = null;
      }
    });
  }

  onClearForm() {
    this.AppointmentDate = new Date();
    this.FirstName = '';
    this.LastName = '';
    this.Email = '';
    this.Phone = null;
    this.Weight = 0;
    this.PreferredServices = [];
    this.AdditionalServices = [];
    this.Allergens = [];
  }
  onSubmitForm() {
    // if (this.form.valid) {
    //   console.log('form submitted');
    // } else {
    //   // validate all form fields
    // }

    // alert('Form submitted successfully');

    if (this.mode === 'Add') {
      this.customerService
        .addCustomer(
          this.FirstName,
          this.LastName,
          this.Email,
          this.Phone,
          this.Weight,
          this.AppointmentDate,
          this.SelectedPreferredService,
          this.SelectedAdditionalServices,
          this.SelectedAllergenServices
        )
        .subscribe(responseData => {
          console.log(responseData);
          this.router.navigate(['/listCustomers']);
        });
    }
    if (this.mode === 'Edit') {
      this.customerService
        .updateCustomer(
          this.id,
          this.FirstName,
          this.LastName,
          this.Email,
          this.Phone,
          this.Weight,
          this.AppointmentDate,
          this.SelectedPreferredService,
          this.SelectedAdditionalServices,
          this.SelectedAllergenServices
        )
        .subscribe(responseData => {
          console.log(responseData);
          this.router.navigate(['/listCustomers']);
        });
    }

    console.log(
      String.Format(
        '{0},{1},{2},{3},{4},{5},{6},{7},{8}',
        this.AppointmentDate,
        this.FirstName,
        this.LastName,
        this.Email,
        this.Phone,
        this.Weight,
        this.SelectedPreferredService,
        this.SelectedAdditionalServices,
        this.SelectedAllergenServices
      )
    );
  }
}
