var form = document.getElementById("inputresult")

// functions around the button
function logInput(){ 
    console.log(user.value)
    var newName = document.createElement("h1")
    newName.textContent = user.value
    form.prepend(newName)
}

//Functions around the form
var form2 = document.getElementById("user2")
    form2.addEventListener("submit", function(e){
        e.preventDefault()
        var newName = document.createElement("h1")
        newName.textContent = text2.value
        form.prepend(newName)
    })







