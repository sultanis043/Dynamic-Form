import React, { useEffect, useState } from "react";
// import "./App.css";
import Card from "./Card";

function CardApp() {
    const tempData = [
        {
            id: 1,
            imageURL:
                "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
            name: "Black Polo",
            type: "Polo",
            price: 250,
            currency: "INR",
            color: "Black",
            gender: "Men",
            quantity: 3,
        },
        {
            id: 2,

            imageURL:
                "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
            name: "Blue Polo",
            type: "Polo",
            price: 350,
            currency: "INR",
            color: "Blue",
            gender: "Women",
            quantity: 3,
        },
        {
            id: 3,
            imageURL:
                "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
            name: "Pink Polo",
            type: "Polo",
            price: 350,
            currency: "INR",
            color: "Pink",
            gender: "Women",
            quantity: 6,
        },
        {
            id: 4,
            imageURL:
                "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
            name: "Black Hoodie",
            type: "Hoodie",
            price: 500,
            currency: "INR",
            color: "Black",

            gender: "Men",
            quantity: 2,
        },
        {
            id: 5,
            imageURL:
                "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
            color: "Green",
            name: "Green Polo",
            type: "Polo",
            price: 250,
            currency: "INR",
            gender: "Men",
            quantity: 1,
        },
    ];
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [productData, setProductData] = useState(tempData);
    const [cartData, setCartData] = useState([]);
    const [selectedFrameworks, setSelectedFrameworks] = useState([]);
    const [isCartClicked, setIsCartClicked] = useState(false);

    const filters = {
        colors: [
            ...new Set(
                productData?.map((item) => {
                    return item.color;
                })
            ),
        ],
        geneder: [
            ...new Set(
                productData?.map((item) => {
                    return item.gender;
                })
            ),
        ],
        price: ["0-100", "100-250", "250-500"],
        type: [
            ...new Set(
                productData?.map((item) => {
                    return item.type;
                })
            ),
        ],
    };

    useEffect(() => {
        if (searchTerm?.length > 1) {
            // const results = filterProductData();
            const results = productData.filter((item) => {
                return (
                    item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.name
                        ?.toString()
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    item.color.toLowerCase().includes(searchTerm.toLowerCase())
                );
            });
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchTerm, productData]);

    const addToCart = (product) => {
        const newData = [...productData];
        const index = newData.findIndex((item) => item.id === product.id);

        if (product.quantity === product.items) {
            alert("This item cannot be added more");
        } else {
            if (!newData[index].items) {
                newData[index].items = 1;
                setProductData(newData);
            } else {
                newData[index].items = newData[index].items + 1;
                setProductData(newData);
            }
        }
    };

    const decreaceCount = (product) => {
        const newData = [...productData];
        const index = newData.findIndex((item) => item.id === product.id);

        if (product.quantity === 0) {
            console.log("reached");
        } else {
            newData[index].items = newData[index].items - 1;
            setProductData(newData);
        }
    };

    const removeItemFromCart = (product) => {
        const newData = [...productData];
        const index = newData.findIndex((item) => item.id === product.id);

        if (searchResults?.length > 0) {
            const searchNewData = [...searchResults];
            const searchIndex = searchNewData.findIndex(
                (item) => item.id === product.id
            );
            searchNewData[searchIndex].items = 0;
            setProductData(searchNewData);
        }
        newData[index].items = 0;
        setProductData(newData);
    };

    useEffect(() => {
        const getCartItems = productData.filter((item) => item?.items > 0);
        setCartData(getCartItems);
    }, [productData]);

    const handleSelect = (framework, type) => {
        const isSelected = selectedFrameworks.includes(framework);
        const newSelection = isSelected
            ? selectedFrameworks.filter((currentTech) => currentTech !== framework)
            : [...selectedFrameworks, framework];
        setSelectedFrameworks(newSelection);
        if (type === "color") {
            const filterProducts = productData.filter((item) => {
                return item.color === framework;
            });
            setSearchResults(filterProducts);
        } else if (type === "type") {
            const filterProducts = productData.filter((item) => {
                return item.type === framework;
            });
            setSearchResults(filterProducts);
        } else if (type === "geneder") {
            const filterProducts = productData.filter((item) => {
                return item.gender === framework;
            });
            setSearchResults(filterProducts);
        } else {
            setSearchResults([]);
        }
    };

    useEffect(() => {
        const result = new Set();
        if (searchResults.length) {
            searchResults?.forEach((item) => {
                result.add(item.color);
                result.add(item.gender);
                result.add(item.type);
            });

            setSelectedFrameworks([...result]);
        } else {
            setSelectedFrameworks([]);
        }
    }, [searchResults]);

    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cartData?.length; i++) {
            totalVal += cartData[i].price * cartData[i].items;
        }
        return totalVal;
    };

    return (
        // <Container className="App">
        <>
            <div className="header">
                <div className="store_name">Textile store</div>
                <div className="nav_links">
                    <div
                        onClick={() => setIsCartClicked(false)}
                        className={!isCartClicked ? "clicked" : "not_clicked"}
                    >
                        Products
                    </div>
                    <div
                        onClick={() => setIsCartClicked(true)}
                        className={isCartClicked ? "clicked" : "not_clicked"}
                    >
                        Cart
                    </div>
                </div>
            </div>
            {!isCartClicked ? (
                <>
                    <div className="search_items">
                        <input
                            placeholder="Search products.."
                            type="search"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="main_page">
                        <div className="filter">
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h4>Color</h4>
                                {filters.colors.map((framework, index) => {
                                    const isSelected = selectedFrameworks?.includes(framework);
                                    return (
                                        <label key={index}>
                                            <input
                                                type="checkbox"
                                                checked={isSelected}
                                                onChange={() => handleSelect(framework, "color")}
                                            />

                                            <span className="ml-2 text-base text-gray-500 font-heading">
                                                {framework}
                                            </span>
                                        </label>
                                    );
                                })}
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h4>Type</h4>
                                {filters.type.map((framework, index) => {
                                    const isSelected = selectedFrameworks.includes(framework);
                                    return (
                                        <label key={index}>
                                            <input
                                                type="checkbox"
                                                checked={isSelected}
                                                onChange={() => handleSelect(framework, "type")}
                                            />

                                            <span className="ml-2 text-base text-gray-500 font-heading">
                                                {framework}
                                            </span>
                                        </label>
                                    );
                                })}
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h4>Geneder</h4>
                                {filters.geneder.map((framework, index) => {
                                    const isSelected = selectedFrameworks.includes(framework);
                                    return (
                                        <label key={index}>
                                            <input
                                                type="checkbox"
                                                checked={isSelected}
                                                onChange={() => handleSelect(framework, "geneder")}
                                            />

                                            <span className="ml-2 text-base text-gray-500 font-heading">
                                                {framework}
                                            </span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="items">
                            {searchResults?.length
                                ? searchResults?.map((item) => {
                                    return (
                                        <Card
                                            details={item}
                                            addToCart={addToCart}
                                            removeItemFromCart={removeItemFromCart}
                                            decreaceCount={decreaceCount}
                                        />
                                    );
                                })
                                : productData?.map((item) => {
                                    return (
                                        <Card
                                            details={item}
                                            addToCart={addToCart}
                                            removeItemFromCart={removeItemFromCart}
                                            decreaceCount={decreaceCount}
                                        />
                                    );
                                })}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <h3>Cart Items</h3>
                    {cartData?.length ? (
                        cartData.map((item) => {
                            return (
                                <div>
                                    {/* <CartContainer className="cart"> */}
                                    <div className="section_1">
                                        <div className="photo">
                                            <img src={item.imageURL} alt="Not provided" />
                                        </div>
                                        <div className="info">
                                            <div className="name">{item.name}</div>
                                            <div className="price">Rs {item.price}</div>
                                        </div>
                                    </div>
                                    <div className="section_2">
                                        <div className="add">
                                            <div
                                                className="remove"
                                                onClick={() => decreaceCount(item)}
                                            >
                                                -
                                            </div>
                                            <div>{item?.items}</div>
                                            <div className="add" onClick={() => addToCart(item)}>
                                                +
                                            </div>
                                        </div>
                                        <button onClick={() => removeItemFromCart(item)}>
                                            Delete
                                        </button>
                                    </div>
                                    {/* </CartContainer> */}
                                </div>
                            );
                        })
                    ) : (
                        <h2>Cart is empty add items in dash board</h2>
                    )}
                    {total() && <h3>Total : Rs {total()}</h3>}
                </>
            )}
        </>
        // </Container>
    );
}

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   margin: 1rem;
//   .header {
//     display: flex;
//     justify-content: space-between;
//     padding: 1rem;
//     background: #8080806e;
//     align-items: center;
//     .nav_links {
//       display: flex;
//       gap: 1rem;
//       .clicked {
//         border-bottom: 1px solid;
//         cursor: pointer;
//       }
//       .not_clicked {
//         cursor: pointer;
//       }
//     }
//   }
//   .search_items {
//     display: flex;
//     justify-content: center;
//     input {
//       width: 40%;
//       padding: 8px;
//       border-radius: 5px;
//       border: 1px solid grey;
//     }
//   }
//   .main_page {
//     display: flex;
//     gap: 1rem;
//     justify-content: space-between;
//     width: 100%;
//     .filter {
//       flex-basis: 25%;
//       border: 1px solid grey;
//       border-radius: 5px;
//     }
//     .items {
//       display: flex;
//       flex-basis: 75%;
//       gap: 1rem;
//       flex-wrap: wrap;
//     }
//   }
// `;

// // const CartContainer = styled.div`
// //   display: flex;
// //   justify-content: space-between;
// //   width: 40%;
// //   padding: 10px;
// //   .section_1 {
// //     display: flex;
// //     gap: 10px;
// //     align-items: center;
// //     .photo {
// //       width: 50px;
// //       height: 100%;
// //       background: red;
// //       border-radius: 5px;
// //       img {
// //         width: 100%;
// //         height: 100%;
// //       }
// //     }
// //     .info {
// //       .name {
// //         font-weight: bold;
// //       }
// //     }
// //   }
// //   .section_2 {
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //     gap: 10px;
// //     padding: 10px;
// //     .add {
// //       display: flex;
// //       gap: 10px;
// //       .add,
// //       .remove {
// //         background: grey;
// //         width: 19px;
// //         display: flex;
// //         align-items: center;
// //         justify-content: center;
// //         border-radius: 5px;
// //         color: white;
// //         cursor: pointer;
// //       }
// //     }
// //     button {
// //       border: none;
// //       padding: 5px;
// //       background: black;
// //       color: white;
// //       border-radius: 5px;
// //       cursor: pointer;
// //     }
// //   }
// // `;

export default CardApp;
