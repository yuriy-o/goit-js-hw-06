const getLiElementsRef = document.querySelectorAll('#categories>.item');
console.log('Number of categories: ', getLiElementsRef.length);

getLiElementsRef.forEach(element => {
  console.log('Category: ', element.firstElementChild.textContent);
  console.log('Elements: ', element.lastElementChild.children.length);
});

// getLiElementsRef.forEach(function (elements) {
//   console.log('Category: ', elements.firstElementChild.textContent);
//   console.log('Elements: ', elements.lastElementChild.children.length);
// });