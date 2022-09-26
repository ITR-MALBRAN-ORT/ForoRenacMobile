import uuid from 'react-native-uuid';

export class Maternity {
  constructor({id, name}) {
    this.id = id ? id : uuid.v4();
    this.name = name ? name : null;
  }
}
