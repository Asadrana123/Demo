 function createAPIRequest(baseUrl,headers){
         return function(){
                return async function endPoint(endpoint){
                      const result =await fetch(`${baseUrl}+${endpoint}`,headers);
                      return result.data
                }
         }
}

const createRequest=createAPIRequest("baseurl",{Bearer:"bearer"});

console.log(createRequest("/getuser"))

