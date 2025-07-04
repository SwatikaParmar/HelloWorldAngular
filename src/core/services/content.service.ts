import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndPoint } from '../../enums/api-end-point';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }


  resetPassword(data: any) {
    return this.http.post<any>(environment.apiUrl + ApiEndPoint.resetPasswords, data)
  }
  changePassword(data: any) {
    return this.http.post<any>(environment.apiUrl + ApiEndPoint.changePasswords, data)
  }

  categoryDetail(Id: any) {
    return this.http.get<any>(environment.apiUrl + ApiEndPoint.categoryDetail + '?Id=' + Id)
  }

  addUpdateCategory(data: any) {
    return this.http.post<any>(environment.apiUrl + ApiEndPoint.addCategory, data)
  }

  categoryList() {
    return this.http.get<any>(environment.apiUrl + ApiEndPoint.categoryList)
  }

   attributeList() {
    return this.http.get<any>(environment.apiUrl + ApiEndPoint.attributeList);
  }
}
