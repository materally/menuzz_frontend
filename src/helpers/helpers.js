function niceDeliveryInfo(time){
    let hour = parseInt(time.substring(0,2));
    let minutes = parseInt(time.substring(3,5));
    let text = '';
    if(hour > 0) text += hour + ' óra ';
    if(minutes > 0) text += minutes + ' perc';
    return text;
}

module.exports = {
    niceDeliveryInfo
}