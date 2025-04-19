function toggleHanlder(settings){
       return function (isEnabled){
              console.log(`${settings} is ${isEnabled?"ON":"OFF"}`)
       }
}

const notifications=toggleHanlder("Notifications");
const darkMode=toggleHanlder("Dark mode");
const autosave=toggleHanlder("Auto save");

notifications(true);
darkMode(true);
autosave(false);

//if you do not use hof then you have make seprate function for every feature and to make changes 
// in every function if logic changes.