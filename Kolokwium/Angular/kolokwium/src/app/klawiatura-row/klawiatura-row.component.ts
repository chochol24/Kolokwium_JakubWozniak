import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KlawiaturaResponseDTO } from '../models/klawiaturaResponse.interface';
import { Rodzaj } from '../models/rodzaj.interface';

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
  public name(rodzaj: Rodzaj): string{
    var temp = "";
    switch(rodzaj){
      case Rodzaj.hybrydowa:
        return "hybrydowa"; break;
      case Rodzaj.mechaniczna:
        return "mechaniczna"; break;
      case Rodzaj.membranowa:
        return "membranowa"; break;
      case Rodzaj.nozycowa:
        return "nozycowa"; break;
      case Rodzaj.optyczna:
        return "optyczna"; break;
    }
    return temp;
  }
}
