import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-reactive-search-cdnjs',
  templateUrl: './reactive-search-cdnjs.component.html',
  styleUrls: ['./reactive-search-cdnjs.component.css'],
})
export class ReactiveSearchCdnjsComponent implements OnInit {

  queryField = new FormControl();
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  results$: Observable<any>;
  total: number;
  readonly fields = 'name,description,version,homepage';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.results$ = this.queryField.valueChanges.pipe(
      map((value) => value.trim()),
      filter((value) => value.length > 1),
      debounceTime(200),
      distinctUntilChanged(),
      //tap((value) => console.log(value)),
      switchMap((value) =>
        this.http.get(this.SEARCH_URL, {
          params: {
            search: value,
            fields: this.fields,
          },
        })
      ),

      tap((res: any) => (this.total = res.total)),
      map((res: any) => res.results)
    );
  }

  onSearch() {
    let value = this.queryField.value;
    if (value && (value = value.trim()) !== '') {
      const params_ = {
        search: value,
        fields: this.fields,
      };

      let params = new HttpParams();
      params = params.set('search', value);
      params = params.set('fields', this.fields);

      this.results$ = this.http.get(this.SEARCH_URL, { params }).pipe(
        tap((res: any) => (this.total = res.total)),
        map((res: any) => res.results)
      );
    }
  }

}
