export const MOCKS_CASES = {
  setCases: () => ({payload: fakeCases}),
  setFilteredCases: () => ({payload: fakeCases}),
  addCase: () => ({payload: fakeCases[0]}),
};

export const MOCKS_PERIOD = {
  setPeriod: () => ({payload: fakePeriod}),
};

export const MOCKS_CASE = {
  setCase: () => ({payload: fakeCases[0]}),
};

export const MOCKS_AUTH = {
  setToken: () => ({payload: fakeBearerToken}),
  setUser: () => ({payload: fakeUser}),
};

export const MOCKS_MATERNITIES = {
  setMaternities: () => ({payload: fakeMaternities}),
};

// * ------------ FAKE DATA ---------------

const fakeBearerToken = 'some-Bearer-Token';

const fakeUser = {
  id: '3AS2D333',
  email: 'some@some.com',
  first_name: 'John',
  last_name: 'Doe',
  avatar: 'https://reactjs.org/logo-og.png',
};

const fakePeriod = {
  year: '2022',
  month: '10',
  liveBirths: 200,
  stillBirths: 200,
};
import {Case} from '../models/Case';
import {Condition, Gender, ParentType} from '../models/Enums';
import { Father } from '../models/Father';
import {Maternity} from '../models/Maternity';
import { Mother } from '../models/Mother';
import {NewBorn} from '../models/NewBorn';

const maternity1 = new Maternity({name: 'Hospital del Sur'});
const maternity2 = new Maternity({name: 'Hospital Central'});

const fakeMaternities = [maternity1, maternity2];

// * ----------------- CREATE MODELS USING classes ----------------

// fake case 2
const fakeCaseOne = new Case({
  registrantId: fakeUser.id,
  maternityId: maternity1.id,
});
const fakeNewBorn = new NewBorn({
  placeOfBirth: 'Capital',
  weight: 4,
  gender: Gender.female,
  condition: Condition.dead,
  isPremature: true,
});
const fakeMother = new Mother({
  parentType: ParentType.mother,
  age: 22,
  name: 'Jessica',
  lastName: 'Gomez',
  phone: '112233',
});
const fakeFather = new Father({
  parentType: ParentType.father,
  age: 30,
  name: 'Juan',
  lastName: 'Perez',
  phone: '445566',
});
fakeCaseOne.newBorn = fakeNewBorn;
fakeCaseOne.mother = fakeMother;
fakeCaseOne.father = fakeFather;
fakeCaseOne.addMalformation({type: 0, name: 'Pilonidal defects'});
console.log('fakeCaseOne', fakeCaseOne);

// fake case 2
const fakeCaseTwo = new Case({
  registrantId: fakeUser.id,
  maternityId: maternity1.id,
});
const fakeNewBorn2 = new NewBorn({
  placeOfBirth: 'Capital',
  weight: 4,
  gender: Gender.female,
  condition: Condition.dead,
  isPremature: true,
});
const fakeMother2 = new Mother({
  parentType: ParentType.mother,
  age: 22,
  name: 'Flor',
  lastName: 'Valencia',
  phone: '112233',
});
const fakeFather2 = new Father({
  parentType: ParentType.father,
  age: 30,
  name: 'Thiago',
  lastName: 'Salas',
  phone: '445566',
});
fakeCaseTwo.newBorn = fakeNewBorn2;
fakeCaseTwo.mother = fakeMother2;
fakeCaseTwo.father = fakeFather2;
fakeCaseTwo.addMalformation({type: 0, name: 'Kidney hypolasia'});


const fakeCases = [fakeCaseOne, fakeCaseTwo];
// TODO remove this later
const fakeCase = {
  infoGeneral: {
    id: 1223,
    fecha: '05/06',
    estado: 0,
  },
  datosMadre: {
    nombre: 'Luciana Rojas',
    tel: '1130303030',
    email: 'lucianarojas@mail.com',
  },
  datosNacido: {
    nombre: '-',
    nacido: 'Vivo',
    sexo: 'Masculino',
    malforma: 'Tronco Arterioso',
  },
  malforma: {
    tipo: 'Tronco Arterioso',
    desc: 'Ocurre cuando el vaso sanguíneo que sale del corazón del bebé en gestación no se separa completamente durante el crecimiento y deja conectadas a la aorta y la arteria pulmonar.',
  },
};
