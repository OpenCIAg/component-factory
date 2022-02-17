module.exports = {
    src: [
      'projects/ciag/component-factory/src/lib/component-factory.service.ts',
      'projects/ciag/component-factory/src/lib/component-factory.module.ts',
    ],
    mode: 'file',
    includeDeclarations: true,
    tsconfig: 'tsconfig.json',
    out: 'docs',
    excludePrivate: true,
    excludeProtected: true,
    excludeExternals: true,
    readme: 'README.md',
    name: 'ciag@component-factory',
    ignoreCompilerErrors: true,
    plugin: 'none',
    listInvalidSymbolLinks: true,
    theme: 'markdown',
  };