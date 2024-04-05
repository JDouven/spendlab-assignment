import { FullNamePipe } from './full-name.pipe';

describe('FullNamePipe', () => {
  it('transforms a Client into their full name', () => {
    const pipe = new FullNamePipe();
    const result = pipe.transform({
      id: 1,
      name: 'John',
      surname: 'Doe',
      email: '',
      streetName: '',
      postalCode: '',
      houseNumber: '',
      city: '',
      country: '',
    });
    expect(result).toEqual('John Doe');
  });
});
