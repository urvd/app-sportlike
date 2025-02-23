import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatafootService {
  private url_file = 'assets/ligue_des_champions_2024-2025.json';
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadData(); // Charge les données au démarrage
  }

  private loadData() {
    this.http.get(this.url_file)
      .subscribe(data => {
      console.log('Données chargées DataFoot :', (this.data$ != null));
      this.dataSubject.next(data);
    })
  }

  refreshData() {
    this.loadData(); // Recharge les données
  }
}
