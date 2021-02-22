function townsJSON(townsArray) {
    let townsAll = [];
    for (let i = 1; i <= townsArray.length - 1; i++) {
        let towns = {};
        let [town, latitude, longitude] = townsArray[i].split(' | ');
        towns.Town = town.slice(2);
        towns.Latitude =Number( Number(latitude).toFixed(2));
        towns.Longitude =Number( Number(longitude.slice(0, longitude.length - 2)).toFixed(2));
        townsAll.push(towns);
    }
    return JSON.stringify(townsAll);
}