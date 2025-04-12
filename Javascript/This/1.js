const student={
    name:"Asad",
    printCourseName:function(){
        console.log(this.name);
    }
}
const Arham={
    name:"Arham"
}
student.printCourseName.call(Arham);


function hello(branch){
     console.log(`hi ${this.name} from ${branch}`);
}
const obj={name:"Asad"};
hello.call(obj,"IT");