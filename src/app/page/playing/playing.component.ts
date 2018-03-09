import { Component, OnInit, AfterViewInit ,DoCheck} from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import Api from "../../app.api";
import { id2Url } from "../../utils/base64";
import { parse_lrc } from "../../utils/utils";
@Component({
  selector: "playing",
  styleUrls: ["playing.component.css"],
  templateUrl: "playing.component.html"
})
export class PlayIngComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  loaded: Boolean = false;
  cover: String = "";
  id: String;
  canplay: Array<Object> = [];
  playtime;
  playing:Boolean=false;
  playurl;
  music: any = { name: "", al: {}, album: {}, ar: [], artists: [] };
  star: Boolean = false;
  showlrc: Boolean = false;
  lrcObj: any={code:0,nolyric:false,scroll:false,lrc:[],uncollected:false};
  commentscount: any;
  audio:HTMLElement;
  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      let img = queryParams.img;
      img && (this.cover = id2Url(img));
      this.audio=document.getElementById("music")
    });
    this.route.params.subscribe(params => {
      this.GetMusicDetailById(params.id);
    });
  }
  ngDoCheck(){
    if(this.showlrc&&this.lrcObj.code!=200){
      //this.loadlrc()
    }
  }
  GetMusicDetailById(id: String) {
    this.id = id;
    Api.music_detail(id).then(res => {
      this.music = res.data.songs[0];
      this.getcommit();
      this.getplayurl()
    });
  }
  getcommit() {
    Api.comments(this.music.id, 0, 2).then(res => {
      this.commentscount = res.data.total;
    });
  }
  getplayurl(){
    Api.music_url(this.music.id).then(res => {
      this.playurl = res.data.data[0].url;
    });
  }
  loadlrc() {
    Api.lyric(this.id).then(res => {
      if(res.data.code!=200){
        return;
      }
      let lrc = parse_lrc(
        res.data.lrc && res.data.lrc.lyric ? res.data.lrc.lyric : ""
      );
      let tlrc = parse_lrc(
        res.data.tlyric && res.data.tlyric.lyric ? res.data.tlyric.lyric : ""
      );
      let tlrcs = tlrc.now_lrc;
      if (tlrcs.length) {
        lrc.now_lrc.map((v, i) => {
          tlrcs.forEach(k => {
            if (k.lrc_sec == v.lrc_sec) {
              v.tlrc = k.lrc == v.lrc ? "" : k.lrc;
            }
          });
          return v;
        });
      }
      res.data.lrc = lrc.now_lrc;
      res.data.scroll = lrc.scroll ? 1 : 0;
      this.lrcObj=res.data;
    });
  }
  heart() {}
  playingtime(v){
    let time=this.audio.currentTime
    time=Math.round(time * 1000)
    this.playtime=time
  }
  Esetplaying(v){
    this.playing=v;
    if(v){
      this.audio.play()
    }else{
      this.audio.pause()
    }
  }
  EseekMusic(v){
    console.log("parent:from child",v)
  }
  next_music(){
    this.Esetplaying(false);
  }
  
  setplaying(){
    this.audio.play()
    this.playing=true
  }
}
