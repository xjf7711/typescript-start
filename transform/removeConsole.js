export function removeConsole(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);
  // 查找所有的 console.log() 调用节点。
  root.find(j.CallExpression, {
    callee: {
      type: 'MemberExpression',
      object: {
        type: 'Identifier',
        name: 'console',
      },
      property: {
        type: 'Identifier',
        name: 'log',
      },
    },
  }).replaceWith((node) => {
    // 将 console.log() 替换为 alert()。
    return j.callExpression(j.identifier('alert'), node.value.arguments);
  });
  // 查找所有 console.log() 语句的节点
  root
    .find(j.CallExpression, {
      callee: {
        property: { name: 'log' },
        object: { name: 'console' }
      }
    })
    // 删除找到的所有节点
    .remove();

  return root.toSource();
}
