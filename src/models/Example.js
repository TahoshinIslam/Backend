export class Example {
  constructor({ id, title }) {
    this.id = id;
    this.title = title;
  }
}

// Example static data
export const examples = [
  new Example({ id: 1, title: 'Hello Model' }),
];