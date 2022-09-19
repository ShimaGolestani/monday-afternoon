import axios from "../../config/axios"

export const SET_SYMBOLS = "SET_SYMBOLS"
export const SET_DATA_CHART_AREA = "SET_DATA_CHART_AREA"
export const SET_DATA_CHART_CANDLE = "SET_DATA_CHART_CANDLE"
export const SET_FAVORITE_SYMBOL = "SET_FAVORITE_SYMBOL"
export const SET_LAST_DEALS = "SET_LAST_DEALS"
export const SET_SEARCH = "SET_SEARCH"
export const SET_DATA_SIDE = "SET_DATA_SIDE"
export const SET_COMMENTS = "SET_COMMENTS"
export const SET_SHOW_MODAL_ADD_COMMENTS = "SET_SHOW_MODAL_ADD_COMMENTS"
export const SET_CURRENT_SYMBOL_COMMENT = "SET_CURRENT_SYMBOL_COMMENT"
export const SET_SHOW_MODAL_COMMENTS = "SET_SHOW_MODAL_COMMENTS"
export const SET_SHOW_PROFILE = "SET_SHOW_PROFILE"
export const SET_SHOW_MESSAGE = "SET_SHOW_MESSAGE"
export const SET_SHOW_APPS = "SET_SHOW_APPS"
export const SET_SHOW_STATS = "SET_SHOW_STATS"


export function setShowApps(value) {
    return dispatch => {
        dispatch({
            type: SET_SHOW_APPS,
            payload: value
        })
    }
}

//symbol
export function getSymbol() {
    return async dispatch => {
        try {
            const response = await axios.get('/tse/stocks_info')
            dispatch({
                type: SET_SYMBOLS,
                payload: response.data
            })
        } catch (error) {
            
        }
    }
}


//area
export function getDataChartArea() {
    return async dispatch => {
        try {
            const response = await axios.get('/tse/overall_index_chart_data/32097828799138957')
            dispatch ({
                type: SET_DATA_CHART_AREA,
                payload: response.data
            })
        } catch (error) {

        }
    }
}


//candle
export function getDataChartCandle(){
    return async dispatch => {
        try {
            const response = await axios.get('/tse/stock_chart_data/48990026850202503')
           return response.data
        } catch (error) {
console.log(error)
        }
    }
}

//stock-limit
export function getLastDeals(){
    return async dispatch => {
        try {
            const response = await axios.get('/tse/stock_limits/48990026850202503')
            dispatch({
                type: SET_LAST_DEALS,
                payload: response.data
            })
        } catch (error) {
console.log(error)
        }
    }
}

//overall-index-side
export function getDataSide(){
    return async dispatch => {
        try {
            const response = await axios.get('/tse/overall_index')
            dispatch({
                type: SET_DATA_SIDE,
                payload: response.data
            })
        } catch (error) {
console.log(error)
        }
    }
}

//search
export function getSearch(){
    return async dispatch => {
        try {
            const response = await axios.get('/tse/search')
            dispatch({
                type: SET_SEARCH,
                payload: response.data
            })
        } catch (error) {
            
        }
    }
}


export function setShowStats(value) {
    return dispatch => {
        dispatch({
            type: SET_SHOW_STATS,
            payload: value
        })
    }
}

export function setShowProfile(value) {
    return dispatch => {
        dispatch({
            type: SET_SHOW_PROFILE,
            payload: value
        })
    }
}

export function setShowMessage(value) {
    return dispatch => {
        dispatch({
            type: SET_SHOW_MESSAGE,
            payload: value
        })
    }
}

export function setShowModalComments(value) {
    return dispatch => {
        dispatch({
            type: SET_SHOW_MODAL_COMMENTS,
            payload: value
        })
    }
}

export function setCurrentSymbolComment(value) {
    return dispatch => {
        dispatch({
            type: SET_CURRENT_SYMBOL_COMMENT,
            payload: value
        })
    }
}

export function setComments(value) {
    return dispatch => {
        dispatch({
            type: SET_COMMENTS,
            payload: value
        })
    }
}

export function setShowModalAddComments(value) {
    return dispatch => {
        dispatch({
            type: SET_SHOW_MODAL_ADD_COMMENTS,
            payload: value
        })
    }
}

export function setDataSide(value) {
    return dispatch => {
        dispatch({
            type: SET_DATA_SIDE,
            payload: value
        })
    }
}

export function setSearch(value) {
    return dispatch => {
        dispatch({
            type: SET_SEARCH,
            payload: value
        })
    }
}

export function setSymbols(value) {
    return async dispatch => {
        dispatch({
            type: SET_SYMBOLS,
            payload: value
        })
    }
}

export function setDataChartCandle(value) {
    return async dispatch => {
        dispatch({
            type: SET_DATA_CHART_CANDLE,
            payload: value
        })
    }
}

export function setDataChartArea(value) {
    return async dispatch => {
        dispatch({
            type: SET_DATA_CHART_AREA,
            payload: value
        })
    }
}

export function setFavoriteSymbol(value) {
    return async dispatch => {
        dispatch({
            type: SET_FAVORITE_SYMBOL,
            payload: value
        })
    }
}

export function setLastDeals(value) {
    return async dispatch => {
        dispatch({
            type: SET_LAST_DEALS,
            payload: value
        })
    }
}