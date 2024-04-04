import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { Client } from '../../models';

@Component({
  selector: 'app-client-card',
  standalone: true,
  imports: [RouterModule, MatCardModule],
  templateUrl: './client-card.component.html',
})
export class ClientCardComponent {
  @Input({ required: true }) client!: Client;

  getClientFullName(client: Client): string {
    return `${client.name} ${client.surname}`;
  }
}
