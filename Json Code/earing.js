fetch('earings.json')
.then(response => response.json())
.then(data => {
  const productList = document.getElementById('product-list');

  data.products.forEach(product => {
    const productItem = document.createElement('li');

    const productImage = document.createElement('img');
    productImage.src = product.image;

    const productName = document.createElement('h2');
    productName.innerText = product.name;

    const productDescription = document.createElement('p');
    productDescription.innerText = product.description;

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const buyNowButton = document.createElement('button');
    buyNowButton.innerText = 'Buy Now';
    buyNowButton.addEventListener('click', () => {
      window.open('form.html', '_blank');
    });

    productItem.appendChild(productImage);
    productItem.appendChild(productName);
    productItem.appendChild(productDescription);
    productItem.appendChild(productPrice);
    productItem.appendChild(buyNowButton);

    productList.appendChild(productItem);
  });
});

