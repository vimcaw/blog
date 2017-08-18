function $ (selector) {
    return document.querySelector(selector);
}

function $$ (selector) {
    return document.querySelectorAll(selector);
}

HTMLCollection.prototype.forEach = function (callback) {
    for (var i = 0, item; item = this[i++];) {
        if (callback(item) === false) break;
    }
};

Element.prototype.getPosTop = function () {
    var totalTop = this.offsetTop;
    var current = this.offsetParent;
    while (current !== null) {
        totalTop += current.offsetTop;
        current = current.offsetParent;
    }
    return totalTop;
};

Element.prototype.getPosLeft = function () {
    var totalLeft = this.offsetLeft;
    var current = this.offsetParent;
    while (current !== null) {
        totalLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return totalLeft;
};

/**
 * 给某个元素添加类名
 * @param className {string} 要添加的类名
 */
Element.prototype.addClass= function (className) {
    if (this.className === '') {
        this.className = className;
    } else {
        this.className += ' ' + className;
    }
};

/**
 * 移除元素的某个类名
 * @param className {string} 要移除的类名
 * @returns {boolean} 如果找不到该类名则返回 false，成功移除返回 true
 */
Element.prototype.removeClass = function (className) {
    var regExpMatch = new RegExp('^' + className + '$|^'
        + className + ' +| +'
        + className + '$| +'
        + className + ' +');

    if (this.className.match(regExpMatch)) {        //找到符合的类名
        this.className = this.className.replace(regExpMatch, '');
        return true;
    } else {        //找不到该类名
        return false;
    }
};