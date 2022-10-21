class GridView {
    /**
     * peoperties
     * @param [array] _tableClass - css classes of styles
     * @param [array] data - input data
     * @param [array] attribute - control output content from date input
     * @param [array] _element - where to put the table
     * @param [array] _header - table header
     * @param [array] _headerClass - header css classes
     */

    constructor() {
        this._header= '';
        this._headerClass = [];
        this._tableClass = [];
        this._element = 'body';
        this.attribute = [];
    }

    /**
     * Method set header
     */

    setHeader(header) {
        if (typeof header === 'string' && header.trim() != '') {
            this._header = header.trim();
            return true;
        }
        return false;
    }

    /**
     * Method set headerClass
     */

    setHeaderClass(headerClass) {
        if (typeof headerClass === 'object') {
            this._headerClass = headerClass;
            return true;
        }
        return false;
    }

    /**
     * Method set element
     */

    setElement(element) {
        if (document.querySelector(element)) {
            this._element = element;
            return true;
        }
        return false;
    }

    /**
     * Method for show GridViewTable
     */

    render(data) {
        this.setElement(data.element);
        this.setHeaderClass(data.headerClass);
        this.attribute=data.attribute;
        this.setHeader(data.header);
        this.data = data.data;
        // show header
        if (this._header != '') {
            const header = document.createElement('h1');
            header.textContent = this._header;
            this._headerClass.forEach(cssClass => {
                header.classList.add(cssClass);
            });
            document.querySelector(this._element).append(header);
        }
        // show table
        const table = document.createElement('table');
        this._tableClass.forEach(cssClass => {
            table.classList.add(cssClass);
        });
        // create table header
        let trHeader = document.createElement('tr');
        for (let key in this.attribute) {
            let th = document.createElement('th');
            if (this.attribute[key].label) {
                th.textContent = this.attribute[key].label;
            } else {
                th.textContent = key;
            }
            trHeader.append(th);
        }
        table.append(trHeader);
        // draw table
        for (let i = 0; i < this.data.length; i++) {
            let dataArr = this.data[i]; // 1 date string
            let tr = document.createElement('tr');
            for (let key in this.attribute) {
                let td = document.createElement('td');
                let value = dataArr[key];
                // Is there a function in value
                if (this.attribute[key].value) {
                    value = this.attribute[key].value(dataArr);
                }
                // attribute src
                if (this.attribute[key].src) {
                    td.innerHTML = value;
                } else {
                    td.textContent = value;
                }
                tr.append(td);
            }
            table.append(tr);
        }

        document.querySelector(this._element).append(table);
    }
}
