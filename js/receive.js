
nearest = [{
  type: 'pizza hut',
  distance: '3 km',
  place: 'Pizza Hut Sheerwood'
},
{
  type: 'Soft drink',
  distance: '7 km',
  place: 'Cornbread Cafe'
},
{
  type: 'Ceasar salad',
  distance: '23 km',
  place: 'Aviv'
},
{
  type: 'Vegan Burger',
  distance: '22 km',
  place: 'Ichiza kitchen'
},
{
  type: 'Burger',
  distance: '0.5 km',
  place: 'Mr Hamburger'
},
{
  type: 'Coffee Latte',
  distance: '3km',
  place: ''
},
{
  type: 'Brownie',
  distance: '5 km',
  place: ''
},
{
  type: 'Vegan Burger',
  distance: '3km',
  place: ''
}]

let x = document.getElementById("nearest");
let y = document.getElementById("latest");

let butX = document.getElementById("btn-nearest");
let butY = document.getElementById("btn-latest");

let search = document.getElementById('search-icon')

const toggle1 = () => {


  if (x.classList.contains('d-none')) {
    x.classList.remove("d-none");
    y.classList.add("d-none");
    butX.classList.add("btn-black");
    butY.classList.remove("btn-black");
  }
}

const toggle2 = () => {

  if (y.classList.contains('d-none')) {
    x.classList.add("d-none");
    y.classList.remove("d-none");
    butX.classList.remove("btn-black");
    butY.classList.add("btn-black");

  }
}

const light = () => {
  search.classList.add('d-none');
}

const dark = () => {
search.classList.remove('d-none');
}