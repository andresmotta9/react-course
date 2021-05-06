describe('Tests in the file demo.test.js', () => {
    test( 'Strings should be equal', () => {
        // 1. initialization
        const message = 'Hello world';
    
        // 2. estímulo
        const message2 = `Hello world`;
    
        // 3. look behaviour
        expect( message ).toBe ( message2 );
    });
})
