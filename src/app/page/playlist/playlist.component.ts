import {
  Component,
  OnInit,
  AfterViewInit,
} from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import "rxjs/add/operator/switchMap";
import Api from "../../app.api";
import { LoadingComponent } from "../../components/loading/loading.component";
import { PlayIconComponent } from "../../components/playicon/playicon.component";
import { id2Url } from "../../utils/base64";
@Component({
  selector: "playlist",
  styleUrls: ["./playlist.component.css"],
  templateUrl: "./playlist.component.html"
})
export class PlayListComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  loaded: Boolean = false;
  title="歌单";
  cover: String = "";
  id: String;
  canplay: Array<Object> = [];
  music: any = {};
  list: any = { playlist: { creator: {} } };
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params)
      this.GetPlayListById(params.id);
    });
  }
  GetPlayListById(id: String){
    this.id=id;
    Api.playlist(id, 0).then(res => {
      this.loaded = true;
      if(res.data.code!=200){
        alert(res.data.msg);
        return;
      }
      let canplay = res.data.playlist.tracks.map(item => {
        if (item.st >= 0) return item;
      });
      this.canplay = this.canplay.concat(canplay);
      this.cover =
        this.cover ||
        id2Url(
          res.data.playlist.coverImgId_str || res.data.playlist.coverImgId
        );
      this.list = res.data;
    });
  };
  playall(){
    
  }
}
