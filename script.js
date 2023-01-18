/* const getBooks = async (endpoint = "books") => {
  try {
     let res = await fetch("https://striveschool-api.herokuapp.com/books" + endpoint)
     let {users} = await res.json()
     console.log(users)
  } catch(err) {
      console.log(err)
  }
}

const getUserData = async (endpoint = "users") => {
    try {
        let res = await fetch("https://dummyjson.com/" + endpoint, {
            method: "GET",
            headers: {
                authorization: "yes"
            }
        }) //await stops the code
        let { users } = await res.json() //object
        console.log(users)
    } catch(err) {
        console.log(err)
    }
}

getBooks()
  
*/
/* let res= await ("https://striveschool-api.herokuapp.com/books")
let {} => await res.json()
.then((data) */
/*
window.onload = () => {
  getBooks();
}
const getBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((res) => res.json())
    .then((data) => {
      const container = document.querySelector(".container")
      const arrayOfBooks = data.map(({title, category, img}) => {
        return `
          <div class="col-3">
                  <div class="card">
                     <img src="${img}" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">${title} ${category}</h5>
                      </div>
                        <button type="button" value="Click" class="btn btn-outline-success" id="addCart" onClick="addToCart(this)">Add to Cart</button>
                        <button type="button" value="Click" onClick="skipBook()" class="btn btn-outline-warning">Skip</button>
                  </div>
          </div> `
    
      })
      const stringOfBooks = arrayOfBooks.join("")
      console.log(stringOfBooks)
      container.innerHTML = stringOfBooks
    })

}

getBooks()

function addToCart() {
  let cartNode = document.getElementById("addCart");
  console.log(cartNode);
  const cartUl = document.getElementById("cartList");
  console.log(cartUl);
  let newCartItem = document.createElement("li")
  cartUl.appendChild(newCartItem);
  newCartItem.innerHTML = `test`
}


*/

window.onload = () => {
  getBooks();
}

const getBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((res) => res.json())
    .then((data) => {
      const container = document.querySelector(".container")
      const arrayOfBooks = data.map(({title, category, img}) => {
        return `
          <div class="col-3">
                  <div class="card">
                     <img src="${img}" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">${title} ${category}</h5>
                      </div>
                        <button type="button" value="Click" class="btn btn-outline-success" id="addCart" onClick="addToCart(this)">Add to Cart</button>
                        <button type="button" value="Click" onClick="skipBook()" class="btn btn-outline-warning">Skip</button>
                  </div>
          </div> `
    
      })
      const stringOfBooks = arrayOfBooks.join("")
      console.log(stringOfBooks)
      container.innerHTML = stringOfBooks
    })

}

getBooks()

function addToCart() {
  let cartNode = document.getElementById("addCart");
  console.log(cartNode);
  const cartUl = document.getElementById("cartList");
  console.log(cartUl);
  let newCartItem = document.createElement("li")
  cartUl.appendChild(newCartItem);
  newCartItem.innerHTML = `test`
}


