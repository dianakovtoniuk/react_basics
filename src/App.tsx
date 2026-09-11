import React, {useState}  from 'react'
import Button from './components/button/button'
import Alert from './components/alert/alert';
import ExpandableText from './components/expandableText/expandableText';

export default function App() {

  const [alertVisible, setAlertVisible] = useState(false);

  const [cart, setCart] = useState({
    discount: .1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 1 }
    ]
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map(item =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      )
    });
  };

  return (
    <div>

      {alertVisible && <Alert onClose={()=> setAlertVisible(true)}>My Alert</Alert>}
      
      <Button onClick={() => setAlertVisible(true)}>
        My button
      </Button>


      <div>
        <button onClick={handleClick}>Update Cart</button>
        <ul>
          {cart.items.map(item => (
            <li key={item.id}>
              {item.title} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>

      <ExpandableText maxChars={100}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </ExpandableText>
    </div>
  )
}
