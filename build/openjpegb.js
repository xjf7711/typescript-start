function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // 将 JavaScript 中的所有变量声明转换为 TypeScript 的类型声明
  root
    .find(j.VariableDeclaration)
    .replaceWith((path) => {
      const typeAnnotation = j.typeAnnotation(
        j.tsAnyKeyword()
      );
      const updatedNode = j.variableDeclaration(
        path.node.kind,
        path.node.declarations.map((declaration) => {
          return j.variableDeclarator(
            declaration.id,
            declaration.init,
            typeAnnotation
          );
        })
      );
      return updatedNode;
    });

  return root.toSource();
}
module.exports = transformer;
