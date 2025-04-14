function introduce(city, country) {
    console.log(`I am ${this.name} from ${city}, ${country}`);
  }
  const person = {
    name: "Meena"
  };
  introduce.apply(person, ["Delhi", "India"]); 