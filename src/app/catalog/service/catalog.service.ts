import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Videogame} from "../../model/videogame";




@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  apiUrl = "https://project-works-rest-api.onrender.com/api/v1/GROUP-III/videogame";

  constructor(private http: HttpClient) {
  }

  getVideoGames() : Observable<Videogame[]> {
    return this.http.get<Videogame[]>(this.apiUrl);
  };

  getVideogame(id: string): Observable<Videogame> {
    return this.http.get<Videogame>(this.apiUrl + '/' + id);
  }


}
