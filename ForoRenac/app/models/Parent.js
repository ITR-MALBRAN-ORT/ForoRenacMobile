export class Parent {
  constructor({
    parentType,
    age,
    name,
    lastName,
    phone,
    currentDiseases,
    previousDiseases,
  }) {
    this.parentType = parentType ? parentType : null;
    this.age = age ? age : null;
    this.name = name ? name : null;
    this.lastName = lastName ? lastName : null;
    this.phone = phone ? phone : null;
    this.currentDiseases = currentDiseases ? currentDiseases : [];
    this.previousDiseases = previousDiseases ? previousDiseases : [];
  }
}
