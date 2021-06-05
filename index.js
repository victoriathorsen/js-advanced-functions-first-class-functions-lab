const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = (value) => {
    return function(fare) {
        return value * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (drivers, selection) {
    return selection(drivers)
}