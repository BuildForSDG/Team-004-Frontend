import app from '../src/app';

describe('app module', () => {
  test('it exists', async () => {
    expect(app).toBeDefined();
  });

  test('it returns app className is App', async () => {
    const result = await app();
    const response = result.props.className;
    expect(response).toBe('App');
  });
});
