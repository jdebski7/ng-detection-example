import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})
export class CComponent implements OnChanges {
  @Input() value: string;

  ngOnChanges(): void {
    console.log('app-c ngOnChanges');
  }

}
