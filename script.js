var allStudents = []

        function signUp(){
           if (fname.value,lname.value,mail.value,pass.value == "") {
            emptyErrorMessage.style.display = 'block'
            setTimeout(() =>{
            emptyErrorMessage.style.display = "none"
            },5000)

           } else {
              var student = {
               firstname: fname.value,
               lastname: lname.value,
               email: mail.value,
               // password: pass.value, 
             }
              allStudents.push(student),
               console.log(student)
               successMessage.style.display = 'block'
               setTimeout(()=>{
               successMessage.style.display = 'none'
               }, 3000)
              window.location.href = 'dashboard.html'
              
              deleteBtn.style.display = "block"
            }            
             fname.value = "",lname.value ="",mail.value ="",pass.value = ""
        }
     function deleteUser(userIndex){
         allStudents.splice(userIndex,1)
         displayStudents()
        }

     function editUser(userIndex){
        editDiv.innerHTML = `
        <div>
        <input type="text" class="col-3 form-control shadow-none mt-2" placeholder="firstname" id="editfn">
        <input type="text" class="col-3 form-control shadow-none mt-2" placeholder="lastname" id="editln">
        <input type="text" class="col-3 form-control shadow-none mt-2" placeholder="email" id="editem">
        <button onclick="updateDtails(${userIndex})" class=" mt-2 mb-2 col-12 btn btn-primary btn-sm">Update Details</button>
        </div>
        `
      //   <input type="text" class="col-3 form-control shadow-none mt-2" placeholder="password" id="editps">
        editfn.value = allStudents[userIndex].firstname
        editln.value = allStudents[userIndex].lastname
        editem.value = allStudents[userIndex].email
      //   editps.value = allStudents[userIndex].password

     }

     function updateDtails(index){
        var newDetails = {
        firstname : editfn.value,
        lastname : editln.value,
        email : editem.value,
      //   password : editps.value
       }
        allStudents.splice(index,1,newDetails)
        console.log(allStudents)
        displayStudents()
        editDiv.innerHTML = ""   
     }

     function deleteAll(){
        allStudents.splice(0)
        console.log(allStudents)
        displayStudents()
     }