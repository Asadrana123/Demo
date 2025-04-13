const obj = {
    name: "CodeMaster",
    regularFunc: function () {
      console.log("regularFunc →", this.name);
  
      const arrowFunc = () => {
        console.log("arrowFunc →", this.name);
      };
  
      arrowFunc();
    },
  };
  
  obj.regularFunc();
  