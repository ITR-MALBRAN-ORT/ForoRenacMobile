import {ParentType} from './Enums';
import {Parent} from './Parent';

export class Father extends Parent {
  constructor({
    age,
    name,
    lastName,
    phone,
    currentDiseases,
    previousDiseases,
  }) {
    super({
      parentType: ParentType.father,
      age,
      name,
      lastName,
      phone,
      currentDiseases,
      previousDiseases,
    });
  }
}
