function message(action){
    return function(){
        console.log(action);
    }
}
document.getElementById('save').addEventListener('click',message("save"));
document.getElementById('delete').addEventListener('click',message("delete"));


{/* <button id="save">Save</button>
<button id="delete">Save</button> */}