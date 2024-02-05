$(document).ready( async function (){
    tbody=document.getElementById('tbody')
    let data=await fetch("./data.json")
    let res=await data.json()
    console.log(res.data)
    res.data.map((element)=>{
        tbody.innerHTML+=`
        <tr>
        <td>${element.name}</td>
        <td>${element.infected}</td>
        <td>${element.infected-element.recovered}</td>
        <td>${element.recovered}</td>
        <td>${element.dead}</td>

    </tr>
        
        `
    })


    $('#covidTable').DataTable();
} );
