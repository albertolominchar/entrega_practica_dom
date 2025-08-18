// CREACION ESTRUCTURA HTML DEL MAIN
const main = document.querySelector('main')

const titlePage = document.createElement('div')
titlePage.id = 'title-page'
main.appendChild(titlePage)

const h2Shirt = document.createElement('h2')
h2Shirt.textContent = 'CAMISETAS'
titlePage.appendChild(h2Shirt)

const productsPage = document.createElement('div')
productsPage.id = 'products-page'
main.appendChild(productsPage)

const mobileFilter = document.createElement('section')
mobileFilter.id = 'mobile-filter'
productsPage.appendChild(mobileFilter)

const filterButton = document.createElement('button')
filterButton.id = 'filter-button'
filterButton.className = 'filter-button'
filterButton.textContent = 'Filtros'
mobileFilter.appendChild(filterButton)

const deskFilter = document.createElement('section')
deskFilter.id = 'desktop-filter'
productsPage.appendChild(deskFilter)

const productContainer = document.createElement('section')
productContainer.id = 'product-container'
productsPage.appendChild(productContainer)

//CREAR GALERIA DE PRODUCTOS
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
    type: 'tank tshirt',
    color: 'white',
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

// Crear cartas de productos
products.forEach((product) => {
  const shirtCard = document.createElement('div')
  shirtCard.className = 'shirt-card'
  shirtCard.dataset.type = product.type

  const link = document.createElement('a')
  link.href = product.page
  link.rel = 'noopener'

  const img = document.createElement('img')
  img.src = product.image
  img.alt = product.name
  link.appendChild(img)

  const title = document.createElement('p')
  title.textContent = product.name

  const priceCard = document.createElement('div')
  priceCard.className = 'price-card'

  let oldPrice = null
  if (product.oldPrice > product.price) {
    oldPrice = document.createElement('del')
    oldPrice.textContent = `${product.oldPrice.toFixed(2)} €`
  }

  const newPrice = document.createElement('span')
  newPrice.textContent = `${product.price.toFixed(2)} €`

  const favLink = document.createElement('a')
  favLink.href = '#'

  const likeCard = document.createElement('div')
  likeCard.className = 'like-card'

  const favIcon = document.createElement('img')
  favIcon.src = './assets/icons/fav-icon.svg'
  favIcon.alt = 'Añadir a favoritos'

  likeCard.appendChild(favIcon)
  favLink.appendChild(likeCard)

  if (oldPrice) {
    priceCard.appendChild(oldPrice)
  }
  priceCard.appendChild(newPrice)
  priceCard.appendChild(favLink)

  const addButton = document.createElement('a')
  addButton.href = '#'
  addButton.className = 'add-button'

  const addText = document.createElement('p')
  addText.textContent = 'Añadir al carrito'
  addButton.appendChild(addText)

  shirtCard.appendChild(link)
  shirtCard.appendChild(title)
  shirtCard.appendChild(priceCard)
  shirtCard.appendChild(addButton)

  container.appendChild(shirtCard)
})

// DESKTOP-FILTERS

const h3Desk = document.createElement('h3')
h3Desk.textContent = 'FILTROS'
deskFilter.appendChild(h3Desk)

// Botón limpiar filtros
const resetButton = document.createElement('button')
resetButton.textContent = 'Limpiar filtros'
resetButton.id = 'reset-filters'
resetButton.className = 'reset-btn'
deskFilter.appendChild(resetButton)

// Filtro por tipo
const h4type = document.createElement('h4')
h4type.textContent = 'Tipo de producto'
deskFilter.appendChild(h4type)

const types = [
  'Camisetas',
  'Camisetas Chica',
  'Camisetas Manga Larga',
  'Camisetas Tirantes'
]

const filterList = document.createElement('ul')
filterList.id = 'type-filter-list'
deskFilter.appendChild(filterList)

types.forEach((type) => {
  const li = document.createElement('li')
  filterList.appendChild(li)

  const id = type.toLowerCase().replace(/\s+/g, '-')
  const input = document.createElement('input')
  input.type = 'checkbox'
  input.id = id
  input.name = id
  li.appendChild(input)

  const label = document.createElement('label')
  label.htmlFor = id
  label.textContent = type
  li.appendChild(label)
})

// Filtro por precio
const h4Price = document.createElement('h4')
h4Price.textContent = 'Precio'
deskFilter.appendChild(h4Price)

const prices = ['De 0€ a 10€', 'De 10€ a 20€', 'Más de 20€']

const priceList = document.createElement('ul')
priceList.id = 'price-list'
deskFilter.appendChild(priceList)

