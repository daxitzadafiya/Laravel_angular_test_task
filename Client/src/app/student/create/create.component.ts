import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyCourseService } from 'src/app/my-course/my-course.service';
import { MyCourse } from 'src/app/my-course/my-course';
import { DatePipe } from '@angular/common'
import { StudentService } from '../Student.service';

@Component( {
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: [ './create.component.css' ],
   providers: [DatePipe]
} )
export class CreateComponent implements OnInit
{

  form!: FormGroup;
  currentDate = new Date();
  courses: MyCourse[] = [];
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor (
    public studentService: StudentService,
    private router: Router,
    public courseService: MyCourseService,
    public datepipe: DatePipe
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit (): void
  {
     this.courseService.getAll().subscribe( ( data: any ) =>
    {
      console.log(data.data.courses)
      this.courses = data.data.courses;
    } )
    this.form = new FormGroup( {
      name: new FormControl( '', [ Validators.required ] ),
      age: new FormControl( '', Validators.required ),
      email: new FormControl( '', [ Validators.required ] ),
      dob: new FormControl( this.datepipe.transform(this.currentDate, 'yyyy-MM-dd'), Validators.required ),
      gender: new FormControl( '', [ Validators.required ] ),
      course_id: new FormControl( '', Validators.required ),
      address: new FormControl( '', [ Validators.required ] ),
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
    this.studentService.create( this.form.value ).subscribe( ( res: any ) =>
    {
      console.log( 'Post created successfully!' );
      this.router.navigateByUrl( 'students/index' );
    } )
  }

}