import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  private altAvatar = 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png';

  @Input('follower') follower;

}
