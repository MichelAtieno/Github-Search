export class Repository {
    constructor(public name,
                public html_url,
                public created_at,
                public description
                ) {
        this.name = name;
        this.html_url = html_url;
        this.created_at = created_at;
        this.description = description;
    }
}
