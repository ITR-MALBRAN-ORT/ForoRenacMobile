import {ParentType} from './Enums';
import {Parent} from './Parent';

export class Mother extends Parent {
  constructor({
    age,
    name,
    lastName,
    phone,
    currentDiseases,
    previousDiseases,
    pregnancyDiseases,
  }) {
    super({
      parentType: ParentType.mother,
      age,
      name,
      lastName,
      phone,
      currentDiseases,
      previousDiseases,
    });
    this.pregnancyDiseases = pregnancyDiseases ? pregnancyDiseases : [];
  }
}
