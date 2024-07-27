/*
 * This file is auto-generated! Do not modify it directly.
 * To re-generate run 'make build'
 */
import type * as t from "@babel/types";

import type { ExplVisitNode, VisitNode } from "../types.ts";

export interface ExplVisitorBase<S> {
  AnyTypeAnnotation?: ExplVisitNode<S, t.AnyTypeAnnotation>;
  ArgumentPlaceholder?: ExplVisitNode<S, t.ArgumentPlaceholder>;
  ArrayExpression?: ExplVisitNode<S, t.ArrayExpression>;
  ArrayPattern?: ExplVisitNode<S, t.ArrayPattern>;
  ArrayTypeAnnotation?: ExplVisitNode<S, t.ArrayTypeAnnotation>;
  ArrowFunctionExpression?: ExplVisitNode<S, t.ArrowFunctionExpression>;
  AssignmentExpression?: ExplVisitNode<S, t.AssignmentExpression>;
  AssignmentPattern?: ExplVisitNode<S, t.AssignmentPattern>;
  AwaitExpression?: ExplVisitNode<S, t.AwaitExpression>;
  BigIntLiteral?: ExplVisitNode<S, t.BigIntLiteral>;
  BinaryExpression?: ExplVisitNode<S, t.BinaryExpression>;
  BindExpression?: ExplVisitNode<S, t.BindExpression>;
  BlockStatement?: ExplVisitNode<S, t.BlockStatement>;
  BooleanLiteral?: ExplVisitNode<S, t.BooleanLiteral>;
  BooleanLiteralTypeAnnotation?: ExplVisitNode<
    S,
    t.BooleanLiteralTypeAnnotation
  >;
  BooleanTypeAnnotation?: ExplVisitNode<S, t.BooleanTypeAnnotation>;
  BreakStatement?: ExplVisitNode<S, t.BreakStatement>;
  CallExpression?: ExplVisitNode<S, t.CallExpression>;
  CatchClause?: ExplVisitNode<S, t.CatchClause>;
  ClassAccessorProperty?: ExplVisitNode<S, t.ClassAccessorProperty>;
  ClassBody?: ExplVisitNode<S, t.ClassBody>;
  ClassDeclaration?: ExplVisitNode<S, t.ClassDeclaration>;
  ClassExpression?: ExplVisitNode<S, t.ClassExpression>;
  ClassImplements?: ExplVisitNode<S, t.ClassImplements>;
  ClassMethod?: ExplVisitNode<S, t.ClassMethod>;
  ClassPrivateMethod?: ExplVisitNode<S, t.ClassPrivateMethod>;
  ClassPrivateProperty?: ExplVisitNode<S, t.ClassPrivateProperty>;
  ClassProperty?: ExplVisitNode<S, t.ClassProperty>;
  ConditionalExpression?: ExplVisitNode<S, t.ConditionalExpression>;
  ContinueStatement?: ExplVisitNode<S, t.ContinueStatement>;
  DebuggerStatement?: ExplVisitNode<S, t.DebuggerStatement>;
  DecimalLiteral?: ExplVisitNode<S, t.DecimalLiteral>;
  DeclareClass?: ExplVisitNode<S, t.DeclareClass>;
  DeclareExportAllDeclaration?: ExplVisitNode<S, t.DeclareExportAllDeclaration>;
  DeclareExportDeclaration?: ExplVisitNode<S, t.DeclareExportDeclaration>;
  DeclareFunction?: ExplVisitNode<S, t.DeclareFunction>;
  DeclareInterface?: ExplVisitNode<S, t.DeclareInterface>;
  DeclareModule?: ExplVisitNode<S, t.DeclareModule>;
  DeclareModuleExports?: ExplVisitNode<S, t.DeclareModuleExports>;
  DeclareOpaqueType?: ExplVisitNode<S, t.DeclareOpaqueType>;
  DeclareTypeAlias?: ExplVisitNode<S, t.DeclareTypeAlias>;
  DeclareVariable?: ExplVisitNode<S, t.DeclareVariable>;
  DeclaredPredicate?: ExplVisitNode<S, t.DeclaredPredicate>;
  Decorator?: ExplVisitNode<S, t.Decorator>;
  Directive?: ExplVisitNode<S, t.Directive>;
  DirectiveLiteral?: ExplVisitNode<S, t.DirectiveLiteral>;
  DoExpression?: ExplVisitNode<S, t.DoExpression>;
  DoWhileStatement?: ExplVisitNode<S, t.DoWhileStatement>;
  EmptyStatement?: ExplVisitNode<S, t.EmptyStatement>;
  EmptyTypeAnnotation?: ExplVisitNode<S, t.EmptyTypeAnnotation>;
  EnumBooleanBody?: ExplVisitNode<S, t.EnumBooleanBody>;
  EnumBooleanMember?: ExplVisitNode<S, t.EnumBooleanMember>;
  EnumDeclaration?: ExplVisitNode<S, t.EnumDeclaration>;
  EnumDefaultedMember?: ExplVisitNode<S, t.EnumDefaultedMember>;
  EnumNumberBody?: ExplVisitNode<S, t.EnumNumberBody>;
  EnumNumberMember?: ExplVisitNode<S, t.EnumNumberMember>;
  EnumStringBody?: ExplVisitNode<S, t.EnumStringBody>;
  EnumStringMember?: ExplVisitNode<S, t.EnumStringMember>;
  EnumSymbolBody?: ExplVisitNode<S, t.EnumSymbolBody>;
  ExistsTypeAnnotation?: ExplVisitNode<S, t.ExistsTypeAnnotation>;
  ExportAllDeclaration?: ExplVisitNode<S, t.ExportAllDeclaration>;
  ExportDefaultDeclaration?: ExplVisitNode<S, t.ExportDefaultDeclaration>;
  ExportDefaultSpecifier?: ExplVisitNode<S, t.ExportDefaultSpecifier>;
  ExportNamedDeclaration?: ExplVisitNode<S, t.ExportNamedDeclaration>;
  ExportNamespaceSpecifier?: ExplVisitNode<S, t.ExportNamespaceSpecifier>;
  ExportSpecifier?: ExplVisitNode<S, t.ExportSpecifier>;
  ExpressionStatement?: ExplVisitNode<S, t.ExpressionStatement>;
  File?: ExplVisitNode<S, t.File>;
  ForInStatement?: ExplVisitNode<S, t.ForInStatement>;
  ForOfStatement?: ExplVisitNode<S, t.ForOfStatement>;
  ForStatement?: ExplVisitNode<S, t.ForStatement>;
  FunctionDeclaration?: ExplVisitNode<S, t.FunctionDeclaration>;
  FunctionExpression?: ExplVisitNode<S, t.FunctionExpression>;
  FunctionTypeAnnotation?: ExplVisitNode<S, t.FunctionTypeAnnotation>;
  FunctionTypeParam?: ExplVisitNode<S, t.FunctionTypeParam>;
  GenericTypeAnnotation?: ExplVisitNode<S, t.GenericTypeAnnotation>;
  Identifier?: ExplVisitNode<S, t.Identifier>;
  IfStatement?: ExplVisitNode<S, t.IfStatement>;
  Import?: ExplVisitNode<S, t.Import>;
  ImportAttribute?: ExplVisitNode<S, t.ImportAttribute>;
  ImportDeclaration?: ExplVisitNode<S, t.ImportDeclaration>;
  ImportDefaultSpecifier?: ExplVisitNode<S, t.ImportDefaultSpecifier>;
  ImportExpression?: ExplVisitNode<S, t.ImportExpression>;
  ImportNamespaceSpecifier?: ExplVisitNode<S, t.ImportNamespaceSpecifier>;
  ImportSpecifier?: ExplVisitNode<S, t.ImportSpecifier>;
  IndexedAccessType?: ExplVisitNode<S, t.IndexedAccessType>;
  InferredPredicate?: ExplVisitNode<S, t.InferredPredicate>;
  InterfaceDeclaration?: ExplVisitNode<S, t.InterfaceDeclaration>;
  InterfaceExtends?: ExplVisitNode<S, t.InterfaceExtends>;
  InterfaceTypeAnnotation?: ExplVisitNode<S, t.InterfaceTypeAnnotation>;
  InterpreterDirective?: ExplVisitNode<S, t.InterpreterDirective>;
  IntersectionTypeAnnotation?: ExplVisitNode<S, t.IntersectionTypeAnnotation>;
  JSXAttribute?: ExplVisitNode<S, t.JSXAttribute>;
  JSXClosingElement?: ExplVisitNode<S, t.JSXClosingElement>;
  JSXClosingFragment?: ExplVisitNode<S, t.JSXClosingFragment>;
  JSXElement?: ExplVisitNode<S, t.JSXElement>;
  JSXEmptyExpression?: ExplVisitNode<S, t.JSXEmptyExpression>;
  JSXExpressionContainer?: ExplVisitNode<S, t.JSXExpressionContainer>;
  JSXFragment?: ExplVisitNode<S, t.JSXFragment>;
  JSXIdentifier?: ExplVisitNode<S, t.JSXIdentifier>;
  JSXMemberExpression?: ExplVisitNode<S, t.JSXMemberExpression>;
  JSXNamespacedName?: ExplVisitNode<S, t.JSXNamespacedName>;
  JSXOpeningElement?: ExplVisitNode<S, t.JSXOpeningElement>;
  JSXOpeningFragment?: ExplVisitNode<S, t.JSXOpeningFragment>;
  JSXSpreadAttribute?: ExplVisitNode<S, t.JSXSpreadAttribute>;
  JSXSpreadChild?: ExplVisitNode<S, t.JSXSpreadChild>;
  JSXText?: ExplVisitNode<S, t.JSXText>;
  LabeledStatement?: ExplVisitNode<S, t.LabeledStatement>;
  LogicalExpression?: ExplVisitNode<S, t.LogicalExpression>;
  MemberExpression?: ExplVisitNode<S, t.MemberExpression>;
  MetaProperty?: ExplVisitNode<S, t.MetaProperty>;
  MixedTypeAnnotation?: ExplVisitNode<S, t.MixedTypeAnnotation>;
  ModuleExpression?: ExplVisitNode<S, t.ModuleExpression>;
  NewExpression?: ExplVisitNode<S, t.NewExpression>;
  Noop?: ExplVisitNode<S, t.Noop>;
  NullLiteral?: ExplVisitNode<S, t.NullLiteral>;
  NullLiteralTypeAnnotation?: ExplVisitNode<S, t.NullLiteralTypeAnnotation>;
  NullableTypeAnnotation?: ExplVisitNode<S, t.NullableTypeAnnotation>;
  NumberLiteral?: ExplVisitNode<S, t.NumberLiteral>;
  NumberLiteralTypeAnnotation?: ExplVisitNode<S, t.NumberLiteralTypeAnnotation>;
  NumberTypeAnnotation?: ExplVisitNode<S, t.NumberTypeAnnotation>;
  NumericLiteral?: ExplVisitNode<S, t.NumericLiteral>;
  ObjectExpression?: ExplVisitNode<S, t.ObjectExpression>;
  ObjectMethod?: ExplVisitNode<S, t.ObjectMethod>;
  ObjectPattern?: ExplVisitNode<S, t.ObjectPattern>;
  ObjectProperty?: ExplVisitNode<S, t.ObjectProperty>;
  ObjectTypeAnnotation?: ExplVisitNode<S, t.ObjectTypeAnnotation>;
  ObjectTypeCallProperty?: ExplVisitNode<S, t.ObjectTypeCallProperty>;
  ObjectTypeIndexer?: ExplVisitNode<S, t.ObjectTypeIndexer>;
  ObjectTypeInternalSlot?: ExplVisitNode<S, t.ObjectTypeInternalSlot>;
  ObjectTypeProperty?: ExplVisitNode<S, t.ObjectTypeProperty>;
  ObjectTypeSpreadProperty?: ExplVisitNode<S, t.ObjectTypeSpreadProperty>;
  OpaqueType?: ExplVisitNode<S, t.OpaqueType>;
  OptionalCallExpression?: ExplVisitNode<S, t.OptionalCallExpression>;
  OptionalIndexedAccessType?: ExplVisitNode<S, t.OptionalIndexedAccessType>;
  OptionalMemberExpression?: ExplVisitNode<S, t.OptionalMemberExpression>;
  ParenthesizedExpression?: ExplVisitNode<S, t.ParenthesizedExpression>;
  PipelineBareFunction?: ExplVisitNode<S, t.PipelineBareFunction>;
  PipelinePrimaryTopicReference?: ExplVisitNode<
    S,
    t.PipelinePrimaryTopicReference
  >;
  PipelineTopicExpression?: ExplVisitNode<S, t.PipelineTopicExpression>;
  Placeholder?: ExplVisitNode<S, t.Placeholder>;
  PrivateName?: ExplVisitNode<S, t.PrivateName>;
  Program?: ExplVisitNode<S, t.Program>;
  QualifiedTypeIdentifier?: ExplVisitNode<S, t.QualifiedTypeIdentifier>;
  RecordExpression?: ExplVisitNode<S, t.RecordExpression>;
  RegExpLiteral?: ExplVisitNode<S, t.RegExpLiteral>;
  RegexLiteral?: ExplVisitNode<S, t.RegexLiteral>;
  RestElement?: ExplVisitNode<S, t.RestElement>;
  RestProperty?: ExplVisitNode<S, t.RestProperty>;
  ReturnStatement?: ExplVisitNode<S, t.ReturnStatement>;
  SequenceExpression?: ExplVisitNode<S, t.SequenceExpression>;
  SpreadElement?: ExplVisitNode<S, t.SpreadElement>;
  SpreadProperty?: ExplVisitNode<S, t.SpreadProperty>;
  StaticBlock?: ExplVisitNode<S, t.StaticBlock>;
  StringLiteral?: ExplVisitNode<S, t.StringLiteral>;
  StringLiteralTypeAnnotation?: ExplVisitNode<S, t.StringLiteralTypeAnnotation>;
  StringTypeAnnotation?: ExplVisitNode<S, t.StringTypeAnnotation>;
  Super?: ExplVisitNode<S, t.Super>;
  SwitchCase?: ExplVisitNode<S, t.SwitchCase>;
  SwitchStatement?: ExplVisitNode<S, t.SwitchStatement>;
  SymbolTypeAnnotation?: ExplVisitNode<S, t.SymbolTypeAnnotation>;
  TSAnyKeyword?: ExplVisitNode<S, t.TSAnyKeyword>;
  TSArrayType?: ExplVisitNode<S, t.TSArrayType>;
  TSAsExpression?: ExplVisitNode<S, t.TSAsExpression>;
  TSBigIntKeyword?: ExplVisitNode<S, t.TSBigIntKeyword>;
  TSBooleanKeyword?: ExplVisitNode<S, t.TSBooleanKeyword>;
  TSCallSignatureDeclaration?: ExplVisitNode<S, t.TSCallSignatureDeclaration>;
  TSConditionalType?: ExplVisitNode<S, t.TSConditionalType>;
  TSConstructSignatureDeclaration?: ExplVisitNode<
    S,
    t.TSConstructSignatureDeclaration
  >;
  TSConstructorType?: ExplVisitNode<S, t.TSConstructorType>;
  TSDeclareFunction?: ExplVisitNode<S, t.TSDeclareFunction>;
  TSDeclareMethod?: ExplVisitNode<S, t.TSDeclareMethod>;
  TSEnumDeclaration?: ExplVisitNode<S, t.TSEnumDeclaration>;
  TSEnumMember?: ExplVisitNode<S, t.TSEnumMember>;
  TSExportAssignment?: ExplVisitNode<S, t.TSExportAssignment>;
  TSExpressionWithTypeArguments?: ExplVisitNode<
    S,
    t.TSExpressionWithTypeArguments
  >;
  TSExternalModuleReference?: ExplVisitNode<S, t.TSExternalModuleReference>;
  TSFunctionType?: ExplVisitNode<S, t.TSFunctionType>;
  TSImportEqualsDeclaration?: ExplVisitNode<S, t.TSImportEqualsDeclaration>;
  TSImportType?: ExplVisitNode<S, t.TSImportType>;
  TSIndexSignature?: ExplVisitNode<S, t.TSIndexSignature>;
  TSIndexedAccessType?: ExplVisitNode<S, t.TSIndexedAccessType>;
  TSInferType?: ExplVisitNode<S, t.TSInferType>;
  TSInstantiationExpression?: ExplVisitNode<S, t.TSInstantiationExpression>;
  TSInterfaceBody?: ExplVisitNode<S, t.TSInterfaceBody>;
  TSInterfaceDeclaration?: ExplVisitNode<S, t.TSInterfaceDeclaration>;
  TSIntersectionType?: ExplVisitNode<S, t.TSIntersectionType>;
  TSIntrinsicKeyword?: ExplVisitNode<S, t.TSIntrinsicKeyword>;
  TSLiteralType?: ExplVisitNode<S, t.TSLiteralType>;
  TSMappedType?: ExplVisitNode<S, t.TSMappedType>;
  TSMethodSignature?: ExplVisitNode<S, t.TSMethodSignature>;
  TSModuleBlock?: ExplVisitNode<S, t.TSModuleBlock>;
  TSModuleDeclaration?: ExplVisitNode<S, t.TSModuleDeclaration>;
  TSNamedTupleMember?: ExplVisitNode<S, t.TSNamedTupleMember>;
  TSNamespaceExportDeclaration?: ExplVisitNode<
    S,
    t.TSNamespaceExportDeclaration
  >;
  TSNeverKeyword?: ExplVisitNode<S, t.TSNeverKeyword>;
  TSNonNullExpression?: ExplVisitNode<S, t.TSNonNullExpression>;
  TSNullKeyword?: ExplVisitNode<S, t.TSNullKeyword>;
  TSNumberKeyword?: ExplVisitNode<S, t.TSNumberKeyword>;
  TSObjectKeyword?: ExplVisitNode<S, t.TSObjectKeyword>;
  TSOptionalType?: ExplVisitNode<S, t.TSOptionalType>;
  TSParameterProperty?: ExplVisitNode<S, t.TSParameterProperty>;
  TSParenthesizedType?: ExplVisitNode<S, t.TSParenthesizedType>;
  TSPropertySignature?: ExplVisitNode<S, t.TSPropertySignature>;
  TSQualifiedName?: ExplVisitNode<S, t.TSQualifiedName>;
  TSRestType?: ExplVisitNode<S, t.TSRestType>;
  TSSatisfiesExpression?: ExplVisitNode<S, t.TSSatisfiesExpression>;
  TSStringKeyword?: ExplVisitNode<S, t.TSStringKeyword>;
  TSSymbolKeyword?: ExplVisitNode<S, t.TSSymbolKeyword>;
  TSThisType?: ExplVisitNode<S, t.TSThisType>;
  TSTupleType?: ExplVisitNode<S, t.TSTupleType>;
  TSTypeAliasDeclaration?: ExplVisitNode<S, t.TSTypeAliasDeclaration>;
  TSTypeAnnotation?: ExplVisitNode<S, t.TSTypeAnnotation>;
  TSTypeAssertion?: ExplVisitNode<S, t.TSTypeAssertion>;
  TSTypeLiteral?: ExplVisitNode<S, t.TSTypeLiteral>;
  TSTypeOperator?: ExplVisitNode<S, t.TSTypeOperator>;
  TSTypeParameter?: ExplVisitNode<S, t.TSTypeParameter>;
  TSTypeParameterDeclaration?: ExplVisitNode<S, t.TSTypeParameterDeclaration>;
  TSTypeParameterInstantiation?: ExplVisitNode<
    S,
    t.TSTypeParameterInstantiation
  >;
  TSTypePredicate?: ExplVisitNode<S, t.TSTypePredicate>;
  TSTypeQuery?: ExplVisitNode<S, t.TSTypeQuery>;
  TSTypeReference?: ExplVisitNode<S, t.TSTypeReference>;
  TSUndefinedKeyword?: ExplVisitNode<S, t.TSUndefinedKeyword>;
  TSUnionType?: ExplVisitNode<S, t.TSUnionType>;
  TSUnknownKeyword?: ExplVisitNode<S, t.TSUnknownKeyword>;
  TSVoidKeyword?: ExplVisitNode<S, t.TSVoidKeyword>;
  TaggedTemplateExpression?: ExplVisitNode<S, t.TaggedTemplateExpression>;
  TemplateElement?: ExplVisitNode<S, t.TemplateElement>;
  TemplateLiteral?: ExplVisitNode<S, t.TemplateLiteral>;
  ThisExpression?: ExplVisitNode<S, t.ThisExpression>;
  ThisTypeAnnotation?: ExplVisitNode<S, t.ThisTypeAnnotation>;
  ThrowStatement?: ExplVisitNode<S, t.ThrowStatement>;
  TopicReference?: ExplVisitNode<S, t.TopicReference>;
  TryStatement?: ExplVisitNode<S, t.TryStatement>;
  TupleExpression?: ExplVisitNode<S, t.TupleExpression>;
  TupleTypeAnnotation?: ExplVisitNode<S, t.TupleTypeAnnotation>;
  TypeAlias?: ExplVisitNode<S, t.TypeAlias>;
  TypeAnnotation?: ExplVisitNode<S, t.TypeAnnotation>;
  TypeCastExpression?: ExplVisitNode<S, t.TypeCastExpression>;
  TypeParameter?: ExplVisitNode<S, t.TypeParameter>;
  TypeParameterDeclaration?: ExplVisitNode<S, t.TypeParameterDeclaration>;
  TypeParameterInstantiation?: ExplVisitNode<S, t.TypeParameterInstantiation>;
  TypeofTypeAnnotation?: ExplVisitNode<S, t.TypeofTypeAnnotation>;
  UnaryExpression?: ExplVisitNode<S, t.UnaryExpression>;
  UnionTypeAnnotation?: ExplVisitNode<S, t.UnionTypeAnnotation>;
  UpdateExpression?: ExplVisitNode<S, t.UpdateExpression>;
  V8IntrinsicIdentifier?: ExplVisitNode<S, t.V8IntrinsicIdentifier>;
  VariableDeclaration?: ExplVisitNode<S, t.VariableDeclaration>;
  VariableDeclarator?: ExplVisitNode<S, t.VariableDeclarator>;
  Variance?: ExplVisitNode<S, t.Variance>;
  VoidTypeAnnotation?: ExplVisitNode<S, t.VoidTypeAnnotation>;
  WhileStatement?: ExplVisitNode<S, t.WhileStatement>;
  WithStatement?: ExplVisitNode<S, t.WithStatement>;
  YieldExpression?: ExplVisitNode<S, t.YieldExpression>;
}

