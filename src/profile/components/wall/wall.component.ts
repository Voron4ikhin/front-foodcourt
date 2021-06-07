import { Component, OnInit } from '@angular/core';
import {WallService} from '../../services/wall.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  postList: Array<any>;
  aSub: Subscription;
  constructor(private wallService: WallService) { }

  ngOnInit(): void {
    this.getPostList();
  }

  getPostList(): void {
    this.aSub = this.wallService.get_list(36 ).subscribe(
      res => this.postList = res,
      error => console.log(error)
    )
  }

}
