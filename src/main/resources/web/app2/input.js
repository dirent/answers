import Text from './text.js';

export default class Input extends Text {

    constructor(id, ...listeners) {
        super(id);
        this.listeners = listeners;
        this.register();
    }

    register() {
        this.listeners.forEach( l =>
            this.domElement.addEventListener("change", this.delegate(l)) );
    }

    delegate(listener) {
        return ( { target: { value } } ) => listener( 'lean '+value );
    }

    extract({ target: { value } }) {
        return 'extracted: ' + value;
    }
}