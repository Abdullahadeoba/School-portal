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
        function displayStudents(){
         if(allStudents.length==0){
         myTable.innerHTML = ""
         disp.innerHTML = `<h1 style="text-align:center;color:white;font-weight:bolder;">There are currently no students</h1>`
         
         }else{
             disp.innerHTML = ""
             myTable.innerHTML = ""
             myTable.innerHTML += `
             <tr>
                <th class="table-dark">S/N</th>
                <th class="table-dark">First Name</th>
                <th class="table-dark">Last Name</th>
                <th class="table-dark">Email</th>
                <th class="table-dark">Actions</th>
                </tr>
                `
               //  <th class="table-dark">Password</th>
             for (let index = 0; index < allStudents.length; index++) {
                 console.log(allStudents[index].firstname)
                 myTable.innerHTML += `
                 <tr class="table-info">
                     <td>${index+1}</td>
                     <td>${allStudents[index].firstname}</td>
                     <td>${allStudents[index].lastname}</td>
                     <td>${allStudents[index].email}</td>
                     <td class="space-between">
                     <button  onclick="deleteUser(${index})" class="btn btn-danger"><i class="fas fa-trash"></i></button>
                     <button  onclick="editUser(${index})" class="btn btn-warning"><i class="fas fa-edit"></i></button>
                     </td>
                     </tr>
                     `   
                     // <td>${allStudents[index].password}</td>
             }
         } 
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