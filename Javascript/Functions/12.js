function Counter() {
    this.count = 0;
  
    setInterval(function () {
      this.count++;
      console.log("Regular:", this.count);
    }, 1000);
  
    setInterval(() => {
      this.count++;
      console.log("Arrow:", this.count);
    }, 1000);
  }
  
  new Counter();
  