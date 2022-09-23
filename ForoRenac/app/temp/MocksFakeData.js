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

const fakeCases = [fakeCase, fakeCase];

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
