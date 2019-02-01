// make array

// create const for id elements

// create for loop, within loop make const for array and wire to section

// create another function paint which will allow color to appear then input that function to the above if statement

const itemList = [
    'red',
    'yellow',
    'blue',
    'purple',
    'green',
    'grey'
];

const colorBlocks = document.getElementById('color-blocks');

for(let i = 0; i < itemList.length; i++) {
    let item = itemList[i];
    const colorBlock = document.createElement('button');
    colorBlock.classList.add('item-add', item);
    colorBlock.textContent = item;

    colorBlocks.appendChild(colorBlock);

}