export class Background {
    constructor(data) {
        this.largeImgUrl = data.largeImgUrl

    }

    get backgroundImg() {
        return `url(${this.largeImgUrl})`
    }
}

