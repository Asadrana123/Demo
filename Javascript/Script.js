const animals=[
  {species:"Lion",name:"King"},
  {species:"Whale",name:"Queen"}
]

function PrintAnimals(i){
  this.species="Human",
  this.name="King"
  this.print=function(){
      console.log(this.species,this.name)
  }
  //return this.print;
}
PrintAnimals();
console.log(this.name);