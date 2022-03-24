import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Shop from "./Component/Shop/Shop";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

function App() {
  // Fetch The Products
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  const addToCartHandle = (pd) => {
    const newCart = [...cart, pd];
    setCart(newCart);
  };

  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);

  // Modal State
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;

  // Modal Functions
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  return (
    <div>
      <Header openModal={openModal}></Header>

      <div className="card-container container">
        {guns.map((gun) => (
          <Shop
            product={gun}
            key={gun.id}
            addToCartHandle={addToCartHandle}
          ></Shop>
        ))}

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {cart.map((item) => (
            <div className="items">
              <h2>{item.name}</h2>
              <p>Price : ${item.price}</p>
              <p>Bullet Type : {item.bullet}</p>
              <p>Capacity : {item.capacity}</p>
              <p>Action : {item.action}</p>
            </div>
          ))}
          <button onClick={closeModal}>close</button>
        </Modal>
      </div>
    </div>
  );
}

export default App;
