import {ParentType, StatusCase} from './Enums';
import uuid from 'react-native-uuid';
import {Malformation} from './Malformation';
import {NewBorn} from './NewBorn'
import {Parent} from './Parent';
import { Mother } from './Mother';
import { Father } from './Father';

// * -----------  EXPORT HERE USEFUL FUNCTIONS ------------
export const createCaseModel = ({registrantId, maternityId}) => {
  //TODO validate required fields throw Error
  return new Case({registrantId, maternityId});
};

// * ---------------------- CLASSES -----------------------
export class Case {
  constructor({
    id,
    registrantId,
    maternityId,
    newBorn,
    mother,
    father,
    malformations,
    studyCase,
    images,
    comments,
    created,
    status,
  }) {
    this.id = id ? id : uuid.v4();
    this.registrantId = registrantId;
    this.maternityId = maternityId;
    this.newBorn = newBorn ? newBorn : new NewBorn({});
    this.mother = mother ? mother : new Mother({});
    this.father = father ? father : new Father({});
    this.malformations = malformations ? malformations : [];
    this.studyCase = studyCase ? studyCase : null;
    this.images = images ? images : [];
    this.comments = comments ? comments : null;
    this.created = created ? created : Date.now().toString();
    this.status = status ? status : StatusCase.draft;
  }
  addMalformation({type, name}) {
    this.malformations.push(new Malformation({type, name}));
  }
}


