let myTit = document.getElementById("myTit")
let myText = document.getElementById("myText")

let MyNote = document.getElementById("MyNote")


let add = () => {
if(myTit.value == "" && myText.value == ""){
    alert("ENTER  TITTLE AND TEXT")
    
}



else{

let le = document.createElement("div")
le.setAttribute("class", "texttt")



let h3 = document.createElement('h3')
let h3text = document.createTextNode(myTit.value)
h3.appendChild(h3text)
h3.setAttribute("class","tiiii")




let p = document.createElement('p')

let p_text = document.createTextNode(myText.value)
p.appendChild(p_text)
p.setAttribute("class", "para")










let edit = document.createElement("button")
let edit_text = document.createTextNode("edit")
edit.setAttribute('onclick', 'edit(this)')
edit.setAttribute('class','btn btn-primary btnnn ')

edit.appendChild(edit_text);











let remove = document.createElement("button")
let remove_text = document.createTextNode("Delete")
remove.setAttribute('onclick', 'remove(this)')
remove.setAttribute('class','btn btn-danger btnnn')

remove.appendChild(remove_text);









MyNote.appendChild(le)
le.appendChild(h3)
le.appendChild(p)
le.appendChild(edit)
le.appendChild(remove)



myTit.value=""
myText.value=""






}
}

let del = ()=> {
  MyNote.innerHTML = ""
}


let edit = (f) =>{
    const jimmi = prompt("Enter New Tittle")
    const jamshed = f.parentNode.firstChild.innerHTML=jimmi

    const jimmis = prompt("Enter New Text")

   const jii = f.parentNode.firstChild.nextSibling.innerHTML=jimmis
   console.log(jamshed);
   console.log(jii);

}


let remove= (e) =>{
    e.parentNode.remove()
    
}