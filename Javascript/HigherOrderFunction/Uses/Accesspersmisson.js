function checkPersmisson(...roles){
       return function(role){
              if(roles.includes(role)){
                 console.log("Access successful")
              }
              else{
                 console.log("Access Denied");
              }
       }
}
const result1=checkPersmisson('admin');
result1('user');
const result2=checkPersmisson('admin','user');
result2('user');
