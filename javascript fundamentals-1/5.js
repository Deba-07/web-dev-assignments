let typeofShipping = "standard";
switch(typeofShipping){
    case 'standard':
        console.log("might take 3-5 days");
        break;
    case 'express':
        console.log("might take 1-2 days");
        break;
    case 'overnight':
        console.log("will be delivered the next day");
        break;
    default:
        console.log("type of shipping is invalid");
        break;
}