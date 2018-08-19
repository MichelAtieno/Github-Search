export class User {

    constructor (public name: string,
                 public login: string,
                 public avatar_url: string,
                 public html_url: string,
                 public public_repos: number,
                 public hireable: boolean,
                 public created_at: Date,
                 public followers: number,
                 public following: number
                ) {
                    this.name = name;
                    this.login = login;
                    this.avatar_url = avatar_url;
                    this.html_url = html_url;
                    this.public_repos = public_repos;
                    this.hireable = hireable;
                    this.created_at = created_at;
                    this.followers = followers;
                    this.following = following;
                }
}
