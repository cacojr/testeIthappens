function getUsers() {
  fetch('https://randomuser.me/api/?results=10&nat=br')
    .then(data => data.json())
    .then(users => {
      
      const listOne = document.getElementById('userList1'),
            listTwo = document.getElementById('userList2'),
            listThree = document.getElementById('userList3'),
            listFour = document.getElementById('userList4');

      render(users.results[0], listThree);
      render(users.results[1], listThree, '290px');

      render(users.results[2], listTwo);
      render(users.results[3], listTwo);
      render(users.results[4], listTwo, '160px');

      render(users.results[5], listOne, '150px');
      render(users.results[6], listOne, '100px');

      render(users.results[7], listFour, '160px');
      render(users.results[8], listFour);
      render(users.results[9], listFour, '150px');

      

      // users.results.forEach(user => {
      //   const { name, picture, dob } = user;
      //   const age = new Date().getFullYear() - new Date(dob).getFullYear();
      //   console.log(age);

      //   parent = document.getElementById('userList1')
      //   renderImage(name, age, picture, '200px', parent);
      // });
    })
    .catch(err => console.log(err));
}

function createNode(el) {
  return document.createElement(el);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function renderImage(name, age, picture, size, parent) {
    let li = createNode('li'),
        modal = createNode('div');
        userAge = createNode('span');
        userName = createNode('p')

    userAge.innerHTML = `age ${age}`;
    userName.innerHTML = name.first;
    modal.className = 'modal';
    li.className = 'image-box';
    li.style = `background-image: url(${picture.large}); height: ${size ? size : '120px'}`;
      
    append(li, modal);
    append(li, userAge);
    append(li, userName);
    append(parent, li);

}

function render(user, parent, height = null,) {
  const { name, picture, dob } = user;
  const age = new Date().getFullYear() - new Date(dob).getFullYear();
  renderImage(name, age, picture, height, parent);
}

window.onload = getUsers;