import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ShoesItem from "./ShoesItem";
import Cart from "./Cart";
import ShoesDetails from "./ShoesDetails";
export default class ShoesList extends Component {
  products = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ];
  state = {
    isSelectItem:null,
    isShowCart: false,
    cart: [],
  };
  renderProducts = () => {
    const html = this.products.map((item) => {
      return (
        <Col key={item.id} style={{padding: "30px"}}>
          <ShoesItem showDetails={this.showDetails} item={item} addCart={this.addCart} />
        </Col>
      ); 
    });
    return html;
  };

  showDetails = (data)=>{
   this.setState({
    isSelectItem:data,
   })
  }

  showCart = () => {
    this.setState({
      isShowCart: true,
    });
  };

  closeCart = () => {
    this.setState({
      isShowCart: false,
    });
  };

  addCart = (product) => {
    const cartItem = {
      product: product,
      quantity: 1,
    };
    const cloneCart = [...this.state.cart];
    const foundCart = cloneCart.find((item) => product.id === item.product.id);
    if (foundCart) foundCart.quantity++;
    else {
      cloneCart.push(cartItem);
    }
    this.setState({
      cart: cloneCart,
    });
    console.log(cloneCart);
  };

  calcTotalProductInCart = () => {
    const total = this.state.cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    return total;
  };

  deleteCart = () => {
    const cloneCart = [...this.state.cart];
    let checkID = cloneCart.findIndex((item) => item.id === item.product.id);
    cloneCart.splice(checkID, 1);
    this.setState({
      cart: cloneCart,
    });
  };

  upQuantityCart = (id) => {
    const cloneCart = [...this.state.cart];
    let checkID = cloneCart.find((item, index) => item.product.id === id);
    if (checkID) checkID.quantity++;
    this.setState({
      cart: cloneCart,
    });
  };

  downQuantityCart = (id) => {
    const cloneCart = [...this.state.cart];
    let checkID = cloneCart.find((item, index) => item.product.id === id);
    if (checkID) checkID.quantity--;
    this.setState({
      cart: cloneCart,
    });
  };

  totalProduct = () => {
    const totals = this.state.cart.reduce((total, item) => {
      return total + item.quantity * item.product.price;
    }, 0);
    return totals;
  };

  render() {
    return (
      <Container>
        <button
          onClick={this.showCart}
          className="btn btn-info position-fixed"
          style={{top: "10px", right: "10px"}}
        >
          <i
            className="fa fa-shopping-bag mr-2"
            style={{fontSize: "1.5rem"}}
          ></i>
          <span
            className="text-dark"
            style={{
              border: "2px dashed black",
              padding: "2px 6px",
              fontSize: "20px",
              fontWeight: "bold",
              boxShadow: "2px 2px 8px 5px white",
            }}
          >
            {this.calcTotalProductInCart()}
          </span>
        </button>
        <Row>{this.renderProducts()}</Row>
        {this.state.isShowCart && (
          <Cart
            totalProduct={this.totalProduct}
            upQuantityCart={this.upQuantityCart}
            downQuantityCart={this.downQuantityCart}
            deleteCart={this.deleteCart}
            cart={this.state.cart}
            closeCart={this.closeCart}
          />
        )}
        {this.state.isSelectItem ? (<ShoesDetails   item={this.state.isSelectItem} />):null}
      </Container>
    );
  }
}
