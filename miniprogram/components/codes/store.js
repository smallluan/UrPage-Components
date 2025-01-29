export const getJsSaveWords = () => {
  return [
    {
      key: 'const',
      class: 'defineSaveWord'
    },
    {
      key: 'let',
      class: 'defineSaveWord'
    },
    {
      key: 'var',
      class: 'defineSaveWord'
    },
    {
      key: 'function',
      class: 'function'
    },
    {
      key: 'this',
      class: 'this'
    },
    {
      key: 'async',
      class: 'promise'
    },
    {
      key: 'await',
      class: 'promise'
    },
    {
      key: '=>',
      class: 'arrow'
    },
    {
      key: '.',
      class: 'dot'
    },
    {
      key: 'wx',
      class: 'wx-class'
    },
    {
      key: 'console',
      class: 'console'
    },
    {
      key: 'new',
      class: 'new'
    },
    {
      key: 'Promise',
      class: 'promise'
    },
    {
      key: 'length', 
      class: 'length'
    },
    {
      key: 'true',
      class: 'if-class'
    },
    {
      key: 'false',
      class: 'if-class'
    },
    {
      key: 'typeof',
      class: 'if-class'
    },
    {
      key: 'import',
      class: 'if-class'
    },
    {
      key: 'as',
      class: 'if-class'
    },
    {
      key: 'from',
      class: 'if-class'
    },
    {
      key: '?',
      class: 'if-class'
    },
    {
      key: 'export',
      class: 'if-class'
    },
    {
      key: ':',
      class: 'if-class'
    },
    {
      key: 'if', 
      class: 'if-class'
    },
    {
      key: 'else', 
      class: 'if-class'
    },
    {
      key: 'continue', 
      class: 'if-class'
    },
    {
      key: 'return', 
      class: 'if-class'
    },
    {
      key: '+',
      class: 'op'
    },
    {
      key: '-',
      class: 'op'
    },
    {
      key: '*',
      class: 'op'
    },
    {
      key: '/',
      class: 'op'
    },
  ]
}

export const getHtmlSaveWords = () => {
  return [
    {
      key: '<view>'
    }
  ]
}