export default class Text {
    constructor(id) {
        this.domElement = Text.lookup(id);
    }

    static lookup(id) {
        return document.querySelector(`#${id}`);
    }

    content(text='not set') {
        this.domElement.innerText = text;
    }
}

