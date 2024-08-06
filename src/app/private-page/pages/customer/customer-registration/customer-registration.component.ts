import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Country } from 'src/app/models/country';
import { Customer } from 'src/app/models/customer';
import { States } from 'src/app/models/states';
import { CustomerService } from 'src/app/services/customer.service';
import { StateAndDistrictService } from 'src/app/services/state-and-district.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss'],
})
export class CustomerRegistrationComponent implements OnInit {
  constructor(
    private countryStateService: StateAndDistrictService,
    private customerService: CustomerService
  ) {}

  siteKey = '6LfwoWQjAAAAAGNyxnNpea18zdnHR-zP4zH5Zm1v';
  public type!: 'image' | 'audio';

  listOfCountries: Country[] = [];
  listOfStates: States[] = [];

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry() {
    this.countryStateService.getCountries().subscribe((resp) => {
      this.listOfCountries = resp;
    });
  }

  customerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    mobileNumber: new FormControl('', [
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.required,
    ]),
    whatsappNumber: new FormControl('', [
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.required,
    ]),
  });

  getStates() {
    this.countryStateService
      .getStateByCountry(this.customerForm.value.country)
      .subscribe((resp) => {
        this.listOfStates = resp;
      });
  }

  customer: Customer = new Customer();
  response: any;
  createCustomer() {
    this.customer.customer_number = JSON.parse(
      JSON.stringify(this.customerForm.value.firstName)
    );
    this.customer.customer_name = JSON.parse(
      JSON.stringify(this.customerForm.value.lastName)
    );
    this.customer.address = JSON.parse(
      JSON.stringify(this.customerForm.value.address)
    );
    this.customer.city = JSON.parse(
      JSON.stringify(this.customerForm.value.city)
    );
    this.customer.state = JSON.parse(
      JSON.stringify(this.customerForm.value.state)
    );
    this.customer.country = JSON.parse(
      JSON.stringify(this.customerForm.value.country)
    );
    this.customer.zipcode = JSON.parse(
      JSON.stringify(this.customerForm.value.zipCode)
    );
    this.customer.email = JSON.parse(
      JSON.stringify(this.customerForm.value.email)
    );
    this.customer.mobile_number = JSON.parse(
      JSON.stringify(this.customerForm.value.mobileNumber)
    );
    this.customer.whatsapp_number = JSON.parse(
      JSON.stringify(this.customerForm.value.whatsappNumber)
    );

    this.customerService.createCustomer(this.customer).subscribe((resp) => {
      this.response = resp;
      alert('-----------response--------->' + this.response);
    });
  }
}
