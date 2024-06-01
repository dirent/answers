import * as Vue from 'vue';

const test = {
    data() {
        return {
            hallowelt: "Hallo Welt!"
        }
    }
};

Vue.createApp(test).mount('main')