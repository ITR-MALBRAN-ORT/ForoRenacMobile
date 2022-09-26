// New born´s condition
export const Condition = Object.freeze({
  alive: Symbol('Alive'),
  dead: Symbol('Dead'),
});
// New born´s birth gender
export const Gender = Object.freeze({
  male: Symbol('Male'),
  female: Symbol('Female'),
});
// New born´s parent type
export const ParentType = Object.freeze({
  father: Symbol('Father'),
  mother: Symbol('Mother'),
});

// Case's Status
export const StatusCase = Object.freeze({
  waitForStudies: Symbol('Waiting For Studies'),
  sended: Symbol('Sended'),
  classified: Symbol('Classified'),
  draft: Symbol('Draft'),
});
