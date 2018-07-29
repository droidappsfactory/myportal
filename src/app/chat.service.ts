import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Headers, Response, RequestOptions } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // baseURL: string = "https://api.dialogflow.com/v1/query?";
  // clientAccessToken:string = "2177de757e894b3ca968ccd5badb625a";
  // protocolVersion:string = "20170712";
  // language:string = 'en';
 
  baseURL:string = 'http://35.200.166.62/api/query';

  // headerDict = {
  //   'Content-Type': 'application/json',
  //   'Authorization': 'Bearer '+ this.clientAccessToken,
  //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //   "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
  //   'Access-Control-Allow-Credentials':'true',
  //   'Access-Control-Allow-Origin':'Origin'


  // }

  constructor(private _http: HttpClient) { }




  sendTxtToBot(searchTxt:string):Observable<{message:string}>{


    

    return this._http.post<{message:string}>(this.baseURL,{query:searchTxt});
    
  }


 
}
