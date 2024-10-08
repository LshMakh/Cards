import { Component, OnInit } from '@angular/core';
import { Card } from '../../card.model';
import { CardsService } from '../../../cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  constructor(public cardsservice:CardsService){}

  ngOnInit() {

    this.cardsservice.getCard().subscribe(data=>{
      this.cardsservice.cardsList=data;
    })
      
  }

  deleteCard(cardID:number){
   this.cardsservice.deleteCard(cardID).subscribe((response) => {
      console.log('Card deleted:', response);
      this.cardsservice.getCard().subscribe((data) => {
        this.cardsservice.cardsList = data;
      });
    });
      
  }


}
