// to Select all dropdowns inside boxes
const dropdowns = document.querySelectorAll('.box select');

// to add the click event listener to each dropdown
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', (event) => {
    // to Prevent the click event from reaching the box and toggling its state
    event.stopPropagation();
  });
});
// to expand the box whixh ever is clicked
function toggleExpand(box) {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((b) => {
    if (b !== box) {
      b.classList.remove('expanded');
      b.style.borderColor = '#ccc';
      b.style.backgroundColor = '#fff';
    }
  });
//   functionality to change the border and background color whenever the boxes get expanded and vice versa
  if (box.classList.contains('expanded')) {
    box.classList.remove('expanded');
    box.style.borderColor = '#ccc';
    box.style.backgroundColor = '#fff';
  } else {
    box.classList.add('expanded');
    box.style.borderColor = '#336699';
    box.style.backgroundColor = '#f0f8ff';
  }
}
