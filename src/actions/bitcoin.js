import { FETCH_BITCOIN } from './constants';
import { dispatch } from 'rxjs/internal/observable/range';

export const fetchBitCoin = () => {
    return dispatch => {
        return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => response.json())
        .then(json => dispatch({ type: FETCH_BITCOIN, bitcoin: json }))
    }
} 