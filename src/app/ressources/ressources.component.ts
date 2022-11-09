import { Component, OnInit } from '@angular/core';
import { RessourcesData } from '../data/ressources_data';
import { Ressources } from '../models/ressources_model';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css']
})
export class RessourcesComponent implements OnInit {

  listRessources: Ressources[] = RessourcesData;
  constructor() { }

  ngOnInit(): void {

  }

}
