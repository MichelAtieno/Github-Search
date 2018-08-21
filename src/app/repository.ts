export class Repository {
    constructor(public name,
                public html_url,
                public description
                ) {
        this.name = name;
        this.html_url = html_url;
        this.description = description;
    }
}
