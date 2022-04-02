import { Component, OnInit } from '@angular/core';
import { MyCourse } from '../my-course';
import { MyCourseService } from '../my-course.service';

@Component( {
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: [ './index.component.css' ]
} )
export class IndexComponent implements OnInit
{

  courses: MyCourse[] = [];

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor ( public courseService: MyCourseService ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit (): void
  {
    this.courseService.getAll().subscribe( ( data: any ) =>
    {
      // console.log(data.courses)
      this.courses = data.data.courses;
      // console.log( this.courses );
    } )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteCourse ( id: number )
  {
    this.courseService.delete( id ).subscribe( res =>
    {
      this.courses = this.courses.filter( item => item.id !== id );
      console.log( 'Post deleted successfully!' );
    } )
  }

}