export interface VisitorBaseNodes<S> {
  AnyTypeAnnotation?: VisitNode<S, t.AnyTypeAnnotation>;
  ArgumentPlaceholder?: VisitNode<S, t.ArgumentPlaceholder>;
  ArrayExpression?: VisitNode<S, t.ArrayExpression>;
  ArrayPattern?: VisitNode<S, t.ArrayPattern>;
  ArrayTypeAnnotation?: VisitNode<S, t.ArrayTypeAnnotation>;
  ArrowFunctionExpression?: VisitNode<S, t.ArrowFunctionExpression>;
  AssignmentExpression?: VisitNode<S, t.AssignmentExpression>;
  AssignmentPattern?: VisitNode<S, t.AssignmentPattern>;
  AwaitExpression?: VisitNode<S, t.AwaitExpression>;
  BigIntLiteral?: VisitNode<S, t.BigIntLiteral>;
  BinaryExpression?: VisitNode<S, t.BinaryExpression>;
  BindExpression?: VisitNode<S, t.BindExpression>;
  BlockStatement?: VisitNode<S, t.BlockStatement>;
  BooleanLiteral?: VisitNode<S, t.BooleanLiteral>;
  BooleanLiteralTypeAnnotation?: VisitNode<S, t.BooleanLiteralTypeAnnotation>;
  BooleanTypeAnnotation?: VisitNode<S, t.BooleanTypeAnnotation>;
  BreakStatement?: VisitNode<S, t.BreakStatement>;
  CallExpression?: VisitNode<S, t.CallExpression>;
  CatchClause?: VisitNode<S, t.CatchClause>;
  ClassAccessorProperty?: VisitNode<S, t.ClassAccessorProperty>;
  ClassBody?: VisitNode<S, t.ClassBody>;
  ClassDeclaration?: VisitNode<S, t.ClassDeclaration>;
  ClassExpression?: VisitNode<S, t.ClassExpression>;
  ClassImplements?: VisitNode<S, t.ClassImplements>;
  ClassMethod?: VisitNode<S, t.ClassMethod>;
  ClassPrivateMethod?: VisitNode<S, t.ClassPrivateMethod>;
  ClassPrivateProperty?: VisitNode<S, t.ClassPrivateProperty>;
  ClassProperty?: VisitNode<S, t.ClassProperty>;
  ConditionalExpression?: VisitNode<S, t.ConditionalExpression>;
  ContinueStatement?: VisitNode<S, t.ContinueStatement>;
  DebuggerStatement?: VisitNode<S, t.DebuggerStatement>;
  DecimalLiteral?: VisitNode<S, t.DecimalLiteral>;
  DeclareClass?: VisitNode<S, t.DeclareClass>;
  DeclareExportAllDeclaration?: VisitNode<S, t.DeclareExportAllDeclaration>;
  DeclareExportDeclaration?: VisitNode<S, t.DeclareExportDeclaration>;
  DeclareFunction?: VisitNode<S, t.DeclareFunction>;
  DeclareInterface?: VisitNode<S, t.DeclareInterface>;
  DeclareModule?: VisitNode<S, t.DeclareModule>;
  DeclareModuleExports?: VisitNode<S, t.DeclareModuleExports>;
  DeclareOpaqueType?: VisitNode<S, t.DeclareOpaqueType>;
  DeclareTypeAlias?: VisitNode<S, t.DeclareTypeAlias>;
  DeclareVariable?: VisitNode<S, t.DeclareVariable>;
  DeclaredPredicate?: VisitNode<S, t.DeclaredPredicate>;
  Decorator?: VisitNode<S, t.Decorator>;
  Directive?: VisitNode<S, t.Directive>;
  DirectiveLiteral?: VisitNode<S, t.DirectiveLiteral>;
  DoExpression?: VisitNode<S, t.DoExpression>;
  DoWhileStatement?: VisitNode<S, t.DoWhileStatement>;
  EmptyStatement?: VisitNode<S, t.EmptyStatement>;
  EmptyTypeAnnotation?: VisitNode<S, t.EmptyTypeAnnotation>;
  EnumBooleanBody?: VisitNode<S, t.EnumBooleanBody>;
  EnumBooleanMember?: VisitNode<S, t.EnumBooleanMember>;
  EnumDeclaration?: VisitNode<S, t.EnumDeclaration>;
  EnumDefaultedMember?: VisitNode<S, t.EnumDefaultedMember>;
  EnumNumberBody?: VisitNode<S, t.EnumNumberBody>;
  EnumNumberMember?: VisitNode<S, t.EnumNumberMember>;
  EnumStringBody?: VisitNode<S, t.EnumStringBody>;
  EnumStringMember?: VisitNode<S, t.EnumStringMember>;
  EnumSymbolBody?: VisitNode<S, t.EnumSymbolBody>;
  ExistsTypeAnnotation?: VisitNode<S, t.ExistsTypeAnnotation>;
  ExportAllDeclaration?: VisitNode<S, t.ExportAllDeclaration>;
  ExportDefaultDeclaration?: VisitNode<S, t.ExportDefaultDeclaration>;
  ExportDefaultSpecifier?: VisitNode<S, t.ExportDefaultSpecifier>;
  ExportNamedDeclaration?: VisitNode<S, t.ExportNamedDeclaration>;
  ExportNamespaceSpecifier?: VisitNode<S, t.ExportNamespaceSpecifier>;
  ExportSpecifier?: VisitNode<S, t.ExportSpecifier>;
  ExpressionStatement?: VisitNode<S, t.ExpressionStatement>;
  File?: VisitNode<S, t.File>;
  ForInStatement?: VisitNode<S, t.ForInStatement>;
  ForOfStatement?: VisitNode<S, t.ForOfStatement>;
  ForStatement?: VisitNode<S, t.ForStatement>;
  FunctionDeclaration?: VisitNode<S, t.FunctionDeclaration>;
  FunctionExpression?: VisitNode<S, t.FunctionExpression>;
  FunctionTypeAnnotation?: VisitNode<S, t.FunctionTypeAnnotation>;
  FunctionTypeParam?: VisitNode<S, t.FunctionTypeParam>;
  GenericTypeAnnotation?: VisitNode<S, t.GenericTypeAnnotation>;
  Identifier?: VisitNode<S, t.Identifier>;
  IfStatement?: VisitNode<S, t.IfStatement>;
  Import?: VisitNode<S, t.Import>;
  ImportAttribute?: VisitNode<S, t.ImportAttribute>;
  ImportDeclaration?: VisitNode<S, t.ImportDeclaration>;
  ImportDefaultSpecifier?: VisitNode<S, t.ImportDefaultSpecifier>;
  ImportExpression?: VisitNode<S, t.ImportExpression>;
  ImportNamespaceSpecifier?: VisitNode<S, t.ImportNamespaceSpecifier>;
  ImportSpecifier?: VisitNode<S, t.ImportSpecifier>;
  IndexedAccessType?: VisitNode<S, t.IndexedAccessType>;
  InferredPredicate?: VisitNode<S, t.InferredPredicate>;
  InterfaceDeclaration?: VisitNode<S, t.InterfaceDeclaration>;
  InterfaceExtends?: VisitNode<S, t.InterfaceExtends>;
  InterfaceTypeAnnotation?: VisitNode<S, t.InterfaceTypeAnnotation>;
  InterpreterDirective?: VisitNode<S, t.InterpreterDirective>;
  IntersectionTypeAnnotation?: VisitNode<S, t.IntersectionTypeAnnotation>;
  JSXAttribute?: VisitNode<S, t.JSXAttribute>;
  JSXClosingElement?: VisitNode<S, t.JSXClosingElement>;
  JSXClosingFragment?: VisitNode<S, t.JSXClosingFragment>;
  JSXElement?: VisitNode<S, t.JSXElement>;
  JSXEmptyExpression?: VisitNode<S, t.JSXEmptyExpression>;
  JSXExpressionContainer?: VisitNode<S, t.JSXExpressionContainer>;
  JSXFragment?: VisitNode<S, t.JSXFragment>;
  JSXIdentifier?: VisitNode<S, t.JSXIdentifier>;
  JSXMemberExpression?: VisitNode<S, t.JSXMemberExpression>;
  JSXNamespacedName?: VisitNode<S, t.JSXNamespacedName>;
  JSXOpeningElement?: VisitNode<S, t.JSXOpeningElement>;
  JSXOpeningFragment?: VisitNode<S, t.JSXOpeningFragment>;
  JSXSpreadAttribute?: VisitNode<S, t.JSXSpreadAttribute>;
  JSXSpreadChild?: VisitNode<S, t.JSXSpreadChild>;
  JSXText?: VisitNode<S, t.JSXText>;
  LabeledStatement?: VisitNode<S, t.LabeledStatement>;
  LogicalExpression?: VisitNode<S, t.LogicalExpression>;
  MemberExpression?: VisitNode<S, t.MemberExpression>;
  MetaProperty?: VisitNode<S, t.MetaProperty>;
  MixedTypeAnnotation?: VisitNode<S, t.MixedTypeAnnotation>;
  ModuleExpression?: VisitNode<S, t.ModuleExpression>;
  NewExpression?: VisitNode<S, t.NewExpression>;
  Noop?: VisitNode<S, t.Noop>;
  NullLiteral?: VisitNode<S, t.NullLiteral>;
  NullLiteralTypeAnnotation?: VisitNode<S, t.NullLiteralTypeAnnotation>;
  NullableTypeAnnotation?: VisitNode<S, t.NullableTypeAnnotation>;
  NumberLiteral?: VisitNode<S, t.NumberLiteral>;
  NumberLiteralTypeAnnotation?: VisitNode<S, t.NumberLiteralTypeAnnotation>;
  NumberTypeAnnotation?: VisitNode<S, t.NumberTypeAnnotation>;
  NumericLiteral?: VisitNode<S, t.NumericLiteral>;
  ObjectExpression?: VisitNode<S, t.ObjectExpression>;
  ObjectMethod?: VisitNode<S, t.ObjectMethod>;
  ObjectPattern?: VisitNode<S, t.ObjectPattern>;
  ObjectProperty?: VisitNode<S, t.ObjectProperty>;
  ObjectTypeAnnotation?: VisitNode<S, t.ObjectTypeAnnotation>;
  ObjectTypeCallProperty?: VisitNode<S, t.ObjectTypeCallProperty>;
  ObjectTypeIndexer?: VisitNode<S, t.ObjectTypeIndexer>;
  ObjectTypeInternalSlot?: VisitNode<S, t.ObjectTypeInternalSlot>;
  ObjectTypeProperty?: VisitNode<S, t.ObjectTypeProperty>;
  ObjectTypeSpreadProperty?: VisitNode<S, t.ObjectTypeSpreadProperty>;
  OpaqueType?: VisitNode<S, t.OpaqueType>;
  OptionalCallExpression?: VisitNode<S, t.OptionalCallExpression>;
  OptionalIndexedAccessType?: VisitNode<S, t.OptionalIndexedAccessType>;
  OptionalMemberExpression?: VisitNode<S, t.OptionalMemberExpression>;
  ParenthesizedExpression?: VisitNode<S, t.ParenthesizedExpression>;
  PipelineBareFunction?: VisitNode<S, t.PipelineBareFunction>;
  PipelinePrimaryTopicReference?: VisitNode<S, t.PipelinePrimaryTopicReference>;
  PipelineTopicExpression?: VisitNode<S, t.PipelineTopicExpression>;
  Placeholder?: VisitNode<S, t.Placeholder>;
  PrivateName?: VisitNode<S, t.PrivateName>;
  Program?: VisitNode<S, t.Program>;
  QualifiedTypeIdentifier?: VisitNode<S, t.QualifiedTypeIdentifier>;
  RecordExpression?: VisitNode<S, t.RecordExpression>;
  RegExpLiteral?: VisitNode<S, t.RegExpLiteral>;
  RegexLiteral?: VisitNode<S, t.RegexLiteral>;
  RestElement?: VisitNode<S, t.RestElement>;
  RestProperty?: VisitNode<S, t.RestProperty>;
  ReturnStatement?: VisitNode<S, t.ReturnStatement>;
  SequenceExpression?: VisitNode<S, t.SequenceExpression>;
  SpreadElement?: VisitNode<S, t.SpreadElement>;
  SpreadProperty?: VisitNode<S, t.SpreadProperty>;
  StaticBlock?: VisitNode<S, t.StaticBlock>;
  StringLiteral?: VisitNode<S, t.StringLiteral>;
  StringLiteralTypeAnnotation?: VisitNode<S, t.StringLiteralTypeAnnotation>;
  StringTypeAnnotation?: VisitNode<S, t.StringTypeAnnotation>;
  Super?: VisitNode<S, t.Super>;
  SwitchCase?: VisitNode<S, t.SwitchCase>;
  SwitchStatement?: VisitNode<S, t.SwitchStatement>;
  SymbolTypeAnnotation?: VisitNode<S, t.SymbolTypeAnnotation>;
  TSAnyKeyword?: VisitNode<S, t.TSAnyKeyword>;
  TSArrayType?: VisitNode<S, t.TSArrayType>;
  TSAsExpression?: VisitNode<S, t.TSAsExpression>;
  TSBigIntKeyword?: VisitNode<S, t.TSBigIntKeyword>;
  TSBooleanKeyword?: VisitNode<S, t.TSBooleanKeyword>;
  TSCallSignatureDeclaration?: VisitNode<S, t.TSCallSignatureDeclaration>;
  TSConditionalType?: VisitNode<S, t.TSConditionalType>;
  TSConstructSignatureDeclaration?: VisitNode<
    S,
    t.TSConstructSignatureDeclaration
  >;
  TSConstructorType?: VisitNode<S, t.TSConstructorType>;
  TSDeclareFunction?: VisitNode<S, t.TSDeclareFunction>;
  TSDeclareMethod?: VisitNode<S, t.TSDeclareMethod>;
  TSEnumDeclaration?: VisitNode<S, t.TSEnumDeclaration>;
  TSEnumMember?: VisitNode<S, t.TSEnumMember>;
  TSExportAssignment?: VisitNode<S, t.TSExportAssignment>;
  TSExpressionWithTypeArguments?: VisitNode<S, t.TSExpressionWithTypeArguments>;
  TSExternalModuleReference?: VisitNode<S, t.TSExternalModuleReference>;
  TSFunctionType?: VisitNode<S, t.TSFunctionType>;
  TSImportEqualsDeclaration?: VisitNode<S, t.TSImportEqualsDeclaration>;
  TSImportType?: VisitNode<S, t.TSImportType>;
  TSIndexSignature?: VisitNode<S, t.TSIndexSignature>;
  TSIndexedAccessType?: VisitNode<S, t.TSIndexedAccessType>;
  TSInferType?: VisitNode<S, t.TSInferType>;
  TSInstantiationExpression?: VisitNode<S, t.TSInstantiationExpression>;
  TSInterfaceBody?: VisitNode<S, t.TSInterfaceBody>;
  TSInterfaceDeclaration?: VisitNode<S, t.TSInterfaceDeclaration>;
  TSIntersectionType?: VisitNode<S, t.TSIntersectionType>;
  TSIntrinsicKeyword?: VisitNode<S, t.TSIntrinsicKeyword>;
  TSLiteralType?: VisitNode<S, t.TSLiteralType>;
  TSMappedType?: VisitNode<S, t.TSMappedType>;
  TSMethodSignature?: VisitNode<S, t.TSMethodSignature>;
  TSModuleBlock?: VisitNode<S, t.TSModuleBlock>;
  TSModuleDeclaration?: VisitNode<S, t.TSModuleDeclaration>;
  TSNamedTupleMember?: VisitNode<S, t.TSNamedTupleMember>;
  TSNamespaceExportDeclaration?: VisitNode<S, t.TSNamespaceExportDeclaration>;
  TSNeverKeyword?: VisitNode<S, t.TSNeverKeyword>;
  TSNonNullExpression?: VisitNode<S, t.TSNonNullExpression>;
  TSNullKeyword?: VisitNode<S, t.TSNullKeyword>;
  TSNumberKeyword?: VisitNode<S, t.TSNumberKeyword>;
  TSObjectKeyword?: VisitNode<S, t.TSObjectKeyword>;
  TSOptionalType?: VisitNode<S, t.TSOptionalType>;
  TSParameterProperty?: VisitNode<S, t.TSParameterProperty>;
  TSParenthesizedType?: VisitNode<S, t.TSParenthesizedType>;
  TSPropertySignature?: VisitNode<S, t.TSPropertySignature>;
  TSQualifiedName?: VisitNode<S, t.TSQualifiedName>;
  TSRestType?: VisitNode<S, t.TSRestType>;
  TSSatisfiesExpression?: VisitNode<S, t.TSSatisfiesExpression>;
  TSStringKeyword?: VisitNode<S, t.TSStringKeyword>;
  TSSymbolKeyword?: VisitNode<S, t.TSSymbolKeyword>;
  TSThisType?: VisitNode<S, t.TSThisType>;
  TSTupleType?: VisitNode<S, t.TSTupleType>;
  TSTypeAliasDeclaration?: VisitNode<S, t.TSTypeAliasDeclaration>;
  TSTypeAnnotation?: VisitNode<S, t.TSTypeAnnotation>;
  TSTypeAssertion?: VisitNode<S, t.TSTypeAssertion>;
  TSTypeLiteral?: VisitNode<S, t.TSTypeLiteral>;
  TSTypeOperator?: VisitNode<S, t.TSTypeOperator>;
  TSTypeParameter?: VisitNode<S, t.TSTypeParameter>;
  TSTypeParameterDeclaration?: VisitNode<S, t.TSTypeParameterDeclaration>;
  TSTypeParameterInstantiation?: VisitNode<S, t.TSTypeParameterInstantiation>;
  TSTypePredicate?: VisitNode<S, t.TSTypePredicate>;
  TSTypeQuery?: VisitNode<S, t.TSTypeQuery>;
  TSTypeReference?: VisitNode<S, t.TSTypeReference>;
  TSUndefinedKeyword?: VisitNode<S, t.TSUndefinedKeyword>;
  TSUnionType?: VisitNode<S, t.TSUnionType>;
  TSUnknownKeyword?: VisitNode<S, t.TSUnknownKeyword>;
  TSVoidKeyword?: VisitNode<S, t.TSVoidKeyword>;
  TaggedTemplateExpression?: VisitNode<S, t.TaggedTemplateExpression>;
  TemplateElement?: VisitNode<S, t.TemplateElement>;
  TemplateLiteral?: VisitNode<S, t.TemplateLiteral>;
  ThisExpression?: VisitNode<S, t.ThisExpression>;
  ThisTypeAnnotation?: VisitNode<S, t.ThisTypeAnnotation>;
  ThrowStatement?: VisitNode<S, t.ThrowStatement>;
  TopicReference?: VisitNode<S, t.TopicReference>;
  TryStatement?: VisitNode<S, t.TryStatement>;
  TupleExpression?: VisitNode<S, t.TupleExpression>;
  TupleTypeAnnotation?: VisitNode<S, t.TupleTypeAnnotation>;
  TypeAlias?: VisitNode<S, t.TypeAlias>;
  TypeAnnotation?: VisitNode<S, t.TypeAnnotation>;
  TypeCastExpression?: VisitNode<S, t.TypeCastExpression>;
  TypeParameter?: VisitNode<S, t.TypeParameter>;
  TypeParameterDeclaration?: VisitNode<S, t.TypeParameterDeclaration>;
  TypeParameterInstantiation?: VisitNode<S, t.TypeParameterInstantiation>;
  TypeofTypeAnnotation?: VisitNode<S, t.TypeofTypeAnnotation>;
  UnaryExpression?: VisitNode<S, t.UnaryExpression>;
  UnionTypeAnnotation?: VisitNode<S, t.UnionTypeAnnotation>;
  UpdateExpression?: VisitNode<S, t.UpdateExpression>;
  V8IntrinsicIdentifier?: VisitNode<S, t.V8IntrinsicIdentifier>;
  VariableDeclaration?: VisitNode<S, t.VariableDeclaration>;
  VariableDeclarator?: VisitNode<S, t.VariableDeclarator>;
  Variance?: VisitNode<S, t.Variance>;
  VoidTypeAnnotation?: VisitNode<S, t.VoidTypeAnnotation>;
  WhileStatement?: VisitNode<S, t.WhileStatement>;
  WithStatement?: VisitNode<S, t.WithStatement>;
  YieldExpression?: VisitNode<S, t.YieldExpression>;
}

