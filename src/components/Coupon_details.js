// import React, { useEffect  , useState} from "react";
// import { useParams } from "react-router-dom";
// import "./Coupon.css";
// import axios from "axios";



//   const [results, setResults] = useState("");
//   useEffect(() => { 
//     let token = localStorage.getItem("token");
//     let config = {
//         headers: {
//           Authorization: "Token " + token,
//           "Content-Type": "multipart/form-data",
//         },
//       };
//       axios.get(`http://127.0.0.1:8000/api/coupon` ,  config).then((res) => {
//         setResults(res.data.data);
//         console.log(res.data.data);

//       });
//     }, []);


//     function Cart(props) {
//       const { cartItems } = props;
    
//       return (
//         <div style={styles.cartContainer}>
//           <h2 style={styles.heading}>Your Cart</h2>
//           <div style={styles.itemsContainer}>
//             {cartItems.map(item => (
//               <div key={item.id} style={styles.itemContainer}>
//                 <img src={item.image} alt={item.name} style={styles.itemImage} />
//                 <div style={styles.itemDetails}>
//                   <h3 style={styles.itemName}>{item.name}</h3>
//                   <p style={styles.itemPrice}>{item.price}</p>
//                   <p style={styles.itemQuantity}>Quantity: {item.quantity}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button style={styles.checkoutButton}>Checkout</button>
//         </div>
//       );
//     }
    
//     const styles = {
//       cartContainer: {
//         padding: '20px',
//         backgroundColor: '#fff',
//         boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
//         borderRadius: '5px',
//         maxWidth: '600px',
//         margin: '0 auto',
//       },
//       heading: {
//         marginBottom: '20px',
//         textAlign: 'center',
//       },
//       itemsContainer: {
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '20px',
//       },
//       itemContainer: {
//         display: 'flex',
//         alignItems: 'center',
//         gap: '20px',
//       },
//       itemImage: {
//         width: '100px',
//         height: '100px',
//         objectFit: 'cover',
//       },
//       itemDetails: {
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '5px',
//       },
//       itemName: {
//         margin: '0',
//         fontSize: '20px',
//       },
//       itemPrice: {
//         margin: '0',
//         color: 'green',
//         fontWeight: 'bold',
//       },
//       itemQuantity: {
//         margin: '0',
//       },
//       checkoutButton: {
//         display: 'block',
//         width: '100%',
//         padding: '10px',
//         backgroundColor: '#4CAF50',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '5px',
//         marginTop: '20px',
//         cursor: 'pointer',
//         fontSize: '18px',
//       },
//     };
    
//     export default Cart;
    