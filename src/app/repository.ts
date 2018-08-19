export class Repository {
    constructor(
        public name: string,
        public html_url: string,
        public created_at: Date,
        public description: string
         ) {
             this.name = name;
             this.html_url = html_url;
             this.created_at = created_at;
             this.description = description;
         }
}
