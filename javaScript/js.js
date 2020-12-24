const cars = [
    {
        id: 1,
        branch: 'Dodge',
        model: 'Challenger GT',
        color: 'Negro', 
        year: 2016,
        price: 75647,
        img: 'https://assets-clean.local-car-finder.com/images/12232/12232_st1280_089.png'
    },
    {
        id: 2,
        branch: 'Dodge',
        model: 'Challenger Redeye',  
        color: 'Rojo',
        year: 2019,
        price: 75478,
        img : 'https://purepng.com/public/uploads/large/purepng.com-red-dodge-challenger-carcardodgevehicletransport-961524664322j46jv.png'
    },
    {
        id: 3,
        branch: 'Dodge',
        model: 'Durango', 
        color: 'Azul',
        year: 2020,
        price: 12467,
        img: 'https://www.dodge.cr/autos-nuevos/durango/colores/adelante/true-blue-pearl.png'
    }
]

let updating = false;

function btnForm() {
    if(updating) {
        updateCar();
    } else {
        addCar();
    }
}

function btnColor() {
    const btn = document.getElementById('btn-multiColor');

    if(updating){
        color= `<button type="submit" class="btn btn-outline-warning">
                    Update
                    <img src="https://i.pinimg.com/originals/c7/63/a4/c763a489ef657e033fc2d8beee84c755.png" alt="icono" class="icon">
                </button>`;
    }else {
        color= `<button type="submit" class="btn btn-outline-info">
                    Submit
                    <img src="https://i.pinimg.com/originals/c7/63/a4/c763a489ef657e033fc2d8beee84c755.png" alt="icono" class="icon">
                </button>`;
    }

    btn.innerHTML = color;
}

function printCars() {
    const table = document.getElementById('container-cars');
    let html= '';

    cars.forEach((car) => {
        html +=    `<div class="car-card">
                        <div class="container-car">
                            <div class="title">
                                <h2>${car.branch}</h2>
                                <h3>${car.model}</h3>
                            </div>
                            <div class="picture">
                                <img src="${car.img}" alt="imagen del auto">
                            </div>
                            <div class="other-Dates">
                                <div class="dates">
                                    <span class="text-bold">Color:</span>
                                    <span>${car.color}</span>
                                </div>
                                <div class="dates">
                                    <span class="text-bold">Year:</span>
                                    <span>${car.year}</span>
                                </div>
                                <div class="dates">
                                    <span class="text-bold">Price:</span>
                                    <span>$${car.price}</span>
                                </div>
                            </div>
                            <div class="buttoms-box">
                                <buttom onclick="deleteCar(${car.id})" class="btn btn-outline-danger">
                                    Delete
                                    <img src="https://image.flaticon.com/icons/png/128/1345/1345823.png" alt="icono" class="icon">
                                </buttom>
                                <buttom onclick="carValues(${car.id})" class="btn btn-outline-warning">
                                    Update
                                    <img src="https://i.pinimg.com/originals/79/c0/c6/79c0c68aa4ecbf670ea66447d9cf2426.png" alt="tuerca" class="icon">
                                </buttom>    
                            </div>
                        </div>
                    </div>`
    });
    btnColor();
    table.innerHTML = html; 
}

function addCar(){
    const branch = document.getElementById('inputBrand').value;
    const model = document.getElementById('inputModel').value;
    const color = document.getElementById('inputColor').value;
    const year = document.getElementById('inputYear').value;
    const price = document.getElementById('inputPrice').value;
    const img = document.getElementById('inputImg').value;
    const id = cars[cars.length-1].id + 1;

    const newCar = {
        id,
        branch,
        model,
        color,
        year,
        price,
        img
    }

    cars.push(newCar);
    document.getElementById('form-cars').reset();

    printCars();
}

function carValues(id) {
    const car = cars.find((car) => car.id === id);
    document.getElementById('inputBrand').value = car.branch;
    document.getElementById('inputModel').value = car.model;
    document.getElementById('inputColor').value = car.color
    document.getElementById('inputYear').value = car.year;
    document.getElementById('inputPrice').value = car.price;
    document.getElementById('inputImg').value = car.img;
    updating = car;
    btnColor();
}

function updateCar() {
    const branch = document.getElementById('inputBrand').value;  
    const model = document.getElementById('inputModel').value;
    const color = document.getElementById('inputColor').value;
    const year = document.getElementById('inputYear').value;
    const price = document.getElementById('inputPrice').value;
    const img = document.getElementById('inputImg').value;

    updating.branch = branch;
    updating.model = model;
    updating.color = color;
    updating.year =year;
    updating.price = price;
    updating.img = img;
    updating = false;

    printCars();

    document.getElementById('inputBrand').value = '';
    document.getElementById('inputModel').value = '';
    document.getElementById('inputColor').value = '';
    document.getElementById('inputYear').value = '';
    document.getElementById('inputPrice').value = '';
    document.getElementById('inputImg').value = '';
}

function deleteCar(id) {
    const index= cars.findIndex((car)=> car.id === id);
    cars.splice(index,1);
    printCars();
}

printCars();
btnColor()