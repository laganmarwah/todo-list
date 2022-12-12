//module.exports.getDate = getDate;  //we don't add the parenthesis here as they mean we have to run the func there
//and then and we dont want to run this function here as we want that to happen inside the app.js
//console.log(module);

exports.getDate = function(){
    const d = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return d.toLocaleDateString("en-US", options);
    //return day;
};
//IMPLEMENTATION OF VARIOUS FUNCTIONS 
module.exports.getDay = getDay;
function getDay(){
    const dt = new Date();
    let options = {
        weekday: "long"
    };
    return dt.toLocaleDateString("en-US", options);
    //return day
};

// console.log(module.exports);
