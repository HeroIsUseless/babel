必须用yarn。。。用npm报错。。。
必须要先make watch，然后才能yarn test:curry，否则代码不生效

在 babel/parser 中，如果 token 的 type 是语法关键字，则以 _ 开头，例如这里的 function。
```
tt._function, tt.star, ...
```
首先是语句解析 parseStatementContent，通过一个 switch 语句尝试通过开头的关键字来识别语句类型，当 token 为 tt._function 时，交给 parseFunctionStatement 处理

当语句不以语句关键字或左花括号`{`开头时（即未匹配到上述 switch 的任何一条 case），则 @babel/parser 会尝试将其作为表达式来解析，解析的结果存在两张可能，1. LabeledStatement 2. ExpressionStatement。

this.next() 把处理的 token 移动到下一个位置以处理接下来的内容。最后也是最关键的一步，this.eat(tt.star)，
this.eat 做了两件事情：
* 当前指针所在 token 的类型(type) 是否和入参一致，返回布尔值表示匹配与否
* 如果匹配，则继续移动指针到下一个 token
```
parseFunction(node){
  // ...
  node.generator = this.eat(tt.star);
  // ...
}
```
```
eat(type: TokenType): boolean {
  if (this.state.type === type) {
    this.next();
    return true;
  } else {
    return false;
  }
}
```
因为我们当前的 token 正是 tt.star，所以最后生成的 AST 在这个节点上的 generator 属性为 true，这和本文一开始举例的 AST 完全一致。

正如上面的示例，在语法分析的过程中，编译器需要不断地移动指针和与特定语法特性尝试匹配来处理全部的 token，
这里对这些方法做一些归纳:

* match(type: TokenType): boolean : 当前指针所在的 token 是否和入参的 token 匹配 (type 一致)
* next(): void : 将指针移动到下一个 token
* eat(type: TokenType): boolean : 返回当前指针所在的 token 是否和入参的 token 匹配(type 一致)，
如果是则调用 next()
* lookahead(): LookaheadState : 仅获取下一个 token 而不移动指针，
常用于对当前 token 的处理逻辑需要取决于下一个 token 的情况

经过上面 parse 阶段后，已经拿到了 AST，Transform 这个阶段要做的事情，就是针对编译目标语言对 AST 进行修改，
babel 的所有插件都工作在这个阶段，一般编译器通过访问者模式来处理这个过程，
AST 具体的修改逻辑由访问者 Visitor 对象提供，编译器会对 AST 进行深度优先遍历，
当遇到 type 匹配的节点时，调用Visitor 对象中与之对应的方法:
```
const MyVisitor = {
  Identifier(path) {
    // 每当遇到 {type='Identifier'} 节点时，该方法都将被调用
  }
};
```
上面的示例中有一个参数，它包含了节点的元信息、关联节点信息，事实上在大多数情况下，
很少出现单独对一个节点进行处理的情况，各种操作都需要考虑到和它关联的节点，
path 参数提供了这些信息，同时它也提供了各种对节点操作的方法，像是删除、修改、创建节点等等

Generate 是编译器的最后一步，根据修改后的 AST ，生成目标语言。

这里的 finishOp(type: TokenType, size: number): void 是完成一个 token 解析后需要调用的方法，
它记录当前的 token 信息，将解析位置向后移动。

babel-parser 的执行流程并不是先解析完所有的 tokens 再交给语法分析处理

词法分析和语法分析是交替进行的，也就是: 词法分析 --- 一个token --- 语法分析 --- 
下一次词法分析 --- 下一个 token --- 下一次语法分析。

从结构上来看，babel-parser 的各个部分也不是组合关系，而是通过层层继承来扩展 Parser 的能力，其继承关系如下:
Parser -> StatementParser -> ExpressionParser -> LValParser -> NodeUtils -> UtilParser -> Tokenizer -> ParserErrors -> CommentsParser -> BaseParser

像上面代码使用到的 next() 在 Tokenizer 实现，其调用主要是在 StatementParser 和 ExpressionParser 中。

