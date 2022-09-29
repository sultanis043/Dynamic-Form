// import styled from "@emotion/styled";
import React from "react";

const Card = (props) => {
  const { details, addToCart, decreaceCount } = props;
  return (
    <Container>
      <div className="image">
        <img src={details?.imageURL} alt="Not provided" />
        <span>{details?.name}</span>
      </div>
      <div className="info">
        <div className="price">Rs{details?.price}</div>
        <div className="add_cart">
          {details?.items > 0 ? (
            <div className="adding">
              <div className="remove" onClick={() => decreaceCount(details)}>
                -
              </div>
              <div className="count">{details?.items}</div>
              <div className="add" onClick={() => addToCart(details)}>
                +
              </div>
            </div>
          ) : (
            <button onClick={() => addToCart(details)}>ADD CART</button>
          )}
        </div>
      </div>
    </Container>
  );
};
// const Container = styled.div`
//   border: 1px solid;
//   padding: 1rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   border-radius: 5px;

//   height: 210px;

//   .image {
//     width: 100%;
//     height: 150px;
//     background: grey;
//     img {
//       width: 100%;
//       height: 100%;
//     }
//   }
//   .info {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-top: 1rem;
//     .price {
//       font-weight: 500;
//     }
//     .add_cart {
//       .adding {
//         background: black;
//         gap: 10px;
//         padding: 5px;
//         display: flex;
//         gap: 10px;
//         width: 50px;
//         justify-content: center;
//         .add,
//         .remove,
//         .count {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 5px;
//           color: white;
//           cursor: pointer;
//         }
//       }
//       button {
//         border: none;
//         padding: 10px;
//         border-radius: 5px;
//         background: black;
//         color: white;
//         cursor: pointer;
//       }
//     }
//   }
// `;

export default Card;
