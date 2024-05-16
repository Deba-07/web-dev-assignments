function calculateRemainingDate(eventDate){
    const currentDate = new Date();
    const eventTime = new Date(eventDate);
    const timeDifference = eventTime - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysRemaining;
}
const eventDate = '2023-08-31'
console.log(calculateRemainingDate(eventDate));