import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MyCourse } from 'src/app/my-course/my-course';
import { MyCourseService } from 'src/app/my-course/my-course.service';
import { Student } from '../Student';
import { StudentService } from '../Student.service';

@Component( {
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: [ './edit.component.css' ],
   providers: [DatePipe]
} )
export class EditComponent implements OnInit
{

  id!: number;
  student!: Student;
  selectedValue!:any;
  levelNum!:number;
   items = [ { id: 1, name: 'A'}, { id: 2, name: 'B'}, { id: 3, name: 'C'}];
    selectedItem: any;
  levels:Array<any> = [
      {id: 0, name: "AA"},
      {id: 1, name: "BB"}
  ];
  form!: FormGroup;
   currentDate = new Date();
     courses: MyCourse[] = [];

  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
    private opts = [
    { key: 'one', value: [1,2,3] },
    { key: 'two', value: [3,4,5] },
    { key: 'three', value: [6,7,8] }
  ];
  
  firstSelectValue = 'one';
  secondSelectValue = null;



  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
   foodControl = new FormControl(this.foods[2].value);
  constructor (
    public studentService: StudentService,
    private route: ActivatedRoute,
    public courseService: MyCourseService,
    private router: Router,
    public datepipe: DatePipe
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */

    toNumber(){
    this.levelNum = +this.levelNum;
    console.log(this.levelNum);
  }

  selectedLevel = this.levels[0];

  selectedLevelCustomCompare = {num: 1, name: "BB"}

  compareFn(a:any, b:any) {
    console.log(a, b, a && b && a.num == b.num);
    return a && b && a.num == b.num;
  }

  ngOnInit (): void
  {
    console.log(this.levels)
    // this.selectedLevel = this.levels[0]
    // this.selectedItem = this.items[0];
    console.log(this.selectedItem)
    console.log(this.selectedLevel)
    this.id = this.route.snapshot.params[ 'postId' ];

    
    this.studentService.find( this.id ).subscribe( ( data: any ) =>
    {
      this.student = data.data.student;
      console.log(this.student)
      // this.selectedValue = data.data.student.course
    } );

        this.courseService.getAll().subscribe( ( data: any ) =>
    {
      console.log(data)
      const selecteddata =  data.data.courses.filter((item:any)=>item.id===this.student.course.id)
      this.courses = data.data.courses;
      console.log( this.courses );
      console.log(selecteddata)
      this.selectedValue = selecteddata[0];
    } )

    this.form = new FormGroup( {
      name: new FormControl( '', [ Validators.required ] ),
      age: new FormControl( '', Validators.required ),
      email: new FormControl( '', [ Validators.required ] ),
      dob: new FormControl( this.datepipe.transform(this.currentDate, 'yyyy-MM-dd'), Validators.required ),
      gender: new FormControl( '', [ Validators.required ] ),
      course: new FormControl( '', Validators.required ),
      address: new FormControl( '', [ Validators.required ] ),
    } );
    console.log(this.form) 
    
  }

  compareWith(existing: any, toCheckAgainst:any) {
    if (!toCheckAgainst) {
      return false;
    }
    return existing.id === toCheckAgainst.id;
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
    this.form.value.course_id =this.form.value.course.id 
    this.studentService.update( this.id, this.form.value ).subscribe( ( res: any ) =>
    {
      this.router.navigateByUrl( 'post/index' );
    } )
  }

    get firstSelectOptions() {
    return this.opts.map(({key}) => key);
  }


  // get secondSelectOptions() {
  //   return (this.opts.find(({key}) => key === this.firstSelectValue)).value
  // }

   

}