prices.forEach((price) => {
  const id = price.toLowerCase().replace(/\s+/g, '-')

  const li = document.createElement('li')
  priceList.appendChild(li)

  const input = document.createElement('input')
  input.type = 'checkbox'
  input.id = id
  input.name = id
  li.appendChild(input)

  const label = document.createElement('label')
  label.htmlFor = id
  label.textContent = price
  li.appendChild(label)
})

//Filtro por color
const h4Color = document.createElement('h4')
h4Color.textContent = 'Color'
deskFilter.appendChild(h4Color)

const colors = [
  'Blanco',
  'Negro',
  'Gris',
  'Amarillo',
  'Naranja',
  'Rojo',
  'Verde'
]

const colorList = document.createElement('ul')
colorList.id = 'color-list'
deskFilter.appendChild(colorList)

colors.forEach((color) => {
  const id = color.toLowerCase().replace(/\s+/g, '-')

  const li = document.createElement('li')
  colorList.appendChild(li)

  const input = document.createElement('input')
  input.type = 'checkbox'
  input.id = id
  input.name = id
  li.appendChild(input)

  const label = document.createElement('label')
  label.htmlFor = id
  label.textContent = color
  li.appendChild(label)
})

// FILTRADO PRODUCTOS

// Mapeo tipos y colores
const typeMap = {
  Camisetas: 'tshirt',
  'Camisetas Chica': 'girl tshirt',
  'Camisetas Manga Larga': 'long-sleeve tshirt',
  'Camisetas Tirantes': 'tank tshirt'
}
const colorMap = {
  Blanco: 'white',
  Negro: 'black',
  Gris: 'grey',
  Amarillo: 'yellow',
  Naranja: 'orange',
  Rojo: 'red',
  Verde: 'green'
}
//Funcion filtrado
const filterProducts = () => {
  const selectedTypeCheckboxes = Array.from(
    document.querySelectorAll(
      '#type-filter-list input[type="checkbox"]:checked'
    )
  )
  const selectedPriceCheckboxes = Array.from(
    document.querySelectorAll('#price-list input[type="checkbox"]:checked')
  )
  const selectedColorCheckboxes = Array.from(
    document.querySelectorAll('#color-list input[type="checkbox"]:checked')
  )

  const selectedTypes = selectedTypeCheckboxes.map(
    (checkbox) => typeMap[checkbox.labels[0].textContent]
  )
  const selectedPriceRanges = selectedPriceCheckboxes.map(
    (checkbox) => checkbox.labels[0].textContent
  )
  const selectedColors = selectedColorCheckboxes.map(
    (checkbox) => colorMap[checkbox.labels[0].textContent]
  )

  document.querySelectorAll('.shirt-card').forEach((card) => {
    const cardType = card.dataset.type
    const product = products.find(
      (p) => p.name === card.querySelector('p').textContent
    )
    const price = product.price
    const color = product.color

    // Verificar tipo
    const matchesType =
      selectedTypes.length === 0 || selectedTypes.includes(cardType)

    // Verificar precio
    const matchesPrice =
      selectedPriceRanges.length === 0 ||
      selectedPriceRanges.some((range) => {
        if (range === 'De 0€ a 10€') return price >= 0 && price <= 10
        if (range === 'De 10€ a 20€') return price > 10 && price <= 20
        if (range === 'Más de 20€') return price > 20
        return false
      })

    // Verificar color
    const matchesColor =
      selectedColors.length === 0 || selectedColors.includes(color)

    const shouldShow = matchesType && matchesPrice && matchesColor
    card.style.display = shouldShow ? 'block' : 'none'
  })
}
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', filterProducts)
})

//Funcionalidad boton Limpiar filtros
resetButton.addEventListener('click', () => {
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false
  })
  document.querySelectorAll('.shirt-card').forEach((card) => {
    card.style.display = 'block'
  })
})

//MOBILE-FILTERS

// Mostrar/ocultar filtros y botón de reset
filterButton.addEventListener('click', () => {
  if (deskFilter.style.display === 'none' || deskFilter.style.display === '') {
    deskFilter.style.display = 'flex'
    resetMobile.style.display = 'flex'
    resetButton.style.display = 'none'
    filterButton.textContent = 'Validar'
  } else {
    deskFilter.style.display = 'none'
    resetMobile.style.display = 'none'
    resetButton.style.display = 'flex'
    filterButton.textContent = 'Filtros'
  }
})

// Crear botón "Limpiar filtros"
const resetMobile = document.createElement('button')
resetMobile.textContent = 'Limpiar'
resetMobile.id = 'reset-mobile'
resetMobile.className = 'filter-button'
mobileFilter.appendChild(resetMobile)

// Función botón "Limpiar filtros"
resetMobile.addEventListener('click', () => {
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false
  })
  document.querySelectorAll('.shirt-card').forEach((card) => {
    card.style.display = 'block'
  })
})
