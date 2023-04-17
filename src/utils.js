export const bDataReq = (callback) => {
    console.log("Invoking BData API")
    const url = "https://si699-deployment.herokuapp.com/get_business_data"
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log("Returning data", data)
            return callback(data);
        }, (err) => {
            console.error(err);
        });
}

export const bTractDataReq = (callback, setGranularView, tractNum) => {
    const url = "https://si699-deployment.herokuapp.com/get_business_data/"+tractNum
    console.log("Invoking tract API", url)
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log("Returning data", data)
            if(data.length > 0) {
                setGranularView(true)
            } else {
                console.log("No data for tract "+tractNum)
            }
            return callback(data);
        }, (err) => {
            console.error(err);
        });
}

export const tractDataReq = (callback) => {
    console.log("Invoking tract API")
    const url = "https://si699-deployment.herokuapp.com/get_tract_data"
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log("Returning data", data)
            return callback(data);
        }, (err) => {
            console.error(err);
        });
}