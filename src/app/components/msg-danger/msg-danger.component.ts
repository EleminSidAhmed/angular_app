import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-msg-danger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './msg-danger.component.html',
  styleUrls: ['./msg-danger.component.css']
})
export class MsgDangerComponent {
  @Input("msg") msg: string = "";

}
