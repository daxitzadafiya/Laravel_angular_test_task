import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyCourse } from '../my-course';
import { MyCourseService } from '../my-course.service';

@Component( {
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: [ './edit.component.css' ]
} )
export class EditComponent implements OnInit
{

  id!: number;
  post!: MyCourse;
  form!: FormGroup;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor (
    public courseService: MyCourseService,
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
    this.id = this.route.snapshot.params[ 'myCourseId' ];
    console.log(this.id)
    this.courseService.find( this.id ).subscribe( ( data: any ) =>
    {
      this.post = data.data.course;
      console.log(this.post)
    } );

    this.form = new FormGroup( {
      id: new FormControl( '', [ Validators.required ] ),
      name: new FormControl( '', Validators.required )
    } );
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f ()
  {
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit ()
  {
    console.log( this.form.value );
    this.courseService.update( this.id, this.form.value ).subscribe( ( res: any ) =>
    {
      console.log( 'Post updated successfully!' );
      this.router.navigateByUrl( 'courses/course/index' );
    } )
  }


}
