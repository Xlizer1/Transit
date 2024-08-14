import $ from "jquery";

export default class MakeRequest {
    constructor(url, options = {}) {
        this._url = url;
        this._method = options.method || 'GET';
        this._headers = options.headers || {};
        this._data = options.data || null;
    }

    sendRequest() {
        return $.ajax({
            url: this._url,
            type: this._method,
            headers: this._headers,
            data: this._data,
            processData: this._isFormData() ? false : true,
            contentType: this._isFormData() ? false : 'application/json',
            dataType: this._isFormData() ? false : "jsonp",
            success: (response) => {
                console.log('Request successful:', response);
            },
            error: (error) => {
                console.error('Request failed:', error);
            }
        });
    }

    _isFormData() {
        return this._data instanceof FormData;
    }
}
