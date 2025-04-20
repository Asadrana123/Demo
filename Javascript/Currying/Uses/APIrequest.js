 function createAPIRequest(baseUrl){
         return function(headers){
                return async function endPoint(endpoint){
                      const result =await fetch(`${baseUrl}+${endpoint}`,headers);
                      return result.data
                }
         }
}

const createRequest=createAPIRequest("baseurl")({Bearer:"bearer"});

console.log(createRequest("/getuser"))

