const baseURL = 'http://127.0.0.1:3000'

export const URLService = {
    uploadImageURL: baseURL + "/api/file/upload",
    getChildsURL: baseURL + '/api/child/get/',
    getDashboardURL: baseURL + '/api/dashboard/get/',
    getNextCheckURL: baseURL + '/api/check/getNext/',
    getCheckHistoryURL: baseURL + '/api/check/getHistory/',
    setCheckResult: baseURL + '/api/check/result',
    setNewCheck: baseURL + '/api/check/new',
}