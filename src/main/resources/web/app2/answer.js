export default class Answer {

    get answer() {
        return new Promise(function (resolve, reject) {
            resolve(new Answer().fetchFromServer());
        });
    }

    async fetchFromServer() {
        const answersUrl = new URL('/answers', window.location.href);
        return await fetch(answersUrl.href).then(response => response.json());
    }
}