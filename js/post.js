$$('article img').forEach(function (element) {
    element.onclick = function () {
        if (this.className === 'original') {
            this.className = '';
            this.style.maxWidth = '100%';
            return;
        }
        if (this.naturalWidth < this.naturalHeight) {
        	this.style.maxWidth = '60vw';
        	this.style.maxHeight = this.naturalHeight + 'px';
        } else {
        	this.style.maxHeight = '100vh';
        	this.style.maxWidth = this.naturalWidth + 'px';
        }
    }
})