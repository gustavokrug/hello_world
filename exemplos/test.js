const axios = require("axios").default

const message = "hello world!"

const getDogFacts = async () => {
  const response = await axios.get("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all")
  
  const data = response.data.map((element,index) => {
    return index
  });

  const result = data.reduce((acc,num) => {
    acc += num
    return acc
  },0 )
  //console.log(data.findIndex("The oldest known dog bones were found in Asia and date as far back as 10,000 B.C. The first identifiable dog breed appeared about 9000 B.C. and was probably a type of Greyhound dog used for hunting."))
  // console.log(data.filter(element => element.includes("Ozzy")))
  // console.log(result)

  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  
  fruits.push("Kiwi");

  console.log(fruits.join(" / "))
  
  // console.log("The oldest known dog bones were found in Asia and date as far back as 10,000 B.C. The first identifiable dog breed appeared about 9000 B.C. and was probably a type of Greyhound dog used for hunting.".split(" "))
}

getDogFacts()