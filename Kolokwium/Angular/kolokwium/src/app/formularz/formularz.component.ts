import { Component, EventEmitter, Output, inject } from '@angular/core';
import { KlawiaturaRequestDTO } from '../models/klawiaturaRequest.interface';
import { KlawiaturaService } from '../klawiatura.service';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrl: './formularz.component.css'
})
export class FormularzComponent {
  @Output() submit = new EventEmitter<void>();

  public object: KlawiaturaRequestDTO = {
    model: null,
    rodzaj: null
  };

  private readonly api = inject(KlawiaturaService);

  public onSubmit(event: any): void {

    this.api.post(this.object).subscribe({
      next: () => {
        this.submit.emit();
      },
      error: (err) => console.error(err)
    })
  }
}
