import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { Profile } from '../profile-class/profile';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers:[GitSearchService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:Profile;
  username:string;

  constructor(private GitSearchService:GitSearchService) { }

  findProfile() {
    this.GitSearchService.updateProfile(this.username);
    this.GitSearchService.profileRequest()
    this.profile=this.GitSearchService.profile
  }
  
  ngOnInit() {}

}
