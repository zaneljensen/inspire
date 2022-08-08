import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService..js";






function _drawQuote() {
    document.getElementById('quote').innerText = ProxyState.getQuote.QuoteTemplate

}



export class QuotesController {
    constructor() {
        ProxyState.on('quotes', _drawQuote)
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



