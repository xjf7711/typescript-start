
export function varToConst(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // 将所有 var 声明语句替换为 let 或 const
  // 有效
  root.find(j.VariableDeclaration, {kind: 'var'}).forEach((path) => {
    j(path).replaceWith(j.variableDeclaration(
      path.node.kind === 'var' ? 'const' : 'let',
      path.node.declarations,
    ));
  });
  // 无效
  // 将for循环中的计数器变量声明从const改为let
  // root.find(j.ForStatement).forEach(path => {
  //   const init = path.node.init;
  //   if (init && init.kind === 'const') {
  //     init.kind = 'let';
  //   }
  // });

  return root.toSource();
}

