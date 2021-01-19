import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { Profile } from '../profile-class/profile';
import { Repo } from '../repo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[GitSearchService],
})

export class ProfileComponent implements OnInit {
  profile:Profile;
  repos:Repo;
  username:string;
  userRepo: any;

  constructor(private gitsearchService:GitSearchService) { }

  findProfile() {
    this.gitsearchService.updateProfile(this.username);
    this.gitsearchService.profileRequest();
    this.profile=this.gitsearchService.profile;

    this.gitsearchService.repoRequest(this.username);
    this.userRepo = this.gitsearchService.newRepo;
  }
  
  ngOnInit() {
    this.gitsearchService.profileRequest();
    this.profile = this.gitsearchService.profile;
  }

}
