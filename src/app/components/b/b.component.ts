import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  TemplateRef, ViewChild,
  ViewContainerRef
} from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BComponent implements OnInit, OnChanges {
  @Input() template: TemplateRef<any>;
  @Input() detach: boolean;
  @Input() timerDetect: boolean;

  @ViewChild('container', { read: ViewContainerRef, static: true }) ctr: ViewContainerRef;

  constructor(
    private readonly cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    if (this.detach) {
      this.cdr.detach();
    }

    if (this.timerDetect) {
      timer(1500, 3500).subscribe(() => {
        this.cdr.detectChanges();
      });
    }

    // const view =  this.template.createEmbeddedView(null);
    // this.ctr.insert(view);

    this.cdr.detectChanges();
  }

  ngOnChanges(): void {
    console.log('app-b ngOnChanges');
  }
}
