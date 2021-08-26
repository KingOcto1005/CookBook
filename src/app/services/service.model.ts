export class Service {
    public type: string;
    public description: string;
    public imagePath: string;

    constructor(type: string, desc: string, imagePath: string) {
        this.type = type;
        this.description = desc;
        this.imagePath = imagePath;
    }
}

