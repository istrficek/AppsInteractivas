const baseURL = 'http://127.0.0.1:3000'

export const URLService = {
    uploadImageURL: baseURL + "/api/file/upload",
    getChildsURL: baseURL + '/api/child/get/',
    getDashboardURL: baseURL + '/api/dashboard/get/',
    getNextCheckURL: baseURL + '/api/check/getNext/',
    getCheckHistoryURL: baseURL + '/api/check/getHistory/',
    setCheckResult: baseURL + '/api/check/result',
    setNewCheck: baseURL + '/api/check/new',
    setNewChildURL: baseURL + '/api/child/new',
    getUserByIdURL: baseURL + '/api/users/get/',
    getNextStudyURL: baseURL + '/api/study/getNext/',
    getStudyHistoryURL: baseURL + '/api/study/getHistory/',
    setNewStudy: baseURL + '/api/study/new',
    setStudyResult: baseURL + '/api/study/result',
    updateUserPictureURL: baseURL + '/api/users/updatePicture',
    getNextVaccineURL: baseURL + '/api/vaccine/getNext/',
    getVaccineHistoryURL: baseURL + '/api/vaccine/getHistory/',
    setNewVaccine: baseURL + '/api/vaccine/new',
    setVaccineResult: baseURL + '/api/vaccine/result/',
    getVaccineRecommendationsURL: baseURL + '/api/vaccine/recommendations/',
    getPercentilesURL: baseURL + '/api/percentile/get/',
    getUserByDNIURL: baseURL + '/api/users/getByDNI/',
    registerURL: baseURL + '/api/users/register',
    loginURL: baseURL + '/api/users/login',
    getBloodTypeURL: baseURL + '/api/blood-type/get',
    getVaccinesURL: baseURL + '/api/vaccine/vaccineList/'
}