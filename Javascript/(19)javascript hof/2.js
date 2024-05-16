function generateRandomNumbers(){
    return Math.floor(Math.random() * 100);
}

function generateRandomNumbersWithDelay(delayInSeconds){
    console.log(`Generating random numbers after delay of ${delayInSeconds} seconds...`);
    let countdown = 3;
    const countdownInterval = setInterval(() => {
        console.log(`${countdown} seconds remaining...`);
        countdown--;

        if(countdown === 0){
            clearInterval(countdownInterval);
            const randomNumber = generateRandomNumbers();
            console.log(`Random number generated: ${randomNumber}`);
        }
    }, 1000);
}
generateRandomNumbersWithDelay(3);