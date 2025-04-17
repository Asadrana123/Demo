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
    return this.print;
}
const print=new PrintAnimals();
for(let i=0;i<animals.length;i++){
   print.call(animals[i]);
}

for(let i=0;i<animals.length;i++){
      PrintAnimals().call(animals[i]);
 }
