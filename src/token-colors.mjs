export default [
    {
        "scope": [
            "emphasis"
        ],
        "settings": {
            "fontStyle": "italic"
        }
    },
    {
        "scope": [
            "strong"
        ],
        "settings": {
            "fontStyle": "bold"
        }
    },
    {
        "scope": [
            "header"
        ],
        "settings": {
            "foreground": "{purple}"
        }
    },
    {
        "scope": [
            "source"
        ],
        "settings": {
            "foreground": "{fg}"
        }
    },
    {
        "name": "Class definitions",
        "scope": [
            "entity.name.type.class"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "Storage Types",
        "scope": [
            "storage.type"
        ],
        "settings": {
            "fontStyle": "italic",
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Instance keywords (this, super, self, etc.)",
        "scope": [
            "keyword.other.this",
            "variable.language",
            "variable.parameter.function.language.special"
        ],
        "settings": {
            "foreground": "{purple}"
        }
    },
    {
        "name": "Inherited classes",
        "scope": [
            "entity.other.inherited-class"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Built-in classes",
        "scope": [
            "support.class.builtin"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "Comments",
        "scope": [
            "comment",
            "punctuation.definition.comment",
            "unused.comment",
            "wildcard.comment"
        ],
        "settings": {
            "foreground": "{comment}"
        }
    },
    {
        "name": "Docstrings",
        "scope": [
            "string.quoted.docstring",
            "string.quoted.docstring punctuation.definition.string.begin",
            "string.quoted.docstring punctuation.definition.string.end"
        ],
        "settings": {
            "foreground": "{comment}"
        }
    },
    {
        "name": "JSDoc comment keywords/classes",
        "scope": [
            "comment keyword.codetag.notation",
            "comment.block.documentation keyword",
            "comment.block.documentation storage.type.class"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "JSDoc-style comment parameters",
        "scope": [
            "comment.block.documentation variable"
        ],
        "settings": {
            "foreground": "{orange}"
        }
    },
    {
        "name": "Constants",
        "scope": [
            "constant"
        ],
        "settings": {
            "foreground": "{purple}"
        }
    },
    {
        "name": "User-defined constants",
        "scope": [
            "variable.other.constant"
        ],
        "settings": {
            "foreground": "{purple}"
        }
    },
    {
        "name": "Constant escape sequences",
        "scope": [
            "constant.character.escape",
            "constant.character.string.escape",
            "constant.regexp"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Dates and timestamps",
        "scope": [
            "constant.other.date",
            "constant.other.timestamp"
        ],
        "settings": {
            "foreground": "{orange}"
        }
    },
    {
        "name": "Built-in constants",
        "scope": [
            "support.variable",
            "variable.other.predefined"
        ],
        "settings": {
            "foreground": "{purple}"
        }
    },
    {
        "name": "Function definitions",
        "scope": [
            "meta.definition.function",
            "meta.definition.method"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "Function parameters",
        "scope": [
            "entity.name.variable.parameter",
            "meta.at-rule.function variable",
            "meta.at-rule.mixin variable",
            "variable.parameter"
        ],
        "settings": {
            "fontStyle": "italic",
            "foreground": "{orange}"
        }
    },
    {
        "name": "Function invocation",
        "scope": [
            "entity.name.function",
            "meta.function-call.generic",
            "meta.function-call.object",
            "meta.function-call.php",
            "meta.function-call.static",
            "meta.method-call.java meta.method",
            "meta.method.groovy",
            "support.function.any-method.lua",
            "keyword.operator.function.infix",
            "support.function.gradient.css",
            "support.function.misc.css",
            "support.function.url.css",
            "support.function.timing-function.css",
            "support.function.transform.css"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "Decorators",
        "scope": [
            "meta.decorator variable.other.readwrite",
            "meta.decorator variable.other.property",
            "meta.decorator variable.other.object"
        ],
        "settings": {
            "foreground": "{purple}"
        }
    },
    {
        "name": "Magic functions",
        "scope": [
            "support.function.magic"
        ],
        "settings": {
            "foreground": "{purple}"
        }
    },
    {
        "name": "Keywords",
        "scope": [
            "keyword",
            "punctuation.definition.keyword"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Keyword \"new\"",
        "scope": [
            "keyword.control.new",
            "keyword.operator.new"
        ],
        "settings": {
            "fontStyle": "bold"
        }
    },
    {
        "name": "Separators",
        "scope": [
            "entity.other.attribute-name.placeholder punctuation",
            "entity.other.attribute-name.pseudo-class punctuation",
            "entity.other.attribute-name.pseudo-element punctuation",
            "meta.object-binding-pattern-variable punctuation.destructuring",
            "punctuation.definition.entity.other.inherited-class",
            "punctuation.separator.dictionary.key-value",
            "punctuation.separator.hash",
            "punctuation.separator.inheritance",
            "punctuation.separator.key-value",
            "punctuation.separator.namespace",
            "punctuation.separator.pointer-access",
            "punctuation.separator.slice",
            "string.unquoted.heredoc punctuation.definition.string",
            "punctuation.separator.annotation",
            "punctuation.accessor"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Variable interpolation operators",
        "scope": [
            "meta.string-contents.quoted.double punctuation.definition.variable",
            "punctuation.definition.interpolation.begin",
            "punctuation.definition.interpolation.end",
            "punctuation.definition.template-expression.begin",
            "punctuation.definition.template-expression.end",
            "punctuation.section.embedded.begin",
            "punctuation.section.embedded.end"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Strings",
        "scope": [
            "string",
            "punctuation.definition.string.begin",
            "punctuation.definition.string.end",
            "punctuation.definition.string.end source.js-ignored-vscode",
            "punctuation.definition.string.end source.css-ignored-vscode",
            "meta.embedded.line.css source.css"
        ],
        "settings": {
            "foreground": "{yellow}"
        }
    },
    {
        "name": "Property Name",
        "scope": [
            "support.type.property-name",
            "punctuation.support.type.property-name.begin",
            "punctuation.support.type.property-name.end"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Storage",
        "scope": [
            "storage"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Types",
        "scope": [
            "entity.name.type"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Generics, templates, and mapped type declarations",
        "scope": [
            "entity.name.type.type-parameter",
            "meta.indexer.mappedtype.declaration entity.name.type",
            "meta.type.parameters entity.name.type"
        ],
        "settings": {
            "foreground": "{orange}"
        }
    },
    {
        "name": "Modifiers",
        "scope": [
            "storage.modifier"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Variables and object properties",
        "scope": [
            "variable",
            "support.variable.property"
        ],
        "settings": {
            "foreground": "{fg}"
        }
    },
    {
        "name": "Destructuring value for alias",
        "scope": [
            "meta.import variable.other.readwrite",
            "meta.object-binding-pattern-variable variable.object.property"
        ],
        "settings": {
            "foreground": "{orange}"
        }
    },
    {
        "name": "Destructuring value alias",
        "scope": [
            "meta.import variable.other.readwrite.alias"
        ],
        "settings": {
            "foreground": "{fg}"
        }
    },
    {
        "name": "C Types",
        "scope": [
            "storage.type.c"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "CoffeeScript interpolation punctuation",
        "scope": [
            "punctuation.section.embedded.coffee"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Destructuring value for alias",
        "scope": [
            "meta.variable.assignment.destructured.object.coffee variable"
        ],
        "settings": {
            "foreground": "{orange}"
        }
    },
    {
        "name": "Destructuring value alias",
        "scope": [
            "meta.variable.assignment.destructured.object.coffee variable variable"
        ],
        "settings": {
            "foreground": "{fg}"
        }
    },
    {
        "name": "C# punctuation bounds",
        "scope": [
            "punctuation.definition.tag.cs"
        ],
        "settings": {
            "foreground": "{fg}"
        }
    },
    {
        "name": "C# Types",
        "scope": [
            "keyword.type.cs",
            "storage.type.cs"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "scope": [
            "meta.diff",
            "meta.diff.header"
        ],
        "settings": {
            "foreground": "{comment}"
        }
    },
    {
        "scope": [
            "markup.inserted"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "scope": [
            "markup.deleted"
        ],
        "settings": {
            "foreground": "{red}"
        }
    },
    {
        "scope": [
            "markup.changed"
        ],
        "settings": {
            "foreground": "{orange}"
        }
    },
    {
        "scope": [
            "invalid"
        ],
        "settings": {
            "foreground": "{red}",
            "fontStyle": "underline italic"
        }
    },
    {
        "scope": [
            "invalid.deprecated"
        ],
        "settings": {
            "foreground": "{fg}",
            "fontStyle": "underline italic"
        }
    },
    {
        "scope": [
            "entity.name.filename"
        ],
        "settings": {
            "foreground": "{yellow}"
        }
    },
    {
        "scope": [
            "markup.error"
        ],
        "settings": {
            "foreground": "{red}"
        }
    },
    {
        "name": "Elixir function definitions",
        "scope": [
            "entity.name.function.elixir"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "Elixir atoms",
        "scope": [
            "constant.other.symbol.elixir",
            "constant.language.symbol.elixir"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Elixir module definitions",
        "scope": [
            "entity.name.type.module.elixir"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "Elixir module variables",
        "scope": [
            "variable.other.readwrite.module.elixir",
            "variable.other.readwrite.module.elixir punctuation.definition.variable.elixir"
        ],
        "settings": {
            "foreground": "{orange}"
        }
    },
    {
        "name": "Elixir separators",
        "scope": [
            "punctuation.separator.method.elixir"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Elixir interpolation",
        "scope": [
            "punctuation.section.embedded.elixir"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Elixir capture ampersands",
        "scope": [
            "variable.other.anonymous.elixir punctuation.definition.variable.elixir"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Go separators",
        "scope": [
            "punctuation.other.period.go",
            "punctuation.other.colon.go"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Go Types",
        "scope": [
            "source.go storage.type"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Go Types",
        "scope": [
            "entity.name.type.go"
        ],
        "settings": {
            "foreground": "{purple}"
        }
    },
    {
        "name": "Go function definitions",
        "scope": [
            "entity.name.function.go"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "Go function invocation",
        "scope": [
            "support.function.go"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "GraphQL separators",
        "scope": [
            "punctuation.colon.graphql"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "GraphQL keys",
        "scope": [
            "variable.graphql",
            "variable.arguments.graphql"
        ],
        "settings": {
            "foreground": "{yellow}"
        }
    },
    {
        "name": "GraphQL types",
        "scope": [
            "support.type.graphql",
            "support.type.builtin.graphql",
            "support.type.enum.graphql",
            "entity.scalar.graphql"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "GraphQL actions (mutations, fragments, queries)",
        "scope": [
            "entity.name.function.graphql"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "GraphQL variables",
        "scope": [
            "meta.selectionset.graphql variable.graphql",
            "variable.parameter.graphql"
        ],
        "settings": {
            "foreground": "{orange}"
        }
    },
    {
        "name": "Groovy storage",
        "scope": [
            "source.groovy storage.type.def"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Groovy Types",
        "scope": [
            "source.groovy storage.type",
            "storage.type.groovy"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Groovy foreground resets",
        "scope": [
            "keyword.operator.navigation.groovy"
        ],
        "settings": {
            "foreground": "{fg}"
        }
    },
    {
        "name": "Haskell Types",
        "scope": [
            "storage.type.haskell"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Haskell Pragmas",
        "scope": [
            "meta.preprocessor.haskell"
        ],
        "settings": {
            "foreground": "{comment}"
        }
    },
    {
        "name": "Haskell foreground resets",
        "scope": [
            "constant.language.empty-list.haskell"
        ],
        "settings": {
            "foreground": "{fg}"
        }
    },
    {
        "name": "JSX Tag Punctuation",
        "scope": [
            "punctuation.definition.tag.begin.js",
            "punctuation.definition.tag.end.js",
            "punctuation.definition.tag.begin.tsx",
            "punctuation.definition.tag.end.tsx"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "HTML tags",
        "scope": [
            "entity.name.tag"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Component tags",
        "scope": [
            "entity.name.tag support.class.component.js",
            "entity.name.tag support.class.component.tsx"
        ],
        "settings": {
            "foreground": "{fg}"
        }
    },
    {
        "name": "Generic selectors",
        "scope": [
            "meta.selector"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Parent selectors (like `&`)",
        "scope": [
            "entity.other.attribute-name.parent-selector"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Attribute selector strings",
        "scope": [
            "meta.attribute-selector.scss"
        ],
        "settings": {
            "foreground": "{yellow}"
        }
    },
    {
        "name": "Attribute selector brackets",
        "scope": [
            "punctuation.definition.attribute-selector.end.bracket.square.scss",
            "punctuation.definition.attribute-selector.begin.bracket.square.scss"
        ],
        "settings": {
            "foreground": "{fg}"
        }
    },
    {
        "name": "HTML/CSS attribute names",
        "scope": [
            "entity.other.attribute-name"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "JSX / TSX / CSS foreground resets",
        "scope": [
            "punctuation.section.embedded.begin.tsx",
            "punctuation.section.embedded.end.tsx",
            "punctuation.section.embedded.begin.jsx",
            "punctuation.section.embedded.end.jsx",
            "punctuation.separator.list.comma.css"
        ],
        "settings": {
            "foreground": "{fg}"
        }
    },
    {
        "name": "CSS Property Keys",
        "scope": [
            "support.constant.property-value.css"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "@media rules",
        "scope": [
            "keyword.control.at-rule.media.scss",
            "keyword.control.at-rule.media.scss punctuation.definition.keyword.scss"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "Java punctuation bounds",
        "scope": [
            "storage.type.generic.java"
        ],
        "settings": {
            "foreground": "{fg}"
        }
    },
    {
        "name": "Java Types",
        "scope": [
            "source.java storage.type"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Java foreground resets",
        "scope": [
            "keyword.operator.dereference.java",
            "storage.modifier.import"
        ],
        "settings": {
            "foreground": "{fg}"
        }
    },
    {
        "name": "JavaScript prototype prop",
        "scope": [
            "support.variable.property.js"
        ],
        "settings": {
            "foreground": "{purple}"
        }
    },
    {
        "name": "JavaScript constant definitions",
        "scope": [
            "variable.other.constant.js"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "JavaScript language classes",
        "scope": [
            "support.class.console.js",
            "support.type.object.module.js",
            "support.class.promise.js",
            "support.constant.json.js"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "JavaScript classes in use",
        "scope": [
            "support.class.js"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "JS function definitions",
        "scope": [
            "meta.object-literal.key.js entity.name.function.js",
            "meta.var.expr.js meta.definition.variable.js entity.name.function.js",
            "meta.definition.property.js entity.name.function.js"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "JS function invocation",
        "scope": [
            "meta.function-call.js"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Makefile interpolation punctuation",
        "scope": [
            "punctuation.definition.variable.makefile"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Makefile keys",
        "scope": [
            "entity.name.function.target.makefile"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Makefile prerequisite names",
        "scope": [
            "meta.scope.prerequisites.makefile"
        ],
        "settings": {
            "foreground": "{yellow}"
        }
    },
    {
        "name": "Underlined markdown",
        "scope": [
            "markup.underline"
        ],
        "settings": {
            "fontStyle": "underline"
        }
    },
    {
        "name": "Bolded markdown",
        "scope": [
            "markup.bold"
        ],
        "settings": {
            "fontStyle": "bold",
            "foreground": "{orange}"
        }
    },
    {
        "name": "Markdown headings",
        "scope": [
            "markup.heading"
        ],
        "settings": {
            "fontStyle": "bold",
            "foreground": "{purple}"
        }
    },
    {
        "name": "Markdown italics",
        "scope": [
            "markup.italic"
        ],
        "settings": {
            "fontStyle": "italic",
            "foreground": "{yellow}"
        }
    },
    {
        "name": "Collections (bullets + lists)",
        "scope": [
            "beginning.punctuation.definition.list.markdown",
            "beginning.punctuation.definition.quote.markdown",
            "punctuation.definition.link.restructuredtext"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Inline code",
        "scope": [
            "markup.inline.raw",
            "markup.raw.restructuredtext"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "Links",
        "scope": [
            "markup.underline.link",
            "markup.underline.link.image"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Link text, image alt text",
        "scope": [
            "meta.link.reference.def.restructuredtext",
            "punctuation.definition.directive.restructuredtext",
            "string.other.link.description",
            "string.other.link.title"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Blockquotes",
        "scope": [
            "entity.name.directive.restructuredtext",
            "markup.quote"
        ],
        "settings": {
            "fontStyle": "italic",
            "foreground": "{yellow}"
        }
    },
    {
        "name": "Horizontal rule",
        "scope": [
            "meta.separator.markdown"
        ],
        "settings": {
            "foreground": "{comment}"
        }
    },
    {
        "name": "Code blocks",
        "scope": [
            "fenced_code.block.language",
            "markup.raw.inner.restructuredtext",
            "markup.fenced_code.block.markdown punctuation.definition.markdown"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "Markdown constants",
        "scope": [
            "punctuation.definition.constant.restructuredtext"
        ],
        "settings": {
            "foreground": "{purple}"
        }
    },
    {
        "name": "Braces in markdown headings",
        "scope": [
            "markup.heading.markdown punctuation.definition.string.begin",
            "markup.heading.markdown punctuation.definition.string.end"
        ],
        "settings": {
            "foreground": "{purple}"
        }
    },
    {
        "name": "Braces in markdown paragraphs",
        "scope": [
            "meta.paragraph.markdown punctuation.definition.string.begin",
            "meta.paragraph.markdown punctuation.definition.string.end"
        ],
        "settings": {
            "foreground": "{fg}"
        }
    },
    {
        "name": "Braces in markdown blockquotes",
        "scope": [
            "markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.begin",
            "markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.end"
        ],
        "settings": {
            "foreground": "{yellow}"
        }
    },
    {
        "name": "Dart String interpolation",
        "scope": [
            "source.dart string.interpolated.single.dart",
            "source.dart string.interpolated.expression.dart"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Dart Primitive storage types",
        "scope": [
            "source.dart storage.type.primitive.dart"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Objective-C Storage",
        "scope": [
            "meta.implementation storage.type.objc",
            "meta.interface-or-protocol storage.type.objc"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Objective-C Types",
        "scope": [
            "meta.protocol-list.objc",
            "meta.return-type.objc",
            "storage.type.objc"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "OCaml Types",
        "scope": [
            "storage.type.ocaml"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Variables and object properties",
        "scope": [
            "constant.other.key.perl"
        ],
        "settings": {
            "foreground": "{fg}"
        }
    },
    {
        "name": "PHP instance keywords",
        "scope": [
            "variable.language punctuation.definition.variable.php"
        ],
        "settings": {
            "foreground": "{purple}"
        }
    },
    {
        "name": "PHP function parameters",
        "scope": [
            "meta.function.arguments variable.other.php"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "PHP interpolation operators",
        "scope": [
            "punctuation.section.embedded.end source.php"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "PHP Types",
        "scope": [
            "storage.type.php"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Powershell punctuation bounds",
        "scope": [
            "keyword.operator.other.powershell",
            "keyword.other.statement-separator.powershell"
        ],
        "settings": {
            "foreground": "{fg}"
        }
    },
    {
        "name": "Powershell Types",
        "scope": [
            "source.powershell entity.other.attribute-name"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Powershell constants",
        "scope": [
            "support.constant"
        ],
        "settings": {
            "foreground": "{purple}"
        }
    },
    {
        "name": "Python Types",
        "scope": [
            "source.python storage.type"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Python support types",
        "scope": [
            "support.type.python"
        ],
        "settings": {
            "fontStyle": "italic",
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Python function invocation",
        "scope": [
            "meta.function-call.python support.type.python",
            "meta.function-call.python support.function.builtin.python"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Python separators",
        "scope": [
            "punctuation.separator.period.python",
            "punctuation.separator.colon.python",
            "punctuation.separator.dict.python",
            "punctuation.section.function.begin.python"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "RegExp string",
        "scope": [
            "string.regexp",
            "constant.other.character-class.set.regexp",
            "constant.character.escape.backslash.regexp"
        ],
        "settings": {
            "foreground": "{yellow}"
        }
    },
    {
        "name": "RegExp Parenthesis",
        "scope": [
            "support.other.parenthesis.regexp",
            "support.other.escape.special.regexp"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "RegExp looks",
        "scope": [
            "keyword.operator.lookahead",
            "keyword.operator.lookbehind"
        ],
        "settings": {
            "foreground": "{red}"
        }
    },
    {
        "name": "RegExp non-capture operators",
        "scope": [
            "punctuation.definition.group.capture.regexp"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "RegExp start and end characters",
        "scope": [
            "string.regexp punctuation.definition.string.begin",
            "string.regexp punctuation.definition.string.end"
        ],
        "settings": {
            "fontStyle": "italic",
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Character group",
        "scope": [
            "punctuation.definition.character-class.regexp"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Capture groups",
        "scope": [
            "punctuation.definition.group.regexp"
        ],
        "settings": {
            "foreground": "{orange}"
        }
    },
    {
        "name": "Assertion operators",
        "scope": [
            "punctuation.definition.group.assertion.regexp",
            "keyword.operator.negation.regexp"
        ],
        "settings": {
            "foreground": "{red}"
        }
    },
    {
        "name": "Positive lookaheads",
        "scope": [
            "meta.assertion.look-ahead.regexp"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "Ruby instance variables",
        "scope": [
            "variable.other.readwrite.instance.ruby",
            "variable.other.readwrite.instance.ruby punctuation.definition.variable.ruby"
        ],
        "settings": {
            "foreground": "{orange}"
        }
    },
    {
        "name": "Ruby class variables",
        "scope": [
            "variable.other.readwrite.class.ruby",
            "variable.other.readwrite.class.ruby punctuation.definition.variable.ruby"
        ],
        "settings": {
            "foreground": "{orange}"
        }
    },
    {
        "name": "Ruby constant definitions",
        "scope": [
            "variable.other.constant.ruby"
        ],
        "settings": {
            "foreground": "{purple}"
        }
    },
    {
        "name": "Ruby modules",
        "scope": [
            "entity.name.type.module.ruby"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "Class definitions",
        "scope": [
            "entity.name.type.class.ruby"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "Inherited classes",
        "scope": [
            "entity.other.inherited-class.ruby"
        ],
        "settings": {
            "foreground": "{purple}"
        }
    },
    {
        "name": "Classes inline",
        "scope": [
            "support.class.ruby"
        ],
        "settings": {
            "foreground": "{purple}"
        }
    },
    {
        "name": "Ruby function definitions",
        "scope": [
            "meta.function.method.with-arguments.ruby entity.name.function.ruby",
            "meta.function.method.without-arguments.ruby entity.name.function.ruby"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "Ruby function parameters",
        "scope": [
            "variable.parameter.function.ruby"
        ],
        "settings": {
            "foreground": "{fg}"
        }
    },
    {
        "name": "Ruby block function parameters",
        "scope": [
            "variable.other.block.ruby"
        ],
        "settings": {
            "foreground": "{fg}"
        }
    },
    {
        "name": "Ruby function invocation",
        "scope": [
            "meta.function-call.ruby entity.name.function.ruby",
            "support.function.kernel.ruby"
        ],
        "settings": {
            "foreground": "{fg}"
        }
    },
    {
        "name": "Ruby separators",
        "scope": [
            "punctuation.separator.method.ruby"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Ruby interpolation",
        "scope": [
            "punctuation.section.embedded.end source.ruby"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Ruby symbols",
        "scope": [
            "constant.language.symbol.hashkey.ruby",
            "constant.language.symbol.hashkey.parameter.function.ruby",
            "constant.language.symbol.ruby",
            "constant.other.symbol.hashkey.ruby",
            "constant.other.symbol.ruby",
            "punctuation.definition.constant.ruby",
            "punctuation.definition.constant.hashkey.ruby"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Rust Types",
        "scope": [
            "storage.class.std.rust",
            "storage.type.core.rust"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "Shell variables prefixed with \"$\"",
        "scope": [
            "source.shell variable.other"
        ],
        "settings": {
            "foreground": "{purple}"
        }
    },
    {
        "name": "Swift instance keywords",
        "scope": [
            "keyword.expressions-and-types.swift"
        ],
        "settings": {
            "foreground": "{purple}"
        }
    },
    {
        "name": "Swift separators",
        "scope": [
            "punctuation.function.swift"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "Groovy Types",
        "scope": [
            "keyword.primitive-datatypes.swift",
            "storage.type.attribute.swift"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "TOML separators",
        "scope": [
            "meta.group.double.toml",
            "meta.group.toml"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "TOML keys",
        "scope": [
            "entity.name.section.toml",
            "entity.name.tag.yaml",
            "variable.other.key.toml"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "TypeScript prototype prop",
        "scope": [
            "support.variable.property.ts",
            "support.variable.property.tsx"
        ],
        "settings": {
            "foreground": "{purple}"
        }
    },
    {
        "name": "TypeScript constant definitions",
        "scope": [
            "variable.other.constant.ts",
            "variable.other.constant.tsx"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "TypeScript language classes",
        "scope": [
            "support.class.console.ts",
            "support.type.object.module.ts",
            "support.class.promise.ts",
            "support.constant.json.ts",
            "support.class.console.tsx",
            "support.type.object.module.tsx",
            "support.class.promise.tsx",
            "support.constant.json.tsx"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "TypeScript classes in use",
        "scope": [
            "support.class.ts",
            "support.class.tsx"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "TS function definitions",
        "scope": [
            "meta.object-literal.key.ts entity.name.function.ts",
            "meta.var.expr.ts meta.definition.variable.ts entity.name.function.ts",
            "meta.definition.property.ts entity.name.function.ts",
            "meta.object-literal.key.tsx entity.name.function.tsx",
            "meta.var.expr.tsx meta.definition.variable.tsx entity.name.function.tsx",
            "meta.definition.property.tsx entity.name.function.tsx"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "TS function invocation",
        "scope": [
            "meta.function-call.ts",
            "meta.function-call.tsx"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "TS Typing Definitions",
        "scope": [
            "entity.name.type.alias.ts",
            "entity.name.type.interface.ts",
            "entity.name.type.enum.ts",
            "entity.name.type.alias.tsx",
            "entity.name.type.interface.tsx",
            "entity.name.type.enum.tsx"
        ],
        "settings": {
            "foreground": "{green}"
        }
    },
    {
        "name": "TS Typing Uses",
        "scope": [
            "support.type.primitive.ts",
            "support.type.builtin.ts",
            "entity.name.type.ts",
            "support.type.primitive.tsx",
            "support.type.builtin.tsx",
            "entity.name.type.tsx"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "TS Generics / Type Parameters",
        "scope": [
            "meta.type.parameters.ts support.type.primitive.ts",
            "meta.type.parameters.ts entity.name.type.ts",
            "meta.type.parameters.tsx support.type.primitive.tsx",
            "meta.type.parameters.tsx entity.name.type.tsx"
        ],
        "settings": {
            "foreground": "{orange}"
        }
    },
    {
        "name": "TS Generics Punctuation",
        "scope": [
            "punctuation.definition.typeparameters.begin.ts",
            "punctuation.definition.typeparameters.end.ts",
            "punctuation.definition.typeparameters.begin.tsx",
            "punctuation.definition.typeparameters.end.tsx"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "YAML separators",
        "scope": [
            "punctuation.definition.block.scalar.folded.yaml",
            "punctuation.definition.block.scalar.literal.yaml",
            "punctuation.definition.block.sequence.item.yaml",
            "punctuation.separator.key-value.mapping.yaml",
            "support.other.chomping-indicator.yaml"
        ],
        "settings": {
            "foreground": "{pink}"
        }
    },
    {
        "name": "YAML keys",
        "scope": [
            "entity.name.tag.yaml"
        ],
        "settings": {
            "foreground": "{cyan}"
        }
    },
    {
        "name": "YAML aliases",
        "scope": [
            "variable.other.alias.yaml"
        ],
        "settings": {
            "fontStyle": "underline",
            "foreground": "{green}"
        }
    }
];
