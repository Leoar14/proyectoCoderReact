const products = [
    {
        id: 1, name: 'Virginia Style Spinach', price: 2350, category: 'appetizers', img: './img/virginia.jpg', stock: 25, description:'250g de espinaca con queso fundido, acompañado de nachos, queso crema y salsa mediterranea.'
    },
    {
        id: 2, name: 'Mozzarella St. George', price: 2150, category: 'appetizers', img: './img/muzzarela.jpg', stock: 25, description:'6 triangulos de mozzarella rebozada con salsa mediterranea y aderezo ranch.'
    },
    {
        id: 3, name: 'Buffalo Wings', price: 1890, category: 'appetizers', img: './img/buffalo.jpg', stock: 25, description:'Alitas de pollo crocantes con salsa barbacoa común/picante.'
    },
    {
        id: 4, name: 'Guadalupe Baby - Backs Ribs', price: 4150, category: 'steaks', img: './img/guadalupe.png', stock: 25, description:'600g de costillar de cerdo ahumado y bañado con salsa barbecue, asado a la leña y acompañado con papas fritas y ensalada cole slaw.'
    },
    {
        id: 5, name: 'Honokam Chicken', price: 3200, category: 'steaks', img: './img/honokam.jpg', stock: 25, description:'270g de pechuga deshuesada marinada 48 hs. en vino blanco y especias, asada a la leña, con tomate picado, cebollin y queso fundido, con papas fritas y ensalada cole slaw.'
    },
    {
        id: 6, name: 'Italian Style Salmon', price: 5200, category: 'steaks', img: './img/italian.jpg', stock: 25, description:'170g de filet de salmon fresco asado a la leña con risotto de calabaza y parmesano.'
    },
    {
        id: 7, name: 'Bife De Chorizo 400g', price: 5300, category: 'argentinos', img: './img/bife.jpg', stock: 25, description:'400g de Bife de chorizo asado a la leña con ensalada o papas fritas.'
    },
    {
        id: 8, name: 'Entraña 300g', price: 4200, category: 'argentinos', img: './img/entraña.jpg', stock: 25, description:'300g de Entraña asada a la leña con ensalada o papas fritas.'
    },
    {
        id: 9, name: 'Pollo Deshuesado A La Parrilla 300g', price: 2800, category: 'argentinos', img: './img/pollo.jpg', stock: 25, description:'300g de pollo deshuesado a la leña con ensalada o papas fritas.'
    },
    {
        id: 10, name: 'Caesar Salad', price: 3350, category: 'salad', img: './img/caesar.png', stock: 25, description:'Lechuga fresca romana,pollo grillado, queso parmesano, croutones y nuestro famoso aderezo caesar.'
    },
    {
        id: 11, name: 'Green Alabama Salad', price: 3000, category: 'salad', img: './img/alabama.jpg', stock: 25, description:'Colchon de rúcula y espinaca fresca, remolacha glaseada,tomates especiados, queso brie y vinagreta de frutos secos.'
    },
    {
        id: 12, name: 'Cobb Salad', price: 3450, category: 'salad', img: './img/cobb.jpg', stock: 25, description:'Lechugas frescas, 125g de pollo grillado,tomate, panceta ahumada, huevo, palta y queso roquefort.'
    },
    {
        id: 13, name: 'Sweet Shot x6', price: 3600, category: 'desserts', img: './img/sweet.jpg', stock: 25, description:'Degustacíon de pequeños postres x6 lemon pie, chocotorta, trio de chocolate, oreo, cheescake, tiramisú.'
    },
    {
        id: 14, name: 'Frutos Del Bosque', price: 2050, category: 'desserts', img: './img/frutos.jpg', stock: 25, description:'Frambuesas, moras y arandanos maserados al vino tinto y con bocha de helado de mascarpone y crema chantilly.'
    },
    {
        id: 15, name: 'Brownie & Ice Cream', price: 1700, category: 'desserts', img: './img/brownie.jpg', stock: 25, description:'Brownie tibio con helado de americana.'
    },
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },1000)
        })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },1000)
        }
    )
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.productId === productId))
        },1000)
        })
}