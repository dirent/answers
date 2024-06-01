export default class Clock {

    constructor(listener) {
        this.listener = listener;
        let clockUrl = new URL('/clock', window.location.href);
        clockUrl.protocol = clockUrl.protocol.replace('http', 'ws');
        this.socket = new WebSocket(clockUrl.href);
        this.socket.onopen = e => console.log(e);
        this.socket.onmessage = ( { data : time } ) => this.listener(time);
    }
}