// Function to assign default values to watt, hourly usage and days usage
let defaultValues = (el)=>{

//assign default values for wattages based on selected equipment
const option = el.value;
if(option=='fan')
{
    document.querySelector('.watt-define').value=60;
    document.querySelector('.hours').value=20;
}

if(option=='ac')
{
    document.querySelector('.watt-define').value=1500;
    document.querySelector('.hours').value=8;
}

if(option=='tubelight')
{
    document.querySelector('.watt-define').value=20;
    document.querySelector('.hours').value=16;
}

if(option=='tv')
{
    document.querySelector('.watt-define').value=200;
    document.querySelector('.hours').value=4;
}



}



//Function addEquipments to add equipments in Row

let addEquipments = () => {

    // One task is to add HTML in display-table
    
    document.querySelector('.display-table').querySelector('tbody').innerHTML += `
    <tr>
    <td>
    ${document.querySelector('.appliance').value}
    </td>
    <td class="watt">
    ${document.querySelector('.watt-define').value}
    </td>
    <td>
    ${document.querySelector('.equipments').value}
    </td>
    <td>
    ${document.querySelector('.hours').value}
    </td>
    <td>
    ${document.querySelector('.days').value}
    </td>
    <td class="total-wattage">
    ${document.querySelector('.watt-define').value * document.querySelector('.equipments').value}
    </td>
    <td class="total-consumption">
    ${document.querySelector('.watt-define').value * document.querySelector('.equipments').value * document.querySelector('.hours').value * document.querySelector('.days').value/1000}
    </td>

    <td>
        <button type="button" class="btn btn-info" onclick="removeRow(this)">Delete</button>
    </td>
  </tr>
    `


    //One task is to change HTML to add new appliance
    document.querySelector('.original').querySelector('tbody').innerHTML = `
    <tr>
            
            <td>
                <select class="form-select appliance" aria-label="Default select example" onchange="defaultValues(this)" >
                    <option selected >Select</option>
                    <option value="fan">Fan</option>
                    <option value="ac">AC</option>
                    <option value="tubelight">Tubelight</option>
                    <option value="tv">TV</option>
                  </select>
            </td>
            <td>
                <input class="form-control watt-define" type="number"  aria-label="default input example" >
            </td>
            <td>
                <input class="form-control equipments" type="number"  aria-label="default input example" value="1">
            </td>
            <td>
                <input class="form-control hours" type="number"  aria-label="default input example"
                >
            </td>
            <td>
                <input class="form-control days" type="number"  aria-label="default input example" value="1">
            </td>
            <td>
                <button type="button" class="btn btn-info" onclick="addEquipments()">Add</button>
            </td>

          </tr>
    `
    document.querySelector('.row-table').innerHTML=`
    <td scope="col" id="displayWatt">${totalWatt()}</td>

    <td scope="col" id="displayConsumption">${totalConsumption()}</td>

    <td scope="col" id="displayBill">${totalBill()}</td>
    `
    
    // document.querySelector('#displayWatt').innerText = `${totalWatt()}`;
    
    // document.querySelector('#displayConsumption').innerText = `${totalConsumption()}`;

    // document.querySelector('#displayBill').innerText = `${totalBill()}`;
}

let totalWatt = ()=>{
    let watt = 0;
    for(let i=0;i<(document.querySelector('.display-table tbody').children.length); i++)
    {
        watt+= parseInt(document.querySelectorAll('.display-table .total-wattage')[i].innerText);
    }   
    return watt; 
}

let totalConsumption =()=>{
    let consumption = 0;

    for(let i=0;i<(document.querySelector('.display-table tbody').children.length); i++)
    {
        consumption+= parseFloat(document.querySelectorAll('.display-table .total-consumption')[i].innerText);
    }   
    return consumption.toFixed(2); 
}

let totalBill = ()=>{
    return (totalConsumption()*7).toFixed(2);
}

let removeRow = (element)=>{
 element.parentNode.parentNode.remove();

 document.querySelector('#displayWatt').innerText = `${totalWatt()}`;
    
    document.querySelector('#displayConsumption').innerText = `${totalConsumption()}`;

    document.querySelector('#displayBill').innerText = `${totalBill()}`;

}