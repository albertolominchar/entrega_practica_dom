const products = [
  {
    name: 'Killer Bueno',
    oldPrice: 14.99,
    price: 9.99,
    type: 'tshirt',
    color: 'white',
    image: 'https://statics.pampling.com/imagenes/productos/producto_15653.jpg',
    page: 'https://www.pampling.com/productos/es/15653-Killer-Bueno'
  },
  {
    name: 'Mojito Cocktail',
    oldPrice: 14.99,
    price: 11.99,
    type: 'tshirt',
    color: 'green',
    image: 'https://statics.pampling.com/imagenes/productos/producto_15648.jpg',
    page: 'https://www.pampling.com/productos/es/15648-Mojito-Cocktail'
  },
  {
    name: 'Wrong Opinion',
    oldPrice: 14.99,
    price: 11.99,
    type: 'tshirt',
    color: 'red',
    image: 'https://statics.pampling.com/imagenes/productos/producto_14276.jpg',
    page: 'https://www.pampling.com/productos/es/14276-Wrong-Opinion'
  },
  {
    name: 'Aloha Spirit',
    oldPrice: 14.99,
    price: 11.99,
    type: 'girl tshirt',
    color: 'orange',
    image: 'https://statics.pampling.com/imagenes/productos/producto_15572.jpg',
    page: 'https://www.pampling.com/productos/es/15572-Aloha-Spirit'
  },
  {
    name: 'Make Smile',
    oldPrice: 14.99,
    price: 11.99,
    type: 'girl tshirt',
    color: 'black',
    image: 'https://statics.pampling.com/imagenes/productos/producto_3177.jpg',
    page: 'https://www.pampling.com/productos/3177-Make-a-Smile'
  },
  {
    name: 'Velociramen',
    oldPrice: 14.99,
    price: 11.99,
    type: 'girl tshirt',
    color: 'yellow',
    image: 'https://statics.pampling.com/imagenes/productos/producto_15548.jpg',
    page: 'https://www.pampling.com/productos/es/15548-Velociramen'
  },
  {
    name: 'Van Gone',
    oldPrice: 14.99,
    price: 11.99,
    type: 'girl tshirt',
    color: 'yellow',
    image: 'https://statics.pampling.com/imagenes/productos/producto_13439.jpg',
    page: 'https://www.pampling.com/productos/es/9302-Van-Gone'
  },
  {
    name: 'Kit Cat',
    oldPrice: 14.99,
    price: 9.99,
    type: 'tank tshirt',
    color: 'grey',
    image: 'https://statics.pampling.com/imagenes/productos/producto_15278.jpg',
    page: 'https://www.pampling.com/productos/15278-Kit-cat'
  },
  {
    name: 'Caffeine',
    oldPrice: 14.99,
    price: 9.99,
    type: 'tank tshirt',
    color: 'black',
    image: 'https://statics.pampling.com/imagenes/productos/producto_15350.jpg',
    page: 'https://www.pampling.com/productos/15350-Caffeine'
  },
  {
    name: 'Death Ball',
    oldPrice: 16.99,
    price: 13.99,
    type: 'long-sleeve tshirt',
    color: 'black',
    image: 'https://statics.pampling.com/imagenes/productos/producto_15051.jpg',
    page: 'https://www.pampling.com/productos/15051-Death-ball'
  },
  {
    name: 'Chicken Game',
    oldPrice: 16.99,
    price: 13,
    type: 'long-sleeve tshirt',
    color: 'grey',
    image: 'https://statics.pampling.com/imagenes/productos/producto_14616.jpg',
    page: 'https://www.pampling.com/productos/14616-Chicken-Game'
  },
  {
    name: 'Artistic Cat',
    oldPrice: 16.99,
    price: 13.99,
    type: 'long-sleeve tshirt',
    color: 'white',
    image: 'https://statics.pampling.com/imagenes/productos/producto_14715.jpg',
    page: 'https://www.pampling.com/productos/14715-Artistic-Cat'
  }
]

const container = document.getElementById('product-container')

products.forEach((product) => {
  // Crear el contenedor principal
  const shirtCard = document.createElement('div')
  shirtCard.className = 'shirt-card'

  // Enlace de la imagen
  const link = document.createElement('a')
  link.href = product.page
  link.rel = 'noopener'

  // Imagen del producto
  const img = document.createElement('img')
  img.src = product.image
  img.alt = product.name
  link.appendChild(img)

  // Nombre del producto
  const title = document.createElement('p')
  title.textContent = product.name

  // Contenedor de precios
  const priceCard = document.createElement('div')
  priceCard.className = 'price-card'

  // Precio original
  const oldPrice = document.createElement('del')
  oldPrice.textContent = `${product.oldPrice.toFixed(2)} €`
  // Precio rebajado
  const newPrice = document.createElement('span')
  newPrice.textContent = `${product.price.toFixed(2)} €`

  // Icono de favorito
  const favLink = document.createElement('a')
  favLink.href = '#'

  const likeCard = document.createElement('div')
  likeCard.className = 'like-card'

  const favIcon = document.createElement('img')
  favIcon.src = './assets/icons/fav-icon.svg'
  favIcon.alt = 'Añadir a favoritos'

  likeCard.appendChild(favIcon)
  favLink.appendChild(likeCard)

  // Añadir precios e icono al contenedor de precios
  priceCard.appendChild(oldPrice)
  priceCard.appendChild(newPrice)
  priceCard.appendChild(favLink)

  // Botón de añadir al carrito
  const addButton = document.createElement('a')
  addButton.href = '#'
  addButton.className = 'add-button'

  const addText = document.createElement('p')
  addText.textContent = 'Añadir al carrito'
  addButton.appendChild(addText)

  // Ensamblar la tarjeta
  shirtCard.appendChild(link)
  shirtCard.appendChild(title)
  shirtCard.appendChild(priceCard)
  shirtCard.appendChild(addButton)

  // Insertar en el DOM
  container.appendChild(shirtCard)
})
