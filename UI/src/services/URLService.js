const baseURL = 'http://127.0.0.1:3000'

export const URLService = {
    uploadImageURL: baseURL + "/api/file/upload",
    uploadStudyImageURL: baseURL + "/api/file/uploadStudy",
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
}