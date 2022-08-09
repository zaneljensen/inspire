export class Quote {
    constructor({ content, author }) {
        this.content = content
        this.author = author
    }

    get QuoteTemplate() {
        return `
        <h5 class="text-center text-light pb-5">${this.content}</h5>
        <p class="text-center ">${this.author}</p>
       
        `
    }
    get AuthorTemplate() {
        return `
        
        `
    }




}