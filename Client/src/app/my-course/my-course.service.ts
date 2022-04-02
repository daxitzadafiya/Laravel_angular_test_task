import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MyCourse } from './my-course';
import { TokenStorageService } from '../_services/token-storage.service';

const TOKEN_KEY = 'auth-token';

@Injectable( {
  providedIn: 'root'
} )
export class MyCourseService
{

  private apiURL = "http://127.0.0.1:8000/api/";
constructor(private token_service:TokenStorageService,
  private httpClient: HttpClient) { }
  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
   // your auth token
   
  httpOptions = {
    headers: new HttpHeaders( {
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.token_service.getToken()

    } )
  }

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/


  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll (): Observable<any>
  {

    return this.httpClient.get( this.apiURL + 'courses/',this.httpOptions )

      .pipe(
        catchError( this.errorHandler )
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  create ( post: MyCourse ): Observable<any>
  {
   
    console.log(this.token_service.getToken())
    return this.httpClient.post( this.apiURL + 'courses/', JSON.stringify( post ), this.httpOptions )

      .pipe(
        catchError( this.errorHandler )
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  find ( id: number ): Observable<any>
  {

    return this.httpClient.get( this.apiURL + 'courses/' + id )

      .pipe(
        catchError( this.errorHandler )
      ) 
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  update ( id: number, post: MyCourse ): Observable<any>
  {

    return this.httpClient.put( this.apiURL + 'courses/' + id, JSON.stringify( post ), this.httpOptions )

      .pipe(
        catchError( this.errorHandler )
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  delete ( id: number )
  {
    return this.httpClient.delete( this.apiURL + 'courses/' + id, this.httpOptions )

      .pipe(
        catchError( this.errorHandler )
      )
  }

  /** 
   * Write code on Method
   *
   * @return response()
   */
  errorHandler ( error: any )
  {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent )
    {
      errorMessage = error.error.message;
    } else
    {
      errorMessage = `Error Code: ${ error.status }\nMessage: ${ error.message }`;
    }
    return throwError( errorMessage );
  }
}
