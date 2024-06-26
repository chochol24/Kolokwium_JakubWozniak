import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KlawiaturaResponseDTO } from '../models/klawiaturaResponse.interface';

@Component({
  selector: '[app-klawiatura-row]',
  templateUrl: './klawiatura-row.component.html',
  styleUrl: './klawiatura-row.component.css'
})
export class KlawiaturaRowComponent {
  @Input('app-klawiatura-row') klawiatura!: KlawiaturaResponseDTO;
  @Output() choosed = new EventEmitter<KlawiaturaResponseDTO>();

  public onChooseClick(): void {
    this.choosed.emit(this.klawiatura);
  }
}
