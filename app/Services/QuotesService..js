import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js"
import { sandboxApi } from "./AxiosService.js"


class QuotesService {
    async setQuote() {
        let res = await sandboxApi.get('/quotes')
        ProxyState.quote = new Quote(res.data)

    }


    async getQuotes() {
        let res = await sandboxApi.get('/quotes')
        ProxyState.quotes = res.data.map(q => new Quote(q))
    }






    // ProxyState.quote = res.data.map(q => new Quote(q))

}













export const quotesService = new QuotesService()