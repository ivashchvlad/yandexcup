const bem = require('./bem')

test('should be ok', () => {
    expect(bem('block_mod__elem')).toStrictEqual({
        mod: "_", 
        elem: "__", 
    })
})

//block_mod_mod__elem
test('should be ok', () => {
    expect(bem('block_mod_mod__elem')).toStrictEqual({
        mod: "_", 
        elem: "__", 
    })
})