function infiniteCurrying(a){
      return function inner(b){
             if(!b) return a;
             else return infiniteCurrying(a+b);
      }
}
console.log(infiniteCurrying(2)(3)(4)());
