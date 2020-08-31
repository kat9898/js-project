
/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    if (Math.trunc((minutes+interval)/60)>0) {
        hours = hours + Math.trunc((minutes+interval)/60);  
        if (hours>23) {
            hours = hours % 24;
        }
    }
    minutes= (minutes+interval) % 60;
    if (hours<10) {
        hours = '0'+ hours;
    }
    if (minutes<10) {
        minutes = '0'+ minutes;
    }
    return(hours +':'+ minutes);
};
dfhfdrth