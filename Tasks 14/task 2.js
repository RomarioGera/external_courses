function Hangman(word) {
    let errorsLeft,
        wrongSymbols,
        guessedString,
        initWord,
        isFinish;

    this.getGuessedString = () => guessedString;

    this.getErrorsLeft = () => errorsLeft;

    this.getWrongSymbols = () => wrongSymbols;

    this.getStatus = () => {
        if (isFinish.status)
            return `The game is over. Result: ${isFinish.msg}`;
        else
            return `${guessedString} | errors left ${errorsLeft}`;
    }

    this.startAgain = (str = word) => {
        errorsLeft = 6;
        wrongSymbols = [];
        guessedString = '_'.repeat(str.length),
            isFinish = {
                status: false,
                msg: ''
            };      
        initWord = str.toLowerCase();
        return this;
    }

    this.guess = (playerInput) => {
        let isSuccess = false;

        if (isFinish.status) {
            console.log('The game is over. Result: ' + isFinish.msg);
            return this;
        }

        initWord.split('').forEach(function (item, index) {
            if (item == playerInput) {
                guessedString = guessedString.slice(0, index) + playerInput + guessedString.slice(indx + 1);
                isSuccess = true;
            }
        })

        if (guessedString.indexOf('_') == '-1') {
            isFinish.status = true;
            isFinish.msg = guessedString + ' | You won!';
            console.log(this.getStatus());
        } else if (!isSuccess) {
            wrongSymbols.push(playerInput);
            errorsLeft--;

            if (errorsLeft <= 0) {
                isFinish.status = true;
                isFinish.msg = `Errors left ${errorsLeft}. THIS IS THE END!`;
                console.log(this.getStatus());
            } else
                console.log(`wrong letter, errors left ${errorsLeft} | ${wrongSymbols}`);

        } else
            console.log(guessedString);
        return this;
    }

    this.startAgain();
}


var hangman = new Hangman('webpurple');
hangman.getGuessedString();
hangman.getErrorsLeft();
hangman.getWrongSymbols();
hangman.getStatus();

hangman.guess('w');
hangman.guess('e');
hangman.guess('a');
hangman.guess('p');
hangman.guess('k');

hangman.getGuessedString();
hangman.getErrorsLeft();
hangman.getWrongSymbols();
hangman.getStatus();

hangman.guess('b')
    .guess('l')
    .guess('u')
    .guess('r') // won
    .guess('2');

hangman.startAgain('webpurple')
    .guess('w')
    .guess('s')
    .guess('r')
    .guess('q')
    .guess('m')
    .guess('v')
    .guess('x')
    .guess('y') // fail
    .getStatus();
