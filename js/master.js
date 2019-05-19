let optionsPrice = 0;
let coursePrice = 28000;

const coursesItems = [...document.querySelectorAll('.courses_item')];

coursesItems.forEach(item => {
  item.onclick = function() {
    coursesItems.forEach(item2 => {
      item2.classList.remove('selected');
    })

    item.classList.add('selected');

    changeCourse(item.dataset.name, Number(item.dataset.price));
  };
});

document.getElementById('dop-option').addEventListener('click', function( e ) {
  document.getElementById('options').classList.toggle('show');
});

const optionsItem = [...document.querySelectorAll('.options_item')];

optionsItem.forEach(item => {
  item.onclick = function() {
    let price = Number(item.dataset.price);

    if (item.classList.toggle('selected')) {
        optionsPrice += price;
    } else {
        optionsPrice -= price;
    }

    changeOptions();
  };
});

function changeCourse (name, price) {
  coursePrice = price;

  document.getElementById('price-course').innerHTML = coursePrice;
  document.getElementById('select-course').innerHTML = name;

  changePrice();
}

function changeOptions () {
  document.getElementById('price-dop').innerHTML = optionsPrice;

  changePrice();
}

function changePrice() {
  document.getElementById('total-price').innerHTML = coursePrice + optionsPrice;
}
