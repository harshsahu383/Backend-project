import {Apiresponse} from "../utils/api-response.js";
const healthCheck  = (req , res) => {
    try {
        console.log("healthcheck called");
        
        res.status(200).json(
            new Apiresponse(
                200,
                {message : "Server is running"}
            )
        )
    } catch (error) {
        
    }
}
export { healthCheck } ;