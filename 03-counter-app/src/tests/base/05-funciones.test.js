import '@testing-library/jest-dom';
import { getUser, getActiveUser } from '../../base/05-funciones';

describe("Test in 05-funciones", () => {
  test("getUser should return an object", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502", 
    };
    const user = getUser();
    expect( user ).toEqual(testUser);
  });
  
  test("getActiveUser should return an object", () => {
    const name = 'Andres';
    const testUser = {
        uid: 'ABC567',
        username: name,
    };
    const user = getActiveUser(name);
    expect( user ).toEqual(testUser);
  });
});
