import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyCourse } from '../my-course';
import { MyCourseService } from '../my-course.service';

@Component( {
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: [ './view.component.css' ]
} )
export class ViewComponent implements OnInit
{

  id!: number;
  post!: MyCourse;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor (
    public postService: MyCourseService,
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

    this.postService.find( this.id ).subscribe( ( data: MyCourse ) =>
    {
      this.post = data;
    } );
  }


}
