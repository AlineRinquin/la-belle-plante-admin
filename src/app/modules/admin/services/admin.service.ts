import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plant } from '../models/plant';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public collection$!: Observable<Plant[]>;
  public subCollection$ = new Subject<Plant[]>();
  private urlApi = environment.apiUrl;
  public listPlant : Plant[];

  constructor(private http: HttpClient) {
    this.listPlant=[];

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
            obj.rating,
            parseInt(obj.id)
            );
        })
      })
    );
   }

   public add(plant: Plant): Observable<Plant> {
    return this.http.post<Plant>(`${this.urlApi}/list_products`, plant).pipe(
      tap(() => this.refreshPlant())
    );
  }

   public update(plant: Plant): Observable<Plant> {
    return this.http.put<Plant>(`${this.urlApi}/list_products/${plant.id}`, plant).pipe(
      tap(() => this.refreshPlant())
    );
  }

  public deleteById(plantId: number): Observable<any> {
     console.log("ServiceAdmin : " + plantId);
     
     console.log(`${this.urlApi}/list_products/${plantId}`);
     
    return this.http.delete<any>(`${this.urlApi}/list_products/${plantId}`).pipe(
      tap(() => this.refreshPlant())
    );
  }

   public refreshPlant(): void {

    this.collection$.subscribe((listPlant: Plant[]) => {
      this.listPlant = [...listPlant];
      
      this.subCollection$.next(listPlant);
    })
  }

}

