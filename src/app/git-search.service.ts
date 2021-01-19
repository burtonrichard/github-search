import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment'
import { Profile } from './profile-class/profile';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

  public username:string;
  public clientid = '7272c9b3e4b347c8b42b';
  public clientsecret = '3cd16de076f27a450d12cae30a85bc5bd6b7331d';
  profile:Profile;
  repo:Repo;
  newRepo:any;
  newUser:any;

  constructor(private http:HttpClient) {
    this.profile = new Profile('','','','','',0,0,0,new Date);
    this.repo = new Repo('','','');
    this.username = 'google';
  }

  profileRequest(){
    interface ApiResponse{
      avatar_url:string;
      name:string;
      html_url:string;
      bio:string;
      location:string;
      public_repos:number;
      followers:number;
      following:number;
      created_at:Date
    }

    const promise = new Promise(((resolve,reject)=>{
      // this.http.get<ApiResponse>(environment.apiUrl+this.username+environment.apiKey).toPromise().then(response=>{
      this.http.get<ApiResponse>('https://api.github.com/users/' + this.username + "?clientid=" + this.clientid + "&clientsecret" + this.clientsecret).toPromise().then(response => {
      
      this.profile.avatar_url=response.avatar_url;
      this.profile.name=response.name;
      this.profile.html_url=response.html_url;
      this.profile.bio=response.bio;
      this.profile.location=response.location;
      this.profile.public_repos=response.public_repos;
      this.profile.followers=response.followers;
      this.profile.following=response.following;
      this.profile.created_at=response.created_at;
      console.log(this.profile);

    },
        error =>{
          this.profile.name = "Error - Unable to get user";
          reject(error);
        });
    }));

    return promise
  }

  repoRequest(username){
    interface ApiResponse{
      name:string;
      description:string;
      html_url:string;
    }

    const promise = new Promise(((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/' + this.username + '/repos?access_token=' + environment.apiUrl).toPromise().then(response_repo => {
        this.newRepo = response_repo;

        resolve;
      },
      error =>{
        this.repo.name = "Error - Unable to get Repo";
        reject(error);
      });
    }));

    return promise
  }

  updateProfile(username:string){
    this.username =username;
  }

}
