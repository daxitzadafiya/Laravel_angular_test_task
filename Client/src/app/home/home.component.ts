import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../_services/user.service';
import Player from '@vimeo/player';

declare const window: any;
@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
} )
export class HomeComponent implements OnInit
{
  name = 'Video events';
  videoSource = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";
  @ViewChild( 'videoPlayer', { static: false } ) videoplayer?: ElementRef;
  isPlay: boolean = false;
  public startedPlay: boolean = false;
  public show: boolean = false;
  content?: string;
  private language = 'en';
  private player: any;
  constructor ( private userService: UserService ) { }

  ngOnInit (): void
  {

    this.playPause();
    this.initPlayer();
    this.userService.getPublicContent().subscribe( {
      next: data =>
      {
        this.content = data;
      },
      error: err =>
      {
        this.content = JSON.parse( err.error ).message;
      }
    } );
  }
  private initPlayer ()
  {

    this.player = new Player( 'intro_explanimation', {} );
    this.player.enableTextTrack( this.language, 'subtitles' ).then( ( track: any ) =>
    {
      console.log( track );
    } ).catch( ( error: any ) =>
    {
      console.log( error );
      switch ( error.name )
      {
        case 'InvalidTrackLanguageError':
          // no track was available with the specified language
          break;
        case 'InvalidTrackError':
          // no track was available with the specified language and kind
          break;
        default:
          // some other error occurred
          break;
      }
    } );

  }
  pauseVideo ( videoplayer: any )
  {
    videoplayer.nativeElement.play();
  
    setTimeout( () => 
    {
      videoplayer.nativeElement.pause();
      if ( videoplayer.nativeElement.paused )
      {
        this.show = !this.show;
      }
    }, 5000 );
    // }
  }

  closebutton ( videoplayer: any )
  {
    this.show = !this.show;
    videoplayer.nativeElement.play();
  }

  toggleVideo ( event: any )
  {
    this.videoplayer?.nativeElement.play();
  }


  makeBig ()
  {
    var myVideo: any = document.getElementById( 'my_video_1' );
    myVideo.width = 560;
  }

  makeSmall ()
  {
    var myVideo: any = document.getElementById( 'my_video_1' );
    myVideo.width = 320;
  }

  makeNormal ()
  {
    var myVideo: any = document.getElementById( 'my_video_1' );
    myVideo.width = 420;
  }

  skip ( value: any )
  {
    let video: any = document.getElementById( 'my_video_1' );
    video.currentTime += value;
  }

  restart ()
  {
    let video: any = document.getElementById( 'my_video_1' );
    video.currentTime = 0;
  }
  playPause ()
  {
    var myVideo: any = document.getElementById( 'my_video_1' );
    if ( myVideo.paused ) myVideo.play();
    else myVideo.pause();
  }


}
