import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  formGroupSearchForm;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroupSearchForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        surname: [''],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
      }
    )

    this.formGroupSearchForm.valueChanges.subscribe(values => {
      console.log('##ABEL## >> SearchFormComponent >>  v', values);
    })

    this.formGroupSearchForm.statusChanges.subscribe(status => {
      console.log('##ABEL## >> SearchFormComponent >>  v', status);
    })
  }

  saveForm() {
    this.submitted = true;
    console.log('##ABEL## >> SearchFormComponent >>  saveForm', this.formGroupSearchForm.get('name').value);
    console.log('##ABEL## >> SearchFormComponent >>  saveForm', this.formGroupSearchForm);
    console.log('##ABEL## >> SearchFormComponent >>  saveForm', this.formGroupSearchForm.value);
  }

  //
  // ,
  //   surname: [''],
  //   email: [''],
  //   password: [''],

}
