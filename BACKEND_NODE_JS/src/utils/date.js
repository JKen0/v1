const isTokenExpired = (date) => {
    if (!date) return true;

    const currentDate = new Date();
    const refreshDate = Date(date);
    const timeDifference = currentDate - refreshDate;

    // Convert milliseconds to minutes
    const minutesDifference = timeDifference / (1000 * 60);

    return minutesDifference >= 50;
}

module.exports = {
    isTokenExpired
}
