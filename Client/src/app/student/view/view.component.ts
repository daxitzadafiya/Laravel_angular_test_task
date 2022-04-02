import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../Student';
import { StudentService } from '../Student.service';


@Component( {
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: [ './view.component.css' ]
} )
export class ViewComponent implements OnInit
{

  id!: number;
  student!: Student;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor (
    public studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit (): void
  {
    this.id = this.route.snapshot.params[ 'postId' ];

    this.studentService.find( this.id ).subscribe( ( data: Student ) =>
    {
      this.student = data;
    } );
  }

}