function constructionCrew(worker) {
    let result = {};
    Object.assign(result, worker);

    if (result['dizziness'] == true) {
        let newlevelOfHydrated = (result['weight'] * 0.1) * result['experience'];
        result.levelOfHydrated = newlevelOfHydrated;
        result.dizziness = false;
    }
    if (worker['levelOfHydrated'] == 200){
        result.levelOfHydrated = 440;
    }

    return result;
}