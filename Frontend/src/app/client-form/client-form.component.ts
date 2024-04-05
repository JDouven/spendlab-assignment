import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  Type,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Client } from '../models';

export type CreateClient = Omit<UpdateClient, 'id'>;
export type UpdateClient = Client;
export type ClientFormOutput<Input> = Input extends Client
  ? UpdateClient
  : CreateClient;

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './client-form.component.html',
})
export class ClientFormComponent<
    ClientFormInput extends Client | undefined = undefined,
  >
  implements OnInit, OnChanges
{
  @Input() client!: ClientFormInput;
  @Output() submitClient = new EventEmitter<
    ClientFormOutput<ClientFormInput>
  >();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control(this.client?.name ?? '', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      surname: this.fb.control(this.client?.surname ?? '', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      email: this.fb.control(this.client?.email ?? '', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      streetName: this.fb.control(this.client?.streetName ?? '', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      postalCode: this.fb.control(this.client?.postalCode ?? '', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      houseNumber: this.fb.control(this.client?.houseNumber ?? '', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      city: this.fb.control(this.client?.city ?? '', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      country: this.fb.control(this.client?.country ?? '', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const clientChanges = changes['client'];
    if (!clientChanges || clientChanges.firstChange || !this.form) {
      return;
    }

    this.form.patchValue({
      name: this.client?.name ?? '',
      surname: this.client?.surname ?? '',
      email: this.client?.email ?? '',
      streetName: this.client?.streetName ?? '',
      postalCode: this.client?.postalCode ?? '',
      houseNumber: this.client?.houseNumber ?? '',
      city: this.client?.city ?? '',
      country: this.client?.country ?? '',
    });
    this.form.markAsPristine();
  }

  get nameControl() {
    return this.getControl('name', this.form, FormControl);
  }

  get surnameControl() {
    return this.getControl('surname', this.form, FormControl);
  }

  get emailControl() {
    return this.getControl('email', this.form, FormControl);
  }

  get streetNameControl() {
    return this.getControl('streetName', this.form, FormControl);
  }

  get postalCodeControl() {
    return this.getControl('postalCode', this.form, FormControl);
  }

  get houseNumberControl() {
    return this.getControl('houseNumber', this.form, FormControl);
  }

  get cityControl() {
    return this.getControl('city', this.form, FormControl);
  }

  get countryControl() {
    return this.getControl('country', this.form, FormControl);
  }

  submit() {
    const client = this.form.getRawValue();
    const createClient: CreateClient = { ...client };
    if (this.client) {
      const updateClient: UpdateClient = { ...client, id: this.client.id };
      this.submitClient.emit(updateClient);
      return;
    }

    this.submitClient.emit(createClient as ClientFormOutput<ClientFormInput>);
  }

  private getControl<T extends FormControl | FormArray | FormGroup>(
    name: string,
    form: FormGroup,
    type: Type<T>
  ): T {
    const control = form.get(name);
    if (!(control instanceof type)) {
      throw new Error(
        `${name} control should exist in ${form} and be of type ${type}`
      );
    }
    return control;
  }
}
