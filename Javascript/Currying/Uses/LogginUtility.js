function createLogger(level) {
    return function (message) {
      console.log(`[${level}] ${message}`);
    };
  }
  
  const infoLog = createLogger("INFO");
  const errorLog = createLogger("ERROR");
  
  infoLog("User logged in");       
  errorLog("Server crashed!");    


//One real-life use case of currying I worked with or understood is in building reusable logging utilities. 
// Instead of passing the log level every time I log a message,
//  I use currying to create a specialized logger.
  