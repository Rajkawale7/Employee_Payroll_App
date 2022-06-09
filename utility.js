const stringifyDate = (date) => {
    const options = {day: 'numeric', month: 'short', year: 'numeric'};
    const newDate = !date? "undefined": 
                    new Date(Date.parse(date)).toLocaleString('en-GB', options);
    return newDate;
}

