const products = [
  {
    id: 1,
    name: "product1",
    description: "Description",
    color: "Black",
    price:  100,
    imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUFXFcq5js4l_VPPJGyknV6ZvbDM1gcpk5w&usqp=CAU",
    imgSrc2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUFXFcq5js4l_VPPJGyknV6ZvbDM1gcpk5w&usqp=CAU",
  },
  {
    id: 2,
    name: "product2",
    description: "Description",
    color: "Black",
    price:  1000,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUFXFcq5js4l_VPPJGyknV6ZvbDM1gcpk5w&usqp=CAU",
        imgSrc2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:dfgdANd9GcQLUFXFcq5js4l_VPPJGyknV6ZvbDM1gcpk5w&usqp=CAU",
  },
  {
    id: 3,
    name: "product3",
    description: "Description",
    color: "Black",
    price:  1000,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUFXFcq5js4l_VPPJGyknV6ZvbDM1gcpk5w&usqp=CAU",
        imgSrc2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:dfgdANd9GcQLUFXFcq5js4l_VPPJGyknV6ZvbDM1gcpk5w&usqp=CAU",
  },

  {
    id: 4,
    name: "product4",
    description: "Description",
    color: "Black",
    price:  1000,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUFXFcq5js4l_VPPJGyknV6ZvbDM1gcpk5w&usqp=CAU",
        imgSrc2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:dfgdANd9GcQLUFXFcq5js4l_VPPJGyknV6ZvbDM1gcpk5w&usqp=CAU",
  },
  {
    id: 5,
    name: "product5",
    description: "Description",
    color: "Black",
    price:  1000,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUFXFcq5js4l_VPPJGyknV6ZvbDM1gcpk5w&usqp=CAU",
        imgSrc2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:dfgdANd9GcQLUFXFcq5js4l_VPPJGyknV6ZvbDM1gcpk5w&usqp=CAU",
  },
];

export const getProducts = () => {
  return products;
};
export const getProduct = (id) => {
  return products.find((product) => product.id === id);
};