只想要 token 而跳过语法分析部分该怎么做？
对于 babel来说这一点是无法做到的，但有些场景可能仅仅需要词法分析，例如语法高亮，额外又无用的语法分析过程只能带来额外的性能开销。

babel插件部分如何处理？

第三件事，我该怎么打包，使用到项目中呢？
<p align="center">
  <a href="https://babeljs.io/">
    <img alt="babel" src="https://raw.githubusercontent.com/babel/logo/master/babel.png" width="546">
  </a>
</p>

<p align="center">
  The compiler for writing next generation JavaScript.
</p>

<p align="center">
  <a href="https://gitpod.io/#https://github.com/babel/babel"><img alt="Gitpod ready-to-code" src="https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod"></a>
</p>
<p align="center">
    <a href="https://www.npmjs.com/package/@babel/core"><img alt="v7 npm Downloads" src="https://img.shields.io/npm/dm/@babel/core.svg?maxAge=43200&label=v7%20downloads"></a>
  <a href="https://www.npmjs.com/package/babel-core"><img alt="v6 npm Downloads" src="https://img.shields.io/npm/dm/babel-core.svg?maxAge=43200&label=v6%20downloads"></a>
</p>
<p align="center">
  <a href="https://github.com/babel/babel/actions/workflows/ci.yml"><img alt="GitHub CI Status" src="https://github.com/babel/babel/actions/workflows/ci.yml/badge.svg?branch=main"></a>
  <a href="https://codecov.io/github/babel/babel"><img alt="Coverage Status" src="https://img.shields.io/codecov/c/github/babel/babel/main.svg?maxAge=43200"></a>
  <a href="https://slack.babeljs.io/"><img alt="Slack Status" src="https://slack.babeljs.io/badge.svg"></a>
  <a href="https://twitter.com/intent/follow?screen_name=babeljs"><img alt="Follow on Twitter" src="https://img.shields.io/twitter/follow/babeljs.svg?style=social&label=Follow"></a>
</p>

<h2 align="center">Supporting Babel</h2>

<p align="center">
  <a href="#backers"><img alt="Backers on Open Collective" src="https://opencollective.com/babel/backers/badge.svg" /></a>
  <a href="#sponsors"><img alt="Sponsors on Open Collective" src="https://opencollective.com/babel/sponsors/badge.svg" /></a>
  <a href="https://medium.com/friendship-dot-js/i-peeked-into-my-node-modules-directory-and-you-wont-believe-what-happened-next-b89f63d21558"><img alt="Business Strategy Status" src="https://img.shields.io/badge/business%20model-flavortown-green.svg"></a>
</p>

