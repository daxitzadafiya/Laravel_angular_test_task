import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../Student.service';



@Component( {
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: [ './index.component.css' ]
} )
export class IndexComponent implements OnInit
{

  students: Student[] = [];

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor ( public studentService: StudentService ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit (): void
  {
    this.studentService.getAll().subscribe( ( data: any ) =>
    {
      this.students = data.data.students;

    } )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost ( id: number )
  {
    this.studentService.delete( id ).subscribe( res =>
    {
      this.students = this.students.filter( item => item.id !== id );
      console.log( 'Post deleted successfully!' );
    } )
  }

}