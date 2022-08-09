import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService..js";






function _drawQuote() {
    // @ts-ignore
    document.getElementById('quote').innerHTML = ProxyState.quote.QuoteTemplate
    document.getElementById('show').innerHTML = ProxyState.quote.AuthorTemplate

}



export class QuotesController {
    constructor() {
        ProxyState.on('quote', _drawQuote)
        ProxyState.on('show', _drawQuote)
        this.getQuote()

    }

    async getQuote() {
        try {
            await quotesService.getQuote()
        } catch (error) {
            console.error('[getQuote]', error);

        }
    }

}



