//Creat Array
const tabledata = [];

//Creat Form
let formd =`
<div class="card p-3" style="width: 35rem;"> 
             
                <div class="mb-3">
                    <label for="Name" class="form-label">Name:</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Your Name">
                  </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address:</label>
                  <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Your Email">
                </div>
                <div class="mb-3">
                  <label for="Phone" class="form-label">Phone:</label>
                  <input type="text" class="form-control" id="phone" placeholder="Enter Your Phone No.">
                </div>
                <button type="submit" class="btn btn-primary" onclick="getdata()">Submit</button>
             
        </div>`
        document.getElementById('form').innerHTML=formd
//Get data in input abd push data in array
const getdata = () => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    const data = {
        name: name.value,
        email: email.value,
        phone: phone.value
    };
    tabledata.push(data);
    name.value  = '',
    email.value = '',
    phone.value = ''
    getTable();
};

//print data in table
const getTable = () => {
    let form = ``;
    tabledata.map((e,i)=>{
        form = form +
        `<tr>
        <td>${i+1}</td>
        <td>${e.name}</td>
         <td>${e.email}</td>
         <td>${e.phone}</td>
         <td class="text-center">
         <i class="bi bi-pencil" onclick="editData(${i})"></i>
         </td>
         <td class="text-center">
         <i class="bi bi-trash3" onclick="deleteData(${i})"></i>
         </td>
        </tr>`;
    })
 
    document.getElementById('table').innerHTML =form;
};

//Delete opration
const deleteData=(i)=>{
     tabledata.splice(i,1)
     getTable();
}

//edit Data in Form
const editData=(i)=>{
   let updateForm = ` <div class="card p-3" style="width: 35rem;"> 
             
   <div class="mb-3">
       <label for="Name" class="form-label">Name:</label>
       <input type="text" value="${tabledata[i].name}" class="form-control" id="newName" placeholder="Enter Your Name">
     </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Email address:</label>
     <input type="email" value="${tabledata[i].email}" class="form-control" id="newEmail" aria-describedby="emailHelp" placeholder="Enter Your Email">
   </div>
   <div class="mb-3">
     <label for="Phone" class="form-label">Phone:</label>
     <input type="text" value="${tabledata[i].phone}" class="form-control" id="newPhone" placeholder="Enter Your Phone No.">
   </div>
   <button type="submit" class="btn btn-primary" onclick="upDate(${i})">Update</button>

</div>`
document.getElementById('form').innerHTML=updateForm
}

//after edit, update data
const upDate=(i)=>{
    let newName = document.getElementById('newName');
    let newEmail = document.getElementById('newEmail');
    let newPhone = document.getElementById('newPhone');

    tabledata[i] = {
        name: newName.value,
        email: newEmail.value,
        phone: newPhone.value
    };
  
    getTable();
    document.getElementById('form').innerHTML=formd
}

getTable();