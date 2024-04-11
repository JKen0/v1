const isTokenExpired = (date) => {
    if (!date) return true;

    const currentDate = new Date();
    const timeDifference = currentDate - date;

    // Convert milliseconds to minutes
    const minutesDifference = timeDifference / (1000 * 60);

    return minutesDifference >= 50;
}

module.exports = {
    isTokenExpired
}
