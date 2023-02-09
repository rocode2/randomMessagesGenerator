const messages = [1, 2, 3];
const debut = ['hey', 'yo', 'Hi'];
const adjectives = ['like', 'hate', 'dislike'];
const randomNumber = Math.floor(Math.random)*messages.length;

function printRandomMessages() {
    return console.log(messages + debut[randomNumber] + ' you, I ' + adjectives[randomNumber] + ' you !')

}