//Creat Array
// const tabledata = [];
tabledata = JSON.parse(localStorage.getItem('crudData')) ?? [];
//print data in table
const getTable = () => {
  let form = ``;
  tabledata.map((e, i) => {
    form = form +
      `<tr class="tbody">
        <td>${i + 1}</td>
        <td>${e.name}</td>
         <td>${e.email}</td>
         <td>${e.phone}</td>
         <td class="text-center">
         <i class="bi bi-pencil" onclick="handleEdit(${i})"></i>
         </td>
         <td class="text-center">
         <i class="bi bi-trash3" onclick="deleteData(${i})"></i>
         </td>
        </tr>`;
  })

  document.getElementById('table').innerHTML = form;
};
getTable();

var editIndex = -1;
var form = {
  name:{
    input:document.getElementById('name'),
    alert:document.getElementById('alert1')
  },
  email:{
    input:document.getElementById('email'),
    alert:document.getElementById('alert2')
  },
  phone:{
    input:document.getElementById('phone'),
    alert:document.getElementById('alert3')
  },
  btn:document.getElementById('sbtn')
};
const handleChange = (inputKey)=>{
  if(form[inputKey].input.value){ 
    /* 
      inputKey=> 'email' 
      1. form.email.alert.innerHtml = ''
      2. form['email'].alert.innerHTML = ''
    */
    form[inputKey].alert.innerHTML = '';
  }else{
    form[inputKey].alert.innerHTML = 'Required field!';
  }
}
//convert name to upper case
const uppercase = () => {
  let nam = document.getElementById('name');
  nam.value = nam.value.toUpperCase();
}

//Get data in input abd push data in array
const changeTableData = () => {
  
  form.name.alert.innerHTML = '';
  form.email.alert.innerHTML = '';
  form.phone.alert.innerHTML = '';
  form.name.input.style.borderColor = "";
  form.email.input.style.borderColor = "";
  form.phone.input.style.borderColor = "";
  let allFilled = true;
  if(!form.name.input.value){ // "", '', null, undefined, null, 0, false
    form.name.alert.innerHTML = 'Required field.'
    form.name.input.style.borderColor = "red"
    allFilled = false;
  }
  if(!form.email.input.value){ // "", '', null, undefined, null, 0, false
    form.email.alert.innerHTML = 'Required field.'
    form.email.input.style.borderColor = "red"
    allFilled = false;
  }
  if(!form.phone.input.value){ // "", '', null, undefined, null, 0, false
    form.phone.alert.innerHTML = 'Required field.'
    form.phone.input.style.borderColor = "red"
    allFilled = false;
  }
  if(!allFilled){
    return;
  }
  const data = {
    name: form.name.input.value,
    email: form.email.input.value,
    phone: form.phone.input.value
  };
  if(editIndex < 0){
    tabledata.push(data);
    localStorage.setItem('crudData',JSON.stringify(tabledata));
  }else{
    tabledata[editIndex] = data;
    localStorage.setItem('crudData',JSON.stringify(tabledata));
  }
  editIndex = -1;
  form.name.input.value = '';
  form.email.input.value = '';
  form.phone.input.value = '';
  form.btn.innerHTML = 'Submit';
  getTable();
};
const handleEdit = (i)=>{
  let data = tabledata[i]; // {email:"", name:"", phone:""}
  form.name.input.value = data.name;
  form.email.input.value = data.email;
  form.phone.input.value = data.phone;
  form.btn.innerHTML = 'Update'
  editIndex = i;
}

//Delete opration
const deleteData = (i) => {
  tabledata.splice(i, 1)
  localStorage.setItem('crudData',JSON.stringify(tabledata));
  getTable();
}