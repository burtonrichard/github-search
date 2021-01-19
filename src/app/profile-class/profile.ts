export class Profile {
  constructor(public avatar_url:string,public name:string, public html_url:string,public bio:string,public location:string,public public_repos:number,
  public followers:number, public following:number,public created_at: Date){}
}
