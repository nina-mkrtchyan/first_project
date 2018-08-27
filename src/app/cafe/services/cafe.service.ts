import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CommonService} from '../../services/common.service';
import {HttpService} from '../../services/http.service';
import {Cafe} from '../cafe';

@Injectable({
  providedIn: 'root'
})
export class CafeService extends CommonService {

    constructor(
        private httpService: HttpService
    ) {
        super();
    }

    public getCafes(searchKey: string = '', page: number = 1): Observable<any> {
        return this.httpService
            .get('http://sipster.fifth-llc.com/admin/api/v1/cafe', {
                    search_key: searchKey,
                    page: page.toString()
                }
           );
    }

    public createCafe(cafe: Cafe): Observable<any> {
        cafe.region_id = Number(cafe.region_id);
        console.log(typeof(cafe.region_id));
        return this.httpService
            .post('http://sipster.fifth-llc.com/admin/api/v1/cafe', cafe);
    }
}
