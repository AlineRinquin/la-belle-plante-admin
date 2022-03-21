import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plant } from '../models/plant';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public collection$!: Observable<Plant[]>;
  public subCollection$ = new Subject<Plant[]>();
  private urlApi = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<any[]>(`${this.urlApi}/list_products`).pipe(
      map(tabPlant => {
        return tabPlant.map(obj => {
          return new Plant(
            obj.product_name,
            obj.product_price,
            obj.product_qty,
            obj.product_instock,
            obj.product_breadcrumb_label,
            obj.product_url_page,
            obj.product_id
            );
        })
      })
    );
   }

}

