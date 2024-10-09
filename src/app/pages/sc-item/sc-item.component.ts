import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sc-item',
  standalone: true,
  imports: [],
  templateUrl: './sc-item.component.html',
  styleUrl: './sc-item.component.scss'
})
export class ScItemComponent implements OnInit {
  public saveName: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.saveName = this.route.snapshot.paramMap.get('saveName') || '';
  }
}
