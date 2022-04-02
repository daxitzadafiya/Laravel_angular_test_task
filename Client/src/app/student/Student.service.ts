import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Student } from './Student';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable( {
  providedIn: 'root'
} )
export class StudentService
{

  private apiURL = "http://127.0.0.1:8000/api/";

  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  constructor ( private httpClient: HttpClient,private token_service:TokenStorageService, ) { }
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

    return this.httpClient.get( this.apiURL + 'students' ,this.httpOptions)

      .pipe(
        catchError( this.errorHandler )
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  create ( student: Student ): Observable<any>
  {

    return this.httpClient.post( this.apiURL + 'students/', JSON.stringify( student ), this.httpOptions )

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

    return this.httpClient.get( this.apiURL + 'students/' + id )

      .pipe(
        catchError( this.errorHandler )
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  update ( id: number, student: Student ): Observable<any>
  {

    return this.httpClient.put( this.apiURL + 'students/' + id, JSON.stringify( student ), this.httpOptions )

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
    return this.httpClient.delete( this.apiURL + 'students/' + id, this.httpOptions )

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