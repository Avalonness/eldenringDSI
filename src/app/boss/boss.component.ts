import { Component, OnInit } from '@angular/core';
import { Boss } from '../models/boss_model';
import { BossService } from '../services/boss.service';

@Component({
  selector: 'app-boss',
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.css']
})
export class BossComponent implements OnInit {
  bossList!: Boss[];

  constructor(
    private bossService: BossService
  ) { }

  ngOnInit(): void {
    this.bossService.getBossList()
    .subscribe( boss => {
      this.bossList = boss.data;
      console.table(this.bossList)
    })

  }

}
