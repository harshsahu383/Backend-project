class Apiresponse{
    constructor(statusCode, data, Message = "Success" ){
        this.statusCode = statusCode,
        this.data = data,
        this.Message = Messsage
        this.success = statusCode < 400
    }

}
export {Apiresponse} ;
