import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwatchbookService {
  private headers;

  public openedRowsId: number[] = [];
  public onChangedSelectedSwatchTag = new Subject<number>();

  constructor(
      private httpClient: HttpClient
  ) {
      this.headers =  new HttpHeaders({
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI0MWRjNjJmYjhiYThjMTdlMzAyMjAyZTA0ZGY3NWU5NTk2NzQ1MDA5NzMyNDQyZTliY2NmM2Y2NTNlMjQxMzI0ZmZmYjZjZWMxMWIzZjg0In0.eyJhdWQiOiIzIiwianRpIjoiYjQxZGM2MmZiOGJhOGMxN2UzMDIyMDJlMDRkZjc1ZTk1OTY3NDUwMDk3MzI0NDJlOWJjY2YzZjY1M2UyNDEzMjRmZmZiNmNlYzExYjNmODQiLCJpYXQiOjE1MzQ1MDI5ODgsIm5iZiI6MTUzNDUwMjk4OCwiZXhwIjoxNTY2MDM4OTg3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.BR1t2icSTrJMidpzdYrASb0_Gk-cJLK_m4d3RKI4FippMFIGn3k0ZHg3siAtnyyqoJfzDRHT5pe0M-sEoEP7JYBEMiuF3SmZSidIfv9NdPnnDdjyUQxdFhzyPwVDdfv5df6cjPIhlDu_20uN6IGx64O8oPS4BM2dZ351N5vsqvXSvQtalLhzdUe-OOzucKlRVF2edAcHlZ3ghYo7ArSczfwWUCQdYvCxvJTOv7o9iUrQAzgym74cugdbFluvcJGv8lQarlT041E-yS1xSxrEz3DB38IABdWGBldFz-eJ_EK78cWQcutlMWQdlYz3Qlm1pLJLrnzzZR9nT2hLGwESC5kBNccVFl1DCvbDMbAeKKaCe7-ZkvE_9D65dN5SSE4k2cp8mRpN0a-Eo35_GDvLpLBbvxeJaB0pE0qp9j5c8EgUfQBB1iVxivpW1E18_7sn8nYNY3B20evmKDce0H1W8oXdMTilsbfmVk9xmCks7aI-GUoxC6RySZXiTFQotMdurMw0Gw94z30r0yVfGBV2qFuZis3xmq9NGBIUyRNbeB8tTwQHnKyQYa3kLk5vREQTr-uOnZ7TIcp0WKsMG5OOM9KyB6JM_1ekA6h9tpkyTM6mnwhuwFFEIuVBlffUf7v7SdjaxCy_e-ahlc-VGGg6oGsaKECF3KGDYxmhF6H04Z8'
      });
  }

  public getSmartTags () {
    return this.httpClient.get('https://app.swatchbook.us/api/v1/customType?type=24&forTags=1&onlyWithParent=1', {
        headers: this.headers }
        );
  }

}
