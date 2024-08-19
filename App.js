let container = document.querySelector("#container");
let bool = false;
let btn1 = document.querySelector("#btn1");
createGrid(3);
btn1.addEventListener('click', ()=>{
    let rowCount = prompt("Enter a number: ");
    if(rowCount>50){
        alert("Enter a number less than 50!");

    }else if(bool <= 50){
        bool = true;
    }
    if(bool){
        container.innerHTML='';
        createGrid(rowCount);
        bool = false;
    }

});

function createGrid(rowCount){
    for(let row = 0;row<rowCount;row++){
        const gridItemRow = document.createElement('div');
        gridItemRow.className="rowItem";
        container.appendChild(gridItemRow);
        // const selectedRow = document.querySelector('.rowItem')
        for(let col = 0; col< rowCount;col++){
            const gridItemCol = document.createElement('div');
            gridItemCol.className="col";
            gridItemRow.appendChild(gridItemCol);
            gridItemCol.addEventListener('click', () => {
                gridItemCol.style.opacity = '100%';
            });
        }
    }
}
