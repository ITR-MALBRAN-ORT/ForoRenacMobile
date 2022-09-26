import {Condition, Gender} from './Enums';

export class NewBorn {
  constructor({
    dateOfBirth,
    placeOfBirth,
    weight,
    gender,
    condition,
    isPremature,
  }) {
    this.dateOfBirth = dateOfBirth ? dateOfBirth : Date.now().toString() ;
    this.placeOfBirth = placeOfBirth ? placeOfBirth : null;
    this.weight = weight ? weight : null;
    this.gender = gender ? gender : Gender.male;
    this.condition = condition ? condition : Condition.alive;
    this.isPremature = isPremature ? isPremature : false;
  }
}
