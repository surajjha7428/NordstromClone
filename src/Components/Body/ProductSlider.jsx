import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.css"


const ProductSlider = () => {
  const products = [
    {
      id: 1,
      name: "Tory Burch",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRI8dX1TyGB_VoAUPQxPSPe0haOKcxuPIspWReQjKtFqjEIpl6",
      price: "INR 31,388.39",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Stuart Weitzman",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWs_-KaptewYh9vrfFwCQP24SMYgjhp1G47Vgrnd5tqF1v8-k",
      price: "INR 2,288.39",
      rating: 4.0,
    },
    {
      id: 3,
      name: "Calson",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQ7DQqQ48VrjDLoacW8pKCTWZXQX0w5D7ar-ZElUUmCpfNrs3",
      price: "INR 10,388.39",
      rating: 4.0,
    },
    {
      id: 4,
      name: "Tory Burch",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSdUMlhdUIJHZ_oJVT3jZlTU9fbmnuBzK56o66H4q4PGtDMsnei",
      price: "INR 8,328.39",
      rating: 4.0,
    },
    {
      id: 5,
      name: "Birkenstock",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdowN2fZrJjj4PM0F-2_dKJqXva4B56JJAxXPTVw_slvXw5Rz",
      price: "INR 20,178.39",
      rating: 4.0,
    },

 
    {
      id: 6,
      name: "HOUSE OF CB",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSRZsTyoQJTmtf33yZYMHOnAx7mExKSdJIDul-XicXsRpF_k-5w",
      price: "INR 9,278.39",
      rating: 4.0,
    },
    {
      id: 7,
      name: "Tory Burch",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSXwVayPjQws67xHdV1ZU7ki2c3NY_g-93Sd8A9qumPNPgL-dX1",
      price: "INR 15,238.22",
      rating: 4.0,
    },
    {
      id: 8,
      name: "TKEES",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVpq_V6K6I-f_TlqEb1L0anQ-MNvLFk6-IgXcbDsR8RMl7KaS1",
      price: "$INR 11,237.54",
      rating: 4.0,
    },
    {
      id: 9,
      name: "Birkenstock",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUVMXmmEUDp0xlqC-rqnt1H2hTPw4hAm6b_yDBSmNpBvzeG9O",
      price: "INR 14,298.39",
      rating: 4.0,
    },
    {
      id: 10,
      name: "Billabony",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6E4v3nOwaZ7zJ0bMqTTGirsO7qIYQcIggwW-WSnvK7sAm1v8k",
      price: "INR 12,348.73",
      rating: 4.0,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };
  // ----------------------------Explore--------------------------
  const explore = [
    {
      id: 1,
      name: "The Monthly Edit with Rickie: Mix & Match Seaside Style",
      image:
        "https://n.nordstrommedia.com/it/0b1edb53-e5cd-4c6a-a8e9-bd2e0455ff8c.jpeg?h=860&w=644",
      button: "Shop Now",
    },
    {
      id: 2,
      name: "The Edit: 5 Essential Pieces for Your Summer Work Wardrobe",
      image:
        "https://n.nordstrommedia.com/it/48580b28-8de9-4e14-820c-62ccee2e98af.jpeg?h=854&w=640",

      button: "Shop Now",
    },
    {
      id: 3,
      name: "The Blended Wardrobe Style Trending for Summer",
      image:
        "https://n.nordstrommedia.com/it/e2b9c7e5-37ad-42ec-9c69-1158b3777699.jpeg?h=854&w=640",
      price: "INR 10,388.39",
      button: "Shop Now",
    },
    {
      id: 4,
      name: "3 Ways to Style Denim Shorts This Summer",
      image:
        "https://n.nordstrommedia.com/it/884da532-3382-4b42-9bff-6a6b739d11b6.jpeg?h=854&w=640",
      price: "INR 31,388.39",
      button: "Shop Now",
    },
    {
      id: 5,
      name: "The Edit: 10 Types of Summer Dresses to Keep in Your Closet",
      image:
        "https://n.nordstrommedia.com/it/bef55237-3784-422f-a652-67c2cd4836b3.jpeg?h=854&w=640",
      button: "Shop Now",
    },
    {
      id: 6,
      name: "The One: 3 Ways to Wear a One-Piece Swimsuit",
      image:
        "https://n.nordstrommedia.com/it/a1e49a12-1fd5-46fa-b58d-7085e4c73f79.jpeg?h=854&w=640",
      button: "Shop Now",
    },
  ];

  
  const setting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  // ------------------------Explore The Thread Ends----------------------


  // ---------------------------Another Product Slider----------------------
  const Anotherproducts = [
    {
      id: 1,
      name: "Bugatchi",
      image:
        "https://n.nordstrommedia.com/id/sr3/5a11cf4c-f70f-483f-a24d-93a68aa2d475.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 31,388.39",
      rating: 4.5,
    },
    {
      id: 2,
      name: "HOKA",
      image:
        "https://n.nordstrommedia.com/id/sr3/d48f5a63-e4a3-4b07-87e9-ddfaa9d61f33.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 2,288.39",
      rating: 4.0,
    },
    {
      id: 3,
      name: "Melin",
      image:
        "https://n.nordstrommedia.com/id/sr3/035f1681-372e-4bcb-8d99-009bafcd7d90.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 10,388.39",
      rating: 4.0,
    },
    {
      id: 4,
      name: "Tumi",
      image:
        "https://n.nordstrommedia.com/id/sr3/614c6188-0675-46e3-8614-b9bb2b794613.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 8,328.39",
      rating: 4.0,
    },
    {
      id: 5,
      name: "Bosca",
      image:
        "https://n.nordstrommedia.com/id/sr3/621c3c76-bdf2-4ee3-a123-87e3958738cc.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 20,178.39",
      rating: 4.0,
    },

    {
      id: 6,
      name: "Vuori",
      image:
        "https://n.nordstrommedia.com/id/sr3/7d134beb-e813-4472-9559-d15d71ec7837.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 9,278.39",
      rating: 4.0,
    },
    {
      id: 7,
      name: "Polo Ralph Lauren",
      image:
        "https://n.nordstrommedia.com/id/sr3/597e1ce6-8e23-42c4-9a91-02b6b4954c67.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 15,238.22",
      rating: 4.0,
    },
    {
      id: 8,
      name: "Emporio Armani",
      image:
        "https://n.nordstrommedia.com/id/sr3/116ebbda-c8b6-43bf-92f5-11ac0c3d14ea.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "$INR 11,237.54",
      rating: 4.0,
    },
    {
      id: 9,
      name: "The Art of Shaving",
      image:
        "https://n.nordstrommedia.com/id/sr3/d6538847-6637-48ba-9859-d08043c3e96a.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 14,298.39",
      rating: 4.0,
    },
    {
      id: 10,
      name: "Briggs & Riley",
      image:
        "https://n.nordstrommedia.com/id/sr3/36072d18-2468-4d8e-aa56-eaa8342cf97c.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 12,348.73",
      rating: 4.0,
    },
    {
      id: 11,
      name: "Rodd & Gunn",
      image:
        "https://n.nordstrommedia.com/id/sr3/6d6dd848-3c54-4010-89d9-d87395537f37.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 31,388.39",
      rating: 4.5,
    },
    {
      id: 12,
      name: "The Art of Shaving",
      image:
        "https://n.nordstrommedia.com/id/sr3/8621d886-50ec-4cf2-b50a-be758b4516a7.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 2,288.39",
      rating: 4.0,
    },
    {
      id: 13,
      name: "Robert Barakett",
      image:
        "https://n.nordstrommedia.com/id/sr3/035f1681-372e-4bcb-8d99-009bafcd7d90.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 10,388.39",
      rating: 4.0,
    },
    {
      id: 14,
      name: "Nike",
      image:
        "https://n.nordstrommedia.com/id/sr3/237cd18f-6e37-44a6-9fdb-b60317c65358.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 8,328.39",
      rating: 4.0,
    },
    {
      id: 15,
      name: "ARMANI beauty",
      image:
        "https://n.nordstrommedia.com/id/sr3/84881b78-4e18-42fd-800e-78351a824f17.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 20,178.39",
      rating: 4.0,
    },

    {
      id: 16,
      name: "Cole Haan",
      image:
        "https://n.nordstrommedia.com/id/sr3/821b649e-593f-4bcb-a9c2-a72e770f99e4.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 9,278.39",
      rating: 4.0,
    },
    {
      id: 17,
      name: "Stanley",
      image:
        "https://n.nordstrommedia.com/id/sr3/0ba21b3a-6dbe-40da-9f2f-5df5f3667791.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 15,238.22",
      rating: 4.0,
    },
    {
      id: 18,
      name: "Johnston & Murphy",
      image:
        "https://n.nordstrommedia.com/id/sr3/20b028bd-d2ab-4f2e-8d27-5fa1cd9ad0c3.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "$INR 11,237.54",
      rating: 4.0,
    },
    {
      id: 19,
      name: "Nordstrom",
      image:
        "https://n.nordstrommedia.com/id/sr3/01232951-87ae-4483-b7b1-2672c24b0345.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 20,178.39",
      rating: 4.0,
    },

    {
      id: 20,
      name: "Polo Ralph Lauren",
      image:
        "https://n.nordstrommedia.com/id/sr3/a5435780-dcb1-4b03-a80e-bc458f2a00e7.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 9,278.39",
      rating: 4.0,
    },
    {
      id: 21,
      name: "TravisMathew",
      image:
        "https://n.nordstrommedia.com/id/sr3/3620db71-599a-48a1-b1eb-5eaeade0d346.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 15,238.22",
      rating: 4.0,
    },
    {
      id: 22,
      name: "New Markdown",
      image:
        "https://n.nordstrommedia.com/id/sr3/acd232f5-1b76-4e33-9c01-3ea48bd03d3c.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "$INR 11,237.54",
      rating: 4.0,
    },
  ];
  
  // -------------------------------one more slider----------------------------
  const OneMoreSlider = [
    {
      id: 1,
      name: "Bugatchi",
      image:
        "https://n.nordstrommedia.com/id/sr3/e6aabb6a-d8f2-47b8-bb39-faef5d3bfcbe.jpeg?q=45&dpr=2&h=365.31&w=230",
      price: "INR 31,388.39",
      rating: 4.5,
    },
    {
      id: 2,
      name: "HOKA",
      image:
        "https://n.nordstrommedia.com/id/sr3/ca721ac7-90e5-4e8d-bccf-cfd50694ccd7.jpeg?q=45&dpr=2&h=365.31&w=230",
      price: "INR 2,288.39",
      rating: 4.0,
    },
    {
      id: 3,
      name: "Melin",
      image:
        "https://n.nordstrommedia.com/id/sr3/0aa31b96-af27-44ef-8094-e9af20e3f872.jpeg?q=45&dpr=2&h=365.31&w=230",
      price: "INR 10,388.39",
      rating: 4.0,
    },
    {
      id: 4,
      name: "Tumi",
      image:
        "https://n.nordstrommedia.com/id/sr3/9b28ea62-694f-4009-81de-efef4b509012.jpeg?q=45&dpr=2&h=365.31&w=230",
      price: "INR 8,328.39",
      rating: 4.0,
    },
    {
      id: 5,
      name: "Bosca",
      image:
        "https://n.nordstrommedia.com/id/sr3/a873d258-312d-4009-bd2c-0b648b0fe41d.jpeg?q=45&dpr=2&h=365.31&w=230",
      price: "INR 20,178.39",
      rating: 4.0,
    },

    {
      id: 6,
      name: "Vuori",
      image:
        "https://n.nordstrommedia.com/id/sr3/af5a3006-b805-4587-8d59-bf467ef86064.jpeg?q=45&dpr=2&h=365.31&w=230",
      price: "INR 9,278.39",
      rating: 4.0,
    },
    
    {
      id: 11,
      name: "Rodd & Gunn",
      image:
        "https://n.nordstrommedia.com/id/sr3/6d6dd848-3c54-4010-89d9-d87395537f37.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 31,388.39",
      rating: 4.5,
    },
   
    {
      id: 13,
      name: "Robert Barakett",
      image:
        "https://n.nordstrommedia.com/id/sr3/035f1681-372e-4bcb-8d99-009bafcd7d90.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 10,388.39",
      rating: 4.0,
    },
    {
      id: 14,
      name: "Nike",
      image:
        "https://n.nordstrommedia.com/id/sr3/237cd18f-6e37-44a6-9fdb-b60317c65358.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 8,328.39",
      rating: 4.0,
    },
    
    {
      id: 18,
      name: "Johnston & Murphy",
      image:
        "https://n.nordstrommedia.com/id/sr3/20b028bd-d2ab-4f2e-8d27-5fa1cd9ad0c3.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "$INR 11,237.54",
      rating: 4.0,
    },
    {
      id: 19,
      name: "Nordstrom",
      image:
        "https://n.nordstrommedia.com/id/sr3/01232951-87ae-4483-b7b1-2672c24b0345.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 20,178.39",
      rating: 4.0,
    },

    {
      id: 20,
      name: "Polo Ralph Lauren",
      image:
        "https://n.nordstrommedia.com/id/sr3/a5435780-dcb1-4b03-a80e-bc458f2a00e7.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 9,278.39",
      rating: 4.0,
    },
    {
      id: 21,
      name: "TravisMathew",
      image:
        "https://n.nordstrommedia.com/id/sr3/3620db71-599a-48a1-b1eb-5eaeade0d346.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      price: "INR 15,238.22",
      rating: 4.0,
    },
    
  ];

  const Setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderstars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };
  
  
  const Excess = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images3 = [
    "https://n.nordstrommedia.com/it/31df62cb-75bc-4ed8-8ae4-a2439266c504.jpeg?h=200&w=1608",
    "https://n.nordstrommedia.com/it/6b8bfe42-413a-4fc2-92e1-e4ca300d609c.jpeg?h=200&w=1608",
  ];
  const ettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images1 = [
    "https://i.ibb.co/jgPP34F/Screenshot-2024-06-05-at-1-39-21-AM.png",
    "https://i.ibb.co/ym9MFq9/Screenshot-2024-06-05-at-1-40-03-AM.png",
  ];
  const Sttings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const Images1 = [
    "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzA4MTk3NjI0LjIyNzA3MjcwNTk5LmpwZWc=.jpg?w=400&h=400&fit=cover",
    "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzEwMTYwMjYyLjAxMDcxNDU1Nzc2MC5qcGVn.jpg?w=640&h=640&fit=cover",
    "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzEwMTcwMDA1LjkxODg4Mzg3OTQ2My5qcGVn.jpg?w=640&h=640&fit=cover",
    "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzA5OTU3MzY1LjA5OTkyNTg1NTI2Ny5qcGVn.jpg?w=640&h=640&fit=cover",
    "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzEwMDQyNTQzLjU0Nzc2MTU5MjEuanBlZw==.jpg?w=640&h=640&fit=cover",
    "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzA4MDIwODQ5LjkwNjc3ODg5MDE4LmpwZWc=.jpg?w=640&h=640&fit=cover",
    "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjkxMjg1MTk4LjU3ODcwOTgyMzM2NS5qcGVn.jpg?w=640&h=640&fit=cover",
    "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjk2MzQwNjU0LjE1MDE0MzE3NTg0Ni5qcGVn.jpg?w=640&h=640&fit=cover",
  ];
 
    

  const SEETINGs = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  }
  return (
    <div className="product-slider">
      <Slider {...Setting}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p className="rating">{renderstars(product.rating)}</p>
          </div>
        ))}
      </Slider>

      {/* // ------------------------Top Categories for You---------------------------// */}

      <div className="threeX">
        <img
          src="https://n.nordstrommedia.com/it/cd3e3c53-3fd1-47b9-9f48-d5d24997e1bd.png?h=200&w=1608"
          alt=""
        />
      </div>
      <div className="anni">
        <img
          src="https://n.nordstrommedia.com/it/3dcaaab1-6cf2-4ce6-8d69-6737a849cafa.gif?h=400&w=1608"
          alt=""
        />
      </div>
      <div className="Tops">
        <h2>Top Categories for You</h2>
        <div className="category">
          <div className="tops">
            <img
              src="https://n.nordstrommedia.com/it/8337beab-462c-484f-984d-bf4d615a9d38.jpeg?h=975&w=790"
              alt=""
            />
            <p>Vacation Shoes</p>
          </div>
          <div className="tops">
            <img
              src="https://n.nordstrommedia.com/it/6c0ec267-59a7-41b9-8736-e1a46721a9d6.jpeg?h=382&w=402"
              alt=""
            />
            <p>Raffia Sandals</p>
          </div>
          <div className="tops">
            <img
              src="https://n.nordstrommedia.com/it/da80f4b6-2184-4d8c-a962-3281c7c2a3e7.jpeg?h=382&w=402"
              alt=""
            />
            <p>Designer Mules & Slides</p>
          </div>
          <div className="tops">
            <img
              src="https://n.nordstrommedia.com/it/9832731f-19b7-4115-a224-946f58dda41c.jpeg?h=382&w=402"
              alt=""
            />

            <p>Designer Getaway</p>
          </div>
        </div>
        <div className="image-slider">
          <Slider {...Excess}>
            {images3.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="slider-image small-slider-image"
                />
              </div>
            ))}
          </Slider>
        </div>
        {/* <h2> Explore <Span>The Thread </Span></h2>  */}
        {/* ------------------------------Explore------------------------------ */}
        <div className="Explore">
          <h2>Explore The Thread </h2>
          <Slider {...setting}>
            {explore.map((explore) => (
              <div key={explore.id} className="explore-card">
                <img src={explore.image} alt={explore.name} />
                <h3>{explore.name}</h3>
                <div className="Shop">
                  <p> {explore.button}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* -----------------------Gifts For Dads-------------------------- */}
        <div className="Gifts">
          <div className="gift">
            <div className="Btn">
              <p>Shop Father's Day Gifts</p>
            </div>
            <div className="Btn">
              <p>Explore our Gift Guide</p>
            </div>
          </div>
        </div>
        {/* -------------------------Another product slider---------------------- */}
        <div className="Ena">
          <ul>
            <li>Essentials</li>
            <li>Grooming & Cologne Gifts</li>
            <li>Our Favorite Gifts</li>
            <li>Accessories</li>
          </ul>
        </div>
        <Slider {...settings}>
          {Anotherproducts.map((product) => (
            <div key={product.id} className="product-card card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <p className="rating">{renderStars(product.rating)}</p>
            </div>
          ))}
        </Slider>
        {/* ---------------------Ted Baker London----------------- */}
        <div className="ted">
          <img
            src="https://i.ibb.co/r68PDL6/Screenshot-2024-06-03-at-8-00-32-PM.png"
            alt=""
          />
        </div>
        <h3 className="great">Great Deals on What You Love</h3>
        <p className="items">
          Items similar to what you've browsed are on sale
        </p>
        {/* ----------------------------one more Slider--------------------------- */}
        <Slider {...settings}>
          {OneMoreSlider.map((product) => (
            <div key={product.id} className="product-card card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <p className="rating">{renderStars(product.rating)}</p>
            </div>
          ))}
        </Slider>
        <div className="threeX">
          <img
            src="https://i.ibb.co/sqNZ4zV/Screenshot-2024-06-04-at-7-57-41-PM.png"
            alt=""
          />
        </div>
        <div className="Image-slider">
          <Slider {...ettings}>
            {images1.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="slider-image"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="bold-line"></div>
        {/* -----------------------SHOP BY CATEGORY----------------------- */}
        <div className="shop">
          <h3>SHOP BY CATEGORY</h3>
          <div className="product">
            <div className="option">
              <img
                src="https://n.nordstrommedia.com/it/faef8aa8-a56c-4f76-a6ea-83aa4f9ed8de.jpeg?h=365&w=268"
                alt=""
              />
              <h6>Women</h6>
            </div>
            <div className="option">
              <img
                src="https://n.nordstrommedia.com/it/ec97af11-73d9-427b-ab70-d45672a4200f.jpeg?h=365&w=268"
                alt=""
              />
              <h6>Men</h6>
            </div>
            <div className="option">
              <img
                src="https://n.nordstrommedia.com/it/4d92ea5c-3ce4-489f-b7a8-428df27a978a.jpeg?h=365&w=268"
                alt=""
              />
              <h6>Kids</h6>
            </div>
            <div className="option">
              <img
                src="https://n.nordstrommedia.com/it/6a9d4aba-1f3d-40b5-9a76-79178cd878f4.jpeg?h=365&w=268"
                alt=""
              />
              <h6> Designer</h6>
            </div>
            <div className="option">
              <img
                src="https://n.nordstrommedia.com/it/20e09c89-3eaa-4b22-9694-594fd3364eb0.jpeg?h=365&w=268"
                alt=""
              />
              <h6>Home</h6>
            </div>
            <div className="option">
              <img
                src="https://n.nordstrommedia.com/it/460b88e4-6338-4d63-acbf-851a5c751ebd.jpeg?h=365&w=268"
                alt=""
              />
              <h6>Beauty & Fragrance</h6>
            </div>
          </div>
        </div>
        {/* ---------------------CURRENTLY LOVING------------------- */}
        <div className="loving">
          <h3>CURRENTLY LOVING</h3>
          <h5>
            Explore favorite looks from Instagram. Tag @Nordstrom to show us
            your finds.
          </h5>
          <div className="pic">
            <Slider {...Sttings}>
              {Images1.map((image, index) => (
                <div key={index} className="slider-image-container">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="slider-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* -----------------------Trending near you---------------------------- */}
        <div className="trending">
          <h3>Trending Near You</h3>
          <h5>The most-viewed items by shoppers in your area</h5>
          <div className="last">
            <div className="There">
              <img
                src="https://n.nordstrommedia.com/it/faef8aa8-a56c-4f76-a6ea-83aa4f9ed8de.jpeg?h=365&w=268"
                alt=""
              />
              <p>Lancôme</p>
              <h6> INR 5,201.50</h6>
            </div>
            <div className="There">
              <img
                src="https://n.nordstrommedia.com/it/ec97af11-73d9-427b-ab70-d45672a4200f.jpeg?h=365&w=268"
                alt=""
              />
              <p>CHANEL</p>
              <h6> INR 3,221.50</h6>
            </div>
            <div className="There">
              <img
                src="https://n.nordstrommedia.com/it/4d92ea5c-3ce4-489f-b7a8-428df27a978a.jpeg?h=365&w=268"
                alt=""
              />
              <p>CHANEL</p>
            </div>
            <div className="There">
              <img
                src="https://n.nordstrommedia.com/it/6a9d4aba-1f3d-40b5-9a76-79178cd878f4.jpeg?h=365&w=268"
                alt=""
              />
              <p>Yves Saint Laurent</p>
              <h6> INR 1,211.50</h6>
            </div>
            <div className="There">
              <img
                src="https://n.nordstrommedia.com/it/20e09c89-3eaa-4b22-9694-594fd3364eb0.jpeg?h=365&w=268"
                alt=""
              />
              <p>Caslon®</p>
              <h6> INR 2,921.50</h6>
            </div>
            <div className="There">
              <img
                src="https://n.nordstrommedia.com/it/460b88e4-6338-4d63-acbf-851a5c751ebd.jpeg?h=365&w=268"
                alt=""
              />
              <p>ARMANI beauty</p>
              <h6> INR 10,221.50</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ProductSlider;

