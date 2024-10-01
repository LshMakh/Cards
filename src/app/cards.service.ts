import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Card } from './pages/card.model';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class CardsService {
  
    constructor(private http:HttpClient) { }
  
    cards:Card[] = [];
  
   
    getCard():Observable<Card[]>{
      return this.http.get<Card[]>("https://localhost:44332/api/Cards/GetCards");
    }
  
    get cardsList():Card[]{
  
      return this.cards;
    }
  
    set cardsList(list:Card[]){
        this.cards = list;
    }

    deleteCard(cardId: number): Observable<any> {
        return this.http.delete(`https://localhost:44332/api/Cards/DeleteCard/${cardId}`);
      }
    


  }