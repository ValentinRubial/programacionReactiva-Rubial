import { Component, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-data-display',
  template: `
    <div>
      <h2>Data from Promise</h2>
      <p>{{ dataPromise | async }}</p>
    </div>

    <div>
      <h2>Data from Observable</h2>
      <p>{{ (dataObservable | async) }}</p>
    </div>
  `,
})
export class DataDisplayComponent {
  dataPromise: Promise<string>;
  dataObservable: Observable<string>;

  constructor(private dataService: DataService) {
    this.dataPromise = this.dataService.getDataPromise();
    this.dataObservable = this.dataService.getDataObservable();
  }
}


