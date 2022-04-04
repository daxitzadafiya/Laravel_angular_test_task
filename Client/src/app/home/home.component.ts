import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../_services/user.service';
import Player from '@vimeo/player';
import { IVideoConfig } from "ngx-video-list-player";

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
     config: IVideoConfig = {
        isVideoLoader: true,
        isAutoPlay: false,
        isFirstVideoAutoPlay: false,
        subtitleOffText: "",
        subtitleText: "",
        volumeCookieName: "NgxVideoListPlayerVolume",
        videoIndexCookieName: "NgxVideoListPlayerIndex",
        sources: [{
            src: "https://drive.google.com/uc?export=download&id=1xFTmNv2SUYdJDMVAaLuyglgvg1aFRkxc",
            videoName: "Panic! At The Disco - High Hopes",
            artist: "Panic! At The Disco",
            subtitles: [
                {
                    name: "English",
                    src: "./assets/subtitles/en.vtt",
                    default: false
                },
                {
                    name: "Deutsche",
                    src: "./assets/subtitles/de.vtt",
                    default: false
                }
            ]
        },
        {
            src: "o_1aF54DO60",
            isYoutubeVideo: true,
            videoName: "(Youtube) Young and Beautiful",
            artist: "Lana Del Rey"
        },
        {
            src: "https://drive.google.com/uc?export=download&id=1pef_q-vfGKA4Z5XnrxscC1L8KHAngth9",
            videoName: "Martin Garrix feat. Bonn - High On Life",
            artist: "Martin Garrix"
        },
        {
            src: "https://drive.google.com/uc?export=download&id=1xFTmNv2SUYdJDMVAaLuyglgvg1aFRkxc",
            videoName: "Panic! At The Disco - High Hopes",
            artist: "Panic! At The Disco",
            subtitles: [
                {
                    name: "English",
                    src: "./assets/subtitles/en.vtt",
                    default: false
                },
                {
                    name: "Deutsche",
                    src: "./assets/subtitles/de.vtt",
                    default: false
                }
            ]
        }]          
    };
  ngOnInit (): void
  {

   
  }
 
 


}
