## Description

simple babel。旨在深入理解babel的词法分析，替换等核心功能。


目前支持支持语法解析,语法转换以及代码生成

## 语法解析
### Statement

- [x] VariableDeclaration
- [x] ClassDeclaration
- [x] FunctionDeclaration
- [x] ExpressionStatement
- [x] BlockStatement
- [x] LabeledStatement
- [x] SwitchStatement
- [x] BreakStatement
- [x] ContinueStatement
- [x] EmptyStatement
- [x] ThrowStatement
- [x] ReturnStatement
- [x] IfStatement
- [x] ForStatement
- [x] ForInStatement
- [x] ForOfStatement
- [x] WhileStatement
- [x] DoWhileStatement
- [x] TryStatement
- [x] DebuggerStatement


### Expression

- [x] thisExpression
- [x] SequenceExpression
- [x] AssignmentExpression
- [x] UpdateExpression
- [x] UnaryExpression
- [x] MemberExpression
- [x] LogicalExpression
- [x] BinaryExpression
- [x] CallExpression
- [x] FunctionExpression
- [x] VariableDeclarator
- [x] ObjectExpression
- [x] ArrayExpression
- [x] ConditionalExpression
- [x] NewExpression
- [x] ArrowFunctionExpression
- [x] Property
- [x] Literal
- [x] Identifier
- [x] AssignmentPattern

## 语法转换以及代码生成

- [x] arrowFunctionExpression
- [x] block-bind
- [x] class
- [x] default-parameters
- [x] modules
- [x] property-method
- [x] spread
- [x] templateLiteral
- [x] forOf
## How to test
 
```bash
npm install
```
 
```bash
npm run test
```

## Usage

### CLI

Compile the file `a.js` and output it to stdout

$ ./bin/babel ./example/a.js

Compile the file `a.js` and output it to `a.compiled.js`

$ ./bin/babel ./example/a.js -o ./example/a.compiled.js

Compile the file and output it to dist directory

$ ./bin/babel ./example/a.js -d dist

Compile the directory and output it to dist directory

$ ./bin/babel ./example -d dist
