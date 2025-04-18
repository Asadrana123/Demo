function createLogger(level) {
    return function (message) {
      console.log(`[${level.toUpperCase()}] ${message}`);
    };
  }
  
  const infoLogger = createLogger("info");
  const warningLogger = createLogger("warning");
  const errorLogger = createLogger("error");
  
  infoLogger("Everything is running smoothly!"); // [INFO] Everything is running smoothly!
  warningLogger("This is a warning!");          // [WARNING] This is a warning!
  errorLogger("An error occurred!");            // [ERROR] An error occurred!
  