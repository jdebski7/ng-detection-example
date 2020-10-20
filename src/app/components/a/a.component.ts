import { Component, OnChanges } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnChanges {
  public value: string;
  public value$: Observable<string>;

  constructor() {
    timer(1000, 1000).subscribe(() => {
      this.value = Math.random().toString(36).replace(/[^a-z]+/g, '');
    });

    this.value$ = timer(1000, 1000).pipe(
      map(() => Math.random().toString(36).replace(/[^a-z]+/g, ''))
    );
  }

  ngOnChanges(): void {
  }

}
