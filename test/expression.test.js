const acorn = require('../acorn');

test('test expression', () => {
    expect(acorn.parse('var a=1;')).toEqual(
        {
            type: 'Program',
            start: 0,
            body:
                [{
                    type: 'VariableDeclaration',
                    start: 0,
                    declarations:
                        [{
                            type: 'VariableDeclarator',
                            start: 4,
                            id: {type: 'Identifier', start: 4, name: 'a', end: 5},
                            init: {type: 'Literal', start: 6, value: 1, raw: '1', end: 7},
                            end: 7
                        }],
                    end: 8
                }],
            end: 8
        }
    );

    expect(acorn.parse('this\n')).toEqual(
        {
            type: 'Program',
            start: 0,
            body:
                [{
                    type: 'expressionStatement',
                    start: 0,
                    expression: {type: 'thisExpression', start: 0, end: 4},
                    end: 4
                }],
            end: 5
        }
    );

    expect(acorn.parse('x = []')).toEqual(
        {
            type: 'Program',
            start: 0,
            body:
                [{
                    type: 'expressionStatement',
                    start: 0,
                    expression:
                        {
                            start: 0,
                            type: 'AssignmentExpression',
                            left: {type: 'Identifier', start: 0, value: 'x', end: 1},
                            operator: '=',
                            right: {type: 'ArrayExpression', start: 4, elements: [], end: 6},
                            end: 6
                        },
                    end: 6
                }],
            end: 6
        }
    );

    expect(acorn.parse('x = [ 42, ]')).toEqual(
        {
            type: 'Program',
            start: 0,
            body:
                [{
                    type: 'expressionStatement',
                    start: 0,
                    expression:
                        {
                            start: 0,
                            type: 'AssignmentExpression',
                            left: {type: 'Identifier', start: 0, value: 'x', end: 1},
                            operator: '=',
                            right:
                                {
                                    type: 'ArrayExpression',
                                    start: 4,
                                    elements: [{type: 'Literal', start: 6, value: 42, raw: '42', end: 8}],
                                    end: 11
                                },
                            end: 11
                        },
                    end: 11
                }],
            end: 11
        }
    );

    expect(acorn.parse('x = [ 1, 2, 3, ]')).toEqual(
        {
            type: 'Program',
            start: 0,
            body:
                [{
                    type: 'expressionStatement',
                    start: 0,
                    expression:
                        {
                            start: 0,
                            type: 'AssignmentExpression',
                            left: {type: 'Identifier', start: 0, value: 'x', end: 1},
                            operator: '=',
                            right:
                                {
                                    type: 'ArrayExpression',
                                    start: 4,
                                    elements:
                                        [{type: 'Literal', start: 6, value: 1, raw: '1', end: 7},
                                            {type: 'Literal', start: 9, value: 2, raw: '2', end: 10},
                                            {type: 'Literal', start: 12, value: 3, raw: '3', end: 13}],
                                    end: 16
                                },
                            end: 16
                        },
                    end: 16
                }],
            end: 16
        }
    );

    expect(acorn.parse('x = [ ,, 42 ]')).toEqual(
        {
            type: 'Program',
            start: 0,
            body:
                [{
                    type: 'expressionStatement',
                    start: 0,
                    expression:
                        {
                            start: 0,
                            type: 'AssignmentExpression',
                            left: {type: 'Identifier', start: 0, value: 'x', end: 1},
                            operator: '=',
                            right:
                                {
                                    type: 'ArrayExpression',
                                    start: 4,
                                    elements:
                                        [null,
                                            null,
                                            {type: 'Literal', start: 9, value: 42, raw: '42', end: 11}],
                                    end: 13
                                },
                            end: 13
                        },
                    end: 13
                }],
            end: 13
        }
    );


    expect(acorn.parse('x = {}')).toEqual(
        {
            type: 'Program',
            start: 0,
            body:
                [{
                    type: 'expressionStatement',
                    start: 0,
                    expression:
                        {
                            start: 0,
                            type: 'AssignmentExpression',
                            left: {type: 'Identifier', start: 0, value: 'x', end: 1},
                            operator: '=',
                            right: {type: 'ObjectExpression', start: 4, properties: [], end: 6},
                            end: 6
                        },
                    end: 6
                }],
            end: 6
        }
    );

    expect(acorn.parse('x = { }')).toEqual(
        {
            type: 'Program',
            start: 0,
            body:
                [{
                    type: 'expressionStatement',
                    start: 0,
                    expression:
                        {
                            start: 0,
                            type: 'AssignmentExpression',
                            left: {type: 'Identifier', start: 0, value: 'x', end: 1},
                            operator: '=',
                            right: {type: 'ObjectExpression', start: 4, properties: [], end: 7},
                            end: 7
                        },
                    end: 7
                }],
            end: 7
        }
    );

    expect(acorn.parse('a= { if: 42 }')).toEqual(
        {
            type: 'Program',
            start: 0,
            body:
                [{
                    type: 'expressionStatement',
                    start: 0,
                    expression:
                        {
                            start: 0,
                            type: 'AssignmentExpression',
                            left: {type: 'Identifier', start: 0, value: 'a', end: 1},
                            operator: '=',
                            right:
                                {
                                    type: 'ObjectExpression',
                                    start: 3,
                                    properties:
                                        [{
                                            type: 'Property',
                                            start: 5,
                                            method: false,
                                            shorthand: false,
                                            computed: false,
                                            kind: 'init',
                                            key: {type: 'Identifier', start: 5, name: 'if', end: 7},
                                            value: {type: 'Literal', start: 9, value: 42, raw: '42', end: 11},
                                            end: 11
                                        }],
                                    end: 13
                                },
                            end: 13
                        },
                    end: 13
                }],
            end: 13
        }
    );

    expect(acorn.parse('a= { true: 42 }')).toEqual(
        {
            type: 'Program',
            start: 0,
            body:
                [{
                    type: 'expressionStatement',
                    start: 0,
                    expression:
                        {
                            start: 0,
                            type: 'AssignmentExpression',
                            left: {type: 'Identifier', start: 0, value: 'a', end: 1},
                            operator: '=',
                            right:
                                {
                                    type: 'ObjectExpression',
                                    start: 3,
                                    properties:
                                        [{
                                            type: 'Property',
                                            start: 5,
                                            method: false,
                                            shorthand: false,
                                            computed: false,
                                            kind: 'init',
                                            key: {type: 'Identifier', start: 5, name: 'true', end: 9},
                                            value: {type: 'Literal', start: 11, value: 42, raw: '42', end: 13},
                                            end: 13
                                        }],
                                    end: 15
                                },
                            end: 15
                        },
                    end: 15
                }],
            end: 15
        }
    );

    expect(acorn.parse('x = { x: 1, x: 2 }')).toEqual(
        {
            type: 'Program',
            start: 0,
            body:
                [{
                    type: 'expressionStatement',
                    start: 0,
                    expression:
                        {
                            start: 0,
                            type: 'AssignmentExpression',
                            left: {type: 'Identifier', start: 0, value: 'x', end: 1},
                            operator: '=',
                            right:
                                {
                                    type: 'ObjectExpression',
                                    start: 4,
                                    properties:
                                        [{
                                            type: 'Property',
                                            start: 6,
                                            method: false,
                                            shorthand: false,
                                            computed: false,
                                            kind: 'init',
                                            key: {type: 'Identifier', start: 6, value: 'x', end: 7},
                                            value: {type: 'Literal', start: 9, value: 1, raw: '1', end: 10},
                                            end: 10
                                        },
                                            {
                                                type: 'Property',
                                                start: 12,
                                                method: false,
                                                shorthand: false,
                                                computed: false,
                                                kind: 'init',
                                                key: {type: 'Identifier', start: 12, value: 'x', end: 13},
                                                value: {type: 'Literal', start: 15, value: 2, raw: '2', end: 16},
                                                end: 16
                                            }],
                                    end: 18
                                },
                            end: 18
                        },
                    end: 18
                }],
            end: 18
        }
    );
});
