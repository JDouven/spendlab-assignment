import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FullNamePipe } from 'src/app/pipes/full-name.pipe';
import { Client } from '../../models';

@Component({
  selector: 'app-client-card',
  standalone: true,
  imports: [RouterModule, MatCardModule, FullNamePipe],
  templateUrl: './client-card.component.html',
})
export class ClientCardComponent {
  @Input({ required: true }) client!: Client;
}
