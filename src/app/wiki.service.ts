import { Injectable } from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class WikiService {

  constructor(private jsonp: Jsonp) { }

  search(term: string){
    let search = new URLSearchParams();
    search.set('action' , 'opensearch');
      search.set('search' , term);
      search.set('format' , 'json');

      return this.jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
          .map(response => {
              console.log(response.json()[3])
            return response.json()[1];
          })
  }

}
