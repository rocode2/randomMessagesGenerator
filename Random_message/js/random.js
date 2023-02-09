const messages = [1, 2, 3];
const debut = ['Hey', 'Yo !', 'Hi'];
const adjectives = ['like', 'hate', 'dislike'];
const randomNumber = Math.floor(Math.random()*messages.length);


function printRandomMessages(choice, choice2) {
    if (choice && choice2){
        console.log(messages + ' ' + debut[choice] + ' you, I ' + adjectives[choice2] + ' you !')
    } else {console.log(messages + ' ' + debut[randomNumber] + ' you, I ' + adjectives[randomNumber] + ' you !')}
   
}

printRandomMessages(1, 2)
printRandomMessages()