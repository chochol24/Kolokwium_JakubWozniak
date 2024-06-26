import { Component } from '@angular/core';
import { KlawiaturaResponseDTO } from '../models/klawiaturaResponse.interface';
import { KlawiaturaService } from '../klawiatura.service';

@Component({
  selector: 'app-klawiatury',
  templateUrl: './klawiatury.component.html',
  styleUrl: './klawiatury.component.css'
})
export class KlawiaturyComponent {
  public data: KlawiaturaResponseDTO[] = [];
  public isTableView: boolean = true;
  public choosedKeyboard?: KlawiaturaResponseDTO = undefined;

  constructor( private keyboardService: KlawiaturaService){
    this.getData();
  }

  private getData(): void {
    this.keyboardService.get().subscribe({
      next: (res) => {
        this.data = res;
      },
      error: (err) => console.error(err),
      complete: () => console.log('complete')
    });
  }

  public onChoosedRow(event: KlawiaturaResponseDTO): void {
    this.choosedKeyboard = event;
    this.keyboardService.delete(event.id).subscribe({
      next: () => {
        this.getData();
      }
    });

  }

  public onPaginationSubmit(): void {
    this.getData();
  }

  public onDataStyleChange(): void {
    this.isTableView = !this.isTableView;
  }

  public onSubmit(){
    this.onDataStyleChange();
  }

}