export interface VisitorBaseAliases<S> {
  Accessor?: VisitNode<S, t.Accessor>;
  Binary?: VisitNode<S, t.Binary>;
  Block?: VisitNode<S, t.Block>;
  BlockParent?: VisitNode<S, t.BlockParent>;
  Class?: VisitNode<S, t.Class>;
  CompletionStatement?: VisitNode<S, t.CompletionStatement>;
  Conditional?: VisitNode<S, t.Conditional>;
  Declaration?: VisitNode<S, t.Declaration>;
  EnumBody?: VisitNode<S, t.EnumBody>;
  EnumMember?: VisitNode<S, t.EnumMember>;
  ExportDeclaration?: VisitNode<S, t.ExportDeclaration>;
  Expression?: VisitNode<S, t.Expression>;
  ExpressionWrapper?: VisitNode<S, t.ExpressionWrapper>;
  Flow?: VisitNode<S, t.Flow>;
  FlowBaseAnnotation?: VisitNode<S, t.FlowBaseAnnotation>;
  FlowDeclaration?: VisitNode<S, t.FlowDeclaration>;
  FlowPredicate?: VisitNode<S, t.FlowPredicate>;
  FlowType?: VisitNode<S, t.FlowType>;
  For?: VisitNode<S, t.For>;
  ForXStatement?: VisitNode<S, t.ForXStatement>;
  Function?: VisitNode<S, t.Function>;
  FunctionParent?: VisitNode<S, t.FunctionParent>;
  Immutable?: VisitNode<S, t.Immutable>;
  ImportOrExportDeclaration?: VisitNode<S, t.ImportOrExportDeclaration>;
  JSX?: VisitNode<S, t.JSX>;
  LVal?: VisitNode<S, t.LVal>;
  Literal?: VisitNode<S, t.Literal>;
  Loop?: VisitNode<S, t.Loop>;
  Method?: VisitNode<S, t.Method>;
  Miscellaneous?: VisitNode<S, t.Miscellaneous>;
  ModuleDeclaration?: VisitNode<S, t.ModuleDeclaration>;
  ModuleSpecifier?: VisitNode<S, t.ModuleSpecifier>;
  ObjectMember?: VisitNode<S, t.ObjectMember>;
  Pattern?: VisitNode<S, t.Pattern>;
  PatternLike?: VisitNode<S, t.PatternLike>;
  Private?: VisitNode<S, t.Private>;
  Property?: VisitNode<S, t.Property>;
  Pureish?: VisitNode<S, t.Pureish>;
  Scopable?: VisitNode<S, t.Scopable>;
  Standardized?: VisitNode<S, t.Standardized>;
  Statement?: VisitNode<S, t.Statement>;
  TSBaseType?: VisitNode<S, t.TSBaseType>;
  TSEntityName?: VisitNode<S, t.TSEntityName>;
  TSType?: VisitNode<S, t.TSType>;
  TSTypeElement?: VisitNode<S, t.TSTypeElement>;
  Terminatorless?: VisitNode<S, t.Terminatorless>;
  TypeScript?: VisitNode<S, t.TypeScript>;
  UnaryLike?: VisitNode<S, t.UnaryLike>;
  UserWhitespacable?: VisitNode<S, t.UserWhitespacable>;
  While?: VisitNode<S, t.While>;
}