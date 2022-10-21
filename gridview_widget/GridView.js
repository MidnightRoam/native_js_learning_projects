class GridView {
    /**
     * peoperties
     * @param [array] _tableClass - css classes of styles
     * @param [array] data - input data
     * @param [array] _attribute - control output content from date input
     * @param [array] _element - where to put the table
     * @param [array] _header - table header
     * @param [array] _headerClass - header css classes
     */

    constructor() {
        this._header= '';
        this._headerClass = [];
        this._tableClass = [];
        this._element = 'body';
        this._attribute = [];
    }

    /**
     * Method set header
     */

    set header(header) {
        if (typeof header === 'string' && header.trim() != '') {
            this._header = header.trim();
            return true;
        }
        return false;
    }

    /**
     * Method set header
     */

    set headerClass(headerClass) {
        if (typeof headerClass === 'object') {
            this._headerClass = headerClass;
            return true;
        }
        return false;
    }

    /**
     * Method set header
     */

    set element(element) {
        if (document.querySelector(element)) {
            this._element = document.querySelector(element);
            return true;
        }
        return false;
    }

    /**
     * Method for show GridViewTable
     */

    render() {

    }
}
