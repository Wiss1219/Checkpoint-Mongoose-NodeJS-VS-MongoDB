const Person = require('../models/Person');

// Create and save a person
exports.createAndSavePerson = async (done) => {
  try {
    const person = new Person({
      name: "John Doe",
      age: 25,
      favoriteFoods: ["pizza", "pasta"]
    });
    const data = await person.save();
    done(null, data);
  } catch (err) {
    done(err);
  }
};

// Create many people
exports.createManyPeople = async (arrayOfPeople, done) => {
  try {
    const people = await Person.create(arrayOfPeople);
    done(null, people);
  } catch (err) {
    done(err);
  }
};

// Find people by name
exports.findPeopleByName = async (personName, done) => {
  try {
    const people = await Person.find({ name: personName });
    done(null, people);
  } catch (err) {
    done(err);
  }
};

// Find one by food
exports.findOneByFood = async (food, done) => {
  try {
    const person = await Person.findOne({ favoriteFoods: food });
    done(null, person);
  } catch (err) {
    done(err);
  }
};

// Find by ID
exports.findPersonById = async (personId, done) => {
  try {
    const person = await Person.findById(personId);
    done(null, person);
  } catch (err) {
    done(err);
  }
};

// Update person
exports.findEditThenSave = async (personId, done) => {
  try {
    const person = await Person.findById(personId);
    person.favoriteFoods.push("hamburger");
    const updatedPerson = await person.save();
    done(null, updatedPerson);
  } catch (err) {
    done(err);
  }
};

// Find and update
exports.findAndUpdate = async (personName, done) => {
  try {
    const updatedPerson = await Person.findOneAndUpdate(
      { name: personName },
      { age: 20 },
      { new: true }
    );
    done(null, updatedPerson);
  } catch (err) {
    done(err);
  }
};

// Remove by ID
exports.removeById = async (personId, done) => {
  try {
    const removedPerson = await Person.findByIdAndRemove(personId);
    done(null, removedPerson);
  } catch (err) {
    done(err);
  }
};

// Remove many
exports.removeManyPeople = async (done) => {
  try {
    const result = await Person.deleteMany({ name: "Mary" });
    done(null, result);
  } catch (err) {
    done(err);
  }
};

// Chain query
exports.queryChain = async (done) => {
  try {
    const data = await Person.find({ favoriteFoods: "burrito" })
      .sort({ name: 1 })
      .limit(2)
      .select("-age");
    done(null, data);
  } catch (err) {
    done(err);
  }
};