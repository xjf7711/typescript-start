module.exports = function (file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // 找到所有的 FunctionDeclaration
  const functionDeclarations = root.find(j.FunctionDeclaration);

  // 针对每个 FunctionDeclaration 进行替换
  functionDeclarations.replaceWith((path) => {
    // 提取函数定义的名称和函数体
    const functionName = path.node.id.name;
    const functionBody = path.node.body;

    // 生成箭头函数
    const arrowFunction = j.arrowFunctionExpression(
      [],
      functionBody
    );

    // 生成新的函数定义
    const newFunctionDeclaration = j.variableDeclaration(
      "const",
      [
        j.variableDeclarator(
          j.identifier(functionName),
          arrowFunction
        )
      ]
    );

    return newFunctionDeclaration;
  });

  return root.toSource();
};
