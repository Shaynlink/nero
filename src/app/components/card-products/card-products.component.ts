import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-products',
  templateUrl: './card-products.component.html',
  styleUrls: [
    './card-poducts.components.scss',
    './../../style/button.scss'
  ]
})

export class CardProductComponent {
  @Input() cpImg: string | undefined;
  @Input() cpTitle: string | undefined;
  @Input() cpPrice: string | undefined;
  @Input() cpItems: string[] = [];
  @Input() cpAvailable: boolean = true;
  @Input() cpMessage: string = 'Soon';
  @Input() ngLink: string = '#';
}
