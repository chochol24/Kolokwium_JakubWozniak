import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KlawiaturaResponseDTO } from './models/klawiaturaResponse.interface';
import { Observable } from 'rxjs';
import { KlawiaturaRequestDTO } from './models/klawiaturaRequest.interface';

@Injectable({
  providedIn: 'root'
})
export class KlawiaturaService {

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<KlawiaturaResponseDTO[]> {
    return this.httpClient.get<KlawiaturaResponseDTO[]>('https://localhost:7068/api/Klawiatury');
  }

  public post(body: KlawiaturaRequestDTO): Observable<void> {
    return this.httpClient.post<void>('https://localhost:7068/api/Klawiatury', body);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`https://localhost:7068/api/Klawiatury/${id}`);
  }
}