Babel (pronounced ["babble"](https://soundcloud.com/sebmck/how-to-pronounce-babel))  is a community-driven project used by many companies and projects, and is maintained by a group of [volunteers](https://babeljs.io/team). If you'd like to help support the future of the project, please consider:

- Giving developer time on the project. (Message us on [Twitter](https://twitter.com/babeljs) or [Slack](https://slack.babeljs.io/) for guidance!)
- Giving funds by becoming a sponsor on [Open Collective](https://opencollective.com/babel) or [GitHub](https://github.com/sponsors/babel/) (which goes to our Open Collective account)!

## Sponsors

Our top sponsors are shown below! [[Become a sponsor](https://opencollective.com/babel#sponsor)]

<a href="https://opencollective.com/babel/sponsor/0/website" target="_blank"><img src="https://opencollective.com/babel/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/babel/sponsor/1/website" target="_blank"><img src="https://opencollective.com/babel/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/babel/sponsor/2/website" target="_blank"><img src="https://opencollective.com/babel/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/babel/sponsor/3/website" target="_blank"><img src="https://opencollective.com/babel/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/babel/sponsor/4/website" target="_blank"><img src="https://opencollective.com/babel/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/babel/sponsor/5/website" target="_blank"><img src="https://opencollective.com/babel/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/babel/sponsor/6/website" target="_blank"><img src="https://opencollective.com/babel/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/babel/sponsor/7/website" target="_blank"><img src="https://opencollective.com/babel/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/babel/sponsor/8/website" target="_blank"><img src="https://opencollective.com/babel/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/babel/sponsor/9/website" target="_blank"><img src="https://opencollective.com/babel/sponsor/9/avatar.svg"></a>
<a href="https://opencollective.com/babel/sponsor/10/website" target="_blank"><img src="https://opencollective.com/babel/sponsor/10/avatar.svg"></a>
<a href="https://opencollective.com/babel/sponsor/11/website" target="_blank"><img src="https://opencollective.com/babel/sponsor/11/avatar.svg"></a>
<a href="https://opencollective.com/babel/sponsor/12/website" target="_blank"><img src="https://opencollective.com/babel/sponsor/12/avatar.svg"></a>
<a href="https://opencollective.com/babel/sponsor/13/website" target="_blank"><img src="https://opencollective.com/babel/sponsor/13/avatar.svg"></a>
<a href="https://opencollective.com/babel/sponsor/14/website" target="_blank"><img src="https://opencollective.com/babel/sponsor/14/avatar.svg"></a>

## Intro

Babel is a tool that helps you write code in the latest version of JavaScript. When your supported environments don't support certain features natively, Babel will help you compile those features down to a supported version.

**In**

```js
// ES2020 nullish coalescing
function greet(input) {
  return input ?? "Hello world";
}
```

**Out**

```js
function greet(input) {
  return input != null ? input : "Hello world";
}
```

Try it out at our [REPL](https://babel.dev/repl#?browsers=defaults%2C%20not%20ie%2011&loose=true&code_lz=GYVwdgxgLglg9mABAcwE4FN1QBQzABxCgEpEBvAKEUQyhFST0KkQH5XEAiACXQBs-cRAHc4qPgBNOAbgoBfIA&shippedProposals=true&sourceType=script&lineWrap=true&presets=env%2Cenv&prettier=true).

## FAQ

### Who maintains Babel?

Mostly a handful of volunteers, funded by you! Please check out our [team page](https://babeljs.io/team)!

### Is there a Babel song?

I'm so glad you asked: [Hallelujah —— In Praise of Babel](SONG.md) by [@angus-c](https://github.com/angus-c), [audio version](https://youtu.be/40abpedBKK8) by [@swyx](https://twitter.com/@swyx). Tweet us your recordings!

### Looking for support?

For questions and support please join our [Slack Community](https://slack.babeljs.io/) (you can [sign up here](https://slack.babeljs.io/) for an invite), ask a question on [Stack Overflow](https://stackoverflow.com/questions/tagged/babeljs), or ping us on [Twitter](https://twitter.com/babeljs).

### Where are the docs?

Check out our website: [babeljs.io](https://babeljs.io/), and report issues/features at [babel/website](https://github.com/babel/website/issues).

### Want to report a bug or request a feature?

Please read through our [CONTRIBUTING.md](CONTRIBUTING.md) and fill out the issue template at [babel/issues](https://github.com/babel/babel/issues)!

### Want to contribute to Babel?

Check out:

- Our [#development](https://babeljs.slack.com/messages/development) Slack channel and say hi! ([sign-up](https://slack.babeljs.io))
- Issues with the [good first issue](https://github.com/babel/babel/labels/good%20first%20issue) and [help wanted](https://github.com/babel/babel/labels/help%20wanted) label. We suggest also looking at the [closed ones](https://github.com/babel/babel/issues?utf8=%E2%9C%93&q=is%3Aclosed+label%3A%22good+first+issue%22) to get a sense of the kinds of issues you can tackle.

Some resources:

- Our [CONTRIBUTING.md](CONTRIBUTING.md) to get started with setting up the repo.
- Our discussions/notes/roadmap: [babel/notes](https://github.com/babel/notes)
- Our progress on TC39 proposals: [babel/proposals](https://github.com/babel/proposals)
- Our blog which contains release posts and explanations: [/blog](https://babeljs.io/blog)
- Our videos page with talks about open source and Babel: [/videos](https://babeljs.io/videos)
- Our [podcast](https://podcast.babeljs.io)

### How is the repo structured?

The Babel repo is managed as a [monorepo](doc/design/monorepo.md) that is composed of many [npm packages](packages/README.md).

## License

[MIT](LICENSE)
