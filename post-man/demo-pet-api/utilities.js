const pets = [];

let nextPetId = 1;

function addOne(name, species, age, color, weight) {
  const newPet = {
    petId: nextPetId++,
    name,
    species,
    age,
    color,
    weight,
  };
  pets.push(newPet);
  return newPet;
}

function findById(petId) {
  return pets.find((pet) => pet.petId == petId);
}

function updateOne(petId, updatedData) {
  const pet = findById(petId);
  if (pet) {
    // Update properties only if provided in updatedData
    if (updatedData.name) {
      pet.name = updatedData.name;
    }
    if (updatedData.species) {
      pet.species = updatedData.species;
    }
    if (updatedData.age) {
      pet.age = updatedData.age;
    }
    if (updatedData.color) {
      pet.color = updatedData.color;
    }
    if (updatedData.weight) {
      pet.weight = updatedData.weight;
    }
    return pet;
  } else {
    return null; // Or throw an error if update fails
  }
}

function deleteOne(petId) {
  const petIdx = pets.findIndex((pet) => pet.petId == petId);
  if (petIdx !== -1) {
    pets.splice(petIdx, 1);
    return true; // Indicate successful deletion
  } else {
    return false; // Indicate pet not found
  }
}

module.exports = {
  pets,
  addOne,
  findById,
  updateOne,
  deleteOne,
};

