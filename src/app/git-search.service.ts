import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment'
import { Profile } from './profile-class/profile';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

   private username:string;
   profile:Profile;
   repo:Repo;

  constructor(private http:HttpClient) {
    this.profile = new Profile("","","","","",0,0,0,new Date());
    this.repo = new Repo("","","");
    this.username = '';
    }
    profileRequest(){
               interface ApiResponse{
                 avatar_url:string;
                  name:string;
                  url:string;
                  bio:string;
                  location:string;
                  public_repos:number;
                  followers:number;
                  following:number;
                  created_at:Date
               }

              let promise = new Promise<void>((resolve,reject)=>{
                this.http.get<ApiResponse>(environment.apiUrl+this.username+environment.apiKey).toPromise().then(response=>{
                  this.profile.avatar_url=response.avatar_url
                  this.profile.name=response.name
                  this.profile.url=response.url
                  this.profile.bio=response.bio
                  this.profile.location=response.location
                  this.profile.public_repos=response.public_repos
                  this.profile.followers=response.followers
                  this.profile.following=response.following
                  this.profile.created_at=response.created_at

                resolve()
                 },
                 error =>{
                   this.profile.name = "-Error - Unable to get user"
                   reject(error)
                 }
               )
             })
                 return promise
               }

      repoRequest(){
            interface ApiResponse{
                 name:string;
                  description:string;
                  html_url:string;

                 }

              let promise = new Promise<void>((resolve,reject)=>{
                this.http.get<ApiResponse>(environment.apiUrl+ this.username + environment.apiRepos).toPromise().then(response=>{
                  this.repo.name=response.name
                  this.repo.description=response.description
                  this.repo.html_url=response.html_url

                resolve()
                 },
                 error =>{
                   this.repo.name = "Error - Unable to get Repo"
                   reject(error)
                 }
               )
             })
                 return promise

             }
             updateProfile(username:string){
               this.username =username;
             }

        }
