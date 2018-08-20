export class Repository {
    public name: string;
    public html_url: string;
    public created_at: Date;
    public description: string;
    constructor(name,
                html_url,
                created_at,
                description
                ) {
        this.name = name;
        this.html_url = html_url;
        this.created_at = created_at;
        this.description = description;
    }
}
