import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of, Subject, tap } from 'rxjs';
import { PlantouneService } from 'src/app/services/plantoune.service';
import { environment } from 'src/environments/environment';
import { Plant } from '../models/plant';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public collection$!: Observable<Plant[]>;
  public subCollection$ = new Subject<Plant[]>();
  private urlApi = environment.apiUrl;
  public listPlant: Plant[];
  public plantById: Plant;

  constructor(private http: HttpClient,
    private route: Router) {
    this.listPlant = [];
    this.plantById = new Plant();

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
            obj.id
          );
        })
      })
    );
  }

  getPlantById(plant_id: any): Observable<any> {

    return this.http.get<any>(`${this.urlApi}/list_products/${plant_id}`).pipe(
      map(obj => {
        console.log(obj);

        return new Plant(
          obj.product_name,
          obj.product_price,
          obj.product_qty,
          obj.product_instock,
          obj.product_breadcrumb_label,
          obj.product_url_page,
          obj.rating,
          obj.id
        );
      })
    )
  }

  public getById(plant: Plant): any {

    this.plantById = plant;

    // return this.http.get<Plant>(`${this.urlApi}/list_products/${plantId}`).pipe(
    //   map(obj =>{

    //     return new Plant(
    //       obj.nom,
    //       obj.price,
    //       obj.quantity,
    //       obj.instock,
    //       obj.category,
    //       obj.urlPicture,
    //       obj.rating,
    //       obj.id
    //       );
    //   })

    //     )
  }


  public add(plant: Plant): Observable<Plant> {

    const plantForDb = {
      product_name: plant.nom,
      product_price: plant.price,
      product_qty: plant.quantity,
      product_instock: plant.instock,
      product_breadcrumb_label: plant.category,
      product_url_page: plant.urlPicture,
      rating: plant.rating,
    }

    return this.http.post<Plant>(`${this.urlApi}/list_products`, plantForDb).pipe(
      tap(() => {
        this.refreshPlant()
        this.route.navigate(['admin'])
      })
    );
  }

  public update(plant: Plant, idPlant: string | null): Observable<Plant> {

    console.log(idPlant);


    const plantForDb = {
      id: idPlant,
      product_name: plant.nom,
      product_price: plant.price,
      product_qty: plant.quantity,
      product_instock: plant.instock,
      product_breadcrumb_label: plant.category,
      product_url_page: plant.urlPicture,
      rating: plant.rating,
    }

    return this.http.put<Plant>(`${this.urlApi}/list_products/${idPlant}`, plantForDb).pipe(
      tap(() =>{
        this.refreshPlant()
        this.route.navigate(['admin'])
      })
    );
  }

  public deleteById(plantId: string): Observable<any> {
    console.log("ServiceAdmin : " + plantId);

    console.log(`${this.urlApi}/list_products/${plantId}`);

    return this.http.delete<any>(`${this.urlApi}/list_products/${plantId}`).pipe(
      tap(() =>{ 
        this.refreshPlant()
      })
    );
  }

  public refreshPlant(): void {

    this.collection$.subscribe((listPlant: Plant[]) => {
      this.listPlant = [...listPlant];

      this.subCollection$.next(listPlant);
    })
  }

}

