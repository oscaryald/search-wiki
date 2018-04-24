import { Component } from '@angular/core';
import {WikiService} from "./wiki.service";
import {Subject} from "rxjs/Subject";

import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Array<string>;
  term$ = new Subject<string>()

  constructor(private wikiService: WikiService){
    this.term$
        .debounceTime(400)
        .distinctUntilChanged()
        .switchMap((term) => {
          return this.wikiService.search(term)
        })
        .subscribe(result => this.items = result)
    })
  }

}
