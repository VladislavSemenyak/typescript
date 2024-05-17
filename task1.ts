const flattenConstructor = () => {
    return (dict: {[key: string]: any }) => Object.values(dict);
    };
    
    const flat1 = flattenConstructor();
    const r1 = flat1({ a: 1, b: 2 });
    console.log(r1);
    
    const flat2 = flattenConstructor();
    const r2 = flat2({ a: '1', b: '2' });
    console.log(r2);