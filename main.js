// Homework 3A

const sumAndProduct = (n) => {
    if (n <= 2) {
        throw new Error("The number n must be greater than 2.");
      }
  
    const sumFirstTwo = 1 + 2;
  
    let productRemaining = 1;
    for (let i = 3; i <= n; i++) {
      productRemaining *= i;
    }
  
    return [sumFirstTwo, productRemaining];
  }

  const n = 6;
  console.log(sumAndProduct(n)); // Output: [3, 360]
  

// Homework 3B

  const getCityFromUser = (user) => {
    const { banks } = user || {};
    const { address } = (banks && banks[2]) || {};
    const { city } = address || {};
    return city;
  };
  
  const user1 = {
    banks: [
      { address: { city: "City1" } },
      { address: { city: "City2" } },
      { address: { city: "City3" } }
    ]
  };
  
  const user2 = {
    banks: [
      { address: { city: "CityA" } },
      { address: { city: "CityB" } }
    ]
  };
  
  console.log(getCityFromUser(user1)); // Output: "City3"
  console.log(getCityFromUser(user2)); // Output: undefined
  



  // Homework 3C

  const cloneObjectWithSameValues = (obj) => {
    const newObj = {};
    
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        newObj[key] = cloneObjectWithSameValues(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    
    return { ...newObj };
  };
  
  const originalObject = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      postalCode: "10001"
    }
  };
  
  const clonedObject = cloneObjectWithSameValues(originalObject);
  
  console.log(clonedObject);
  