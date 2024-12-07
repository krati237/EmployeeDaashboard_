function editrow(id){
    document.getElementById(`eno-${id}`).removeAttribute("readonly");
    document.getElementById(`nm-${id}`).removeAttribute("readonly");
    document.getElementById(`ct-${id}`).removeAttribute("readonly");
    document.getElementById(`sl-${id}`).removeAttribute("readonly");

    document.getElementById(`edit-${id}`).style.display = "none";
    document.getElementById(`save-${id}`).style.display = "inline";
}

async function saverow(id){
    let url=`http://localhost:3000/employees/${id}`;

    let empno=  document.getElementById(`eno-${id}`).value
    let name= document.getElementById(`nm-${id}`).value
    let city= document.getElementById(`ct-${id}`).value
    let salary= document.getElementById(`sl-${id}`).value
    
    let responseobj = await fetch(url, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            employeeno: empno,
            employeename: name,
            city: city,
            salary: salary,
        }),
    });
    console.log(responseobj);
    let data = await responseobj.json();
    console.log(data);
    alert("data updated successfully");
}


async function recdel(id) {
    let url=`http://localhost:3000/employees/${id}`;
    let responseobj = await fetch(url, {
        method: "DELETE",
        
    });
    console.log(responseobj);

    let data = await responseobj.json();
    console.log(data);
    alert("data succesfelly deleted");
}


async function display(){
     let table = `
     <table>
     <tr>
     <th>employee no</th>
     <th>employee name</th>
     <th>city</th>
     <th>salary</th>
     <th>actions</th>
     </tr>`
     
    let url = "http://localhost:3000/employees";
    let responseobj = await fetch(url);
    let mydata = await responseobj.json();

    mydata.map((key)=>{
        table += `
        <tr>
        <td><input type="text" value="${key.employeeno}" id="eno-${key.id}"readonly</td>
        <td><input type="text" value="${key.employeename}" id="nm-${key.id}"readonly</td>
        <td><input type="text" value="${key.city}" id ="ct-${key.id}"readonly</td>
        <td><input type="number" value="${key.salary}" id="sl-${key.id}"readonly</td>
        <td>
        <a onclick="recdel('${key.id}')" <i class="fa-solid fa-trash"></i></a>
        <a onclick="editrow('${key.id}')" id="edit-${key.id}" <i class="fa-regular fa-pen-to-square"></i></a>
        <a onclick="saverow('${key.id}')" id="save-${key.id}" <i class="fa-solid fa-check"></i></a>
        
        </td>
        </tr>`;
    });
document.getElementById("demo").innerHTML =table;
}
display();