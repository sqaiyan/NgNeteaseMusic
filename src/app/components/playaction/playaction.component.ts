import {
  Component,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter
} from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "playaction",
  styleUrls: ["./playaction.component.css"],
  templateUrl: "./playaction.component.html",
  encapsulation: ViewEncapsulation.None
})
export class PlayActionComponent {
  constructor(private router: Router) {}
  @Input() commentscount: Number = 0;
  @Input() playtime;
  @Input() shuffle_am: any = 1;
  @Input() shuffle_dj: any = 1;
  @Input() playtype: any = 1;
  @Input() playing: Boolean;
  @Input() music: any;
  @Input() star: any;
  @Output() Esetplaying = new EventEmitter<boolean>();
  @Output() EseekMusic=new EventEmitter<Number>()
  seekmusic(v) {
    console.log(v)
    this.EseekMusic.emit(v)
  }
  nextfm() {}
  heart() {}
  setplaying() {
    this.Esetplaying.emit(!this.playing);
  }
  del_fm() {}
  psaction() {}
  next() {}
  prev() {}
  shuffle() {}
}
