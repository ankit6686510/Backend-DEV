class ApiResponse {
    constructor (statusCode, data,message = "success"){
        this.statusCode =  statusCode
        this.data = data
        this.message = message
        thhis.success = statusCode < 400
    }
}