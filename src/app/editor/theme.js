import * as monaco from 'monaco-editor'

monaco.editor.defineTheme('dark', {
  inherit: false,
  base: 'vs-dark',
  colors: {
    'activityBar.activeBackground': '#9580ff10',
    'activityBar.activeBorder': '#ff80bf80',
    'activityBar.background': '#2b2640',
    'activityBar.foreground': '#f8f8f2',
    'activityBar.inactiveForeground': '#7970a9',
    'activityBarBadge.background': '#ff80bf',
    'activityBarBadge.foreground': '#f8f8f2',
    'badge.background': '#454158',
    'badge.foreground': '#f8f8f2',
    'breadcrumb.activeSelectionForeground': '#f8f8f2',
    'breadcrumb.background': '#22212c',
    'breadcrumb.focusForeground': '#f8f8f2',
    'breadcrumb.foreground': '#7970a9',
    'breadcrumbPicker.background': '#0b0a10',
    'button.background': '#454158',
    'button.foreground': '#f8f8f2',
    contrastBorder: '#0b0a10',
    'debugToolBar.background': '#151320',
    'diffEditor.insertedTextBackground': '#8aff8020',
    'diffEditor.removedTextBackground': '#ff958050',
    'dropdown.background': '#2b2640',
    'dropdown.border': '#0b0a10',
    'dropdown.foreground': '#f8f8f2',
    'editor.background': '#22212c',
    'editor.findMatchBackground': '#ffca8080',
    'editor.findMatchHighlightBackground': '#ffffff40',
    'editor.findRangeHighlightBackground': '#45415875',
    'editor.foldBackground': '#151320',
    'editor.foreground': '#f8f8f2',
    'editor.hoverHighlightBackground': '#80ffea50',
    'editor.lineHighlightBorder': '#454158',
    'editor.rangeHighlightBackground': '#9580ff15',
    'editor.selectionBackground': '#454158',
    'editor.selectionHighlightBackground': '#424450',
    'editor.snippetFinalTabstopHighlightBackground': '#22212c',
    'editor.snippetFinalTabstopHighlightBorder': '#8aff80',
    'editor.snippetTabstopHighlightBackground': '#22212c',
    'editor.snippetTabstopHighlightBorder': '#7970a9',
    'editor.wordHighlightBackground': '#80ffea50',
    'editor.wordHighlightStrongBackground': '#8aff8050',
    'editorCodeLens.foreground': '#7970a9',
    'editorError.foreground': '#ff9580',
    'editorGroup.border': '#9580ff',
    'editorGroup.dropBackground': '#45415870',
    'editorGroupHeader.tabsBackground': '#0b0a10',
    'editorGutter.addedBackground': '#8aff8080',
    'editorGutter.deletedBackground': '#ff958080',
    'editorGutter.modifiedBackground': '#80ffea80',
    'editorHoverWidget.background': '#22212c',
    'editorHoverWidget.border': '#7970a9',
    'editorIndentGuide.activeBackground': '#ffffff45',
    'editorIndentGuide.background': '#ffffff1a',
    'editorLineNumber.foreground': '#7970a9',
    'editorLink.activeForeground': '#80ffea',
    'editorMarkerNavigation.background': '#151320',
    'editorOverviewRuler.addedForeground': '#8aff8080',
    'editorOverviewRuler.border': '#0b0a10',
    'editorOverviewRuler.currentContentForeground': '#8aff80',
    'editorOverviewRuler.deletedForeground': '#ff958080',
    'editorOverviewRuler.errorForeground': '#ff958080',
    'editorOverviewRuler.incomingContentForeground': '#9580ff',
    'editorOverviewRuler.infoForeground': '#80ffea80',
    'editorOverviewRuler.modifiedForeground': '#80ffea80',
    'editorOverviewRuler.selectionHighlightForeground': '#ffca80',
    'editorOverviewRuler.warningForeground': '#ffca8080',
    'editorOverviewRuler.wordHighlightForeground': '#80ffea',
    'editorOverviewRuler.wordHighlightStrongForeground': '#8aff80',
    'editorRuler.foreground': '#ffffff1a',
    'editorSuggestWidget.background': '#151320',
    'editorSuggestWidget.foreground': '#f8f8f2',
    'editorSuggestWidget.selectedBackground': '#454158',
    'editorWarning.foreground': '#80ffea',
    'editorWhitespace.foreground': '#ffffff1a',
    'editorWidget.background': '#151320',
    errorForeground: '#ff9580',
    'extensionButton.prominentBackground': '#8aff8090',
    'extensionButton.prominentForeground': '#f8f8f2',
    'extensionButton.prominentHoverBackground': '#8aff8060',
    focusBorder: '#7970a9',
    foreground: '#f8f8f2',
    'gitDecoration.conflictingResourceForeground': '#ffca80',
    'gitDecoration.deletedResourceForeground': '#ff9580',
    'gitDecoration.ignoredResourceForeground': '#7970a9',
    'gitDecoration.modifiedResourceForeground': '#80ffea',
    'gitDecoration.untrackedResourceForeground': '#8aff80',
    'input.background': '#22212c',
    'input.border': '#0b0a10',
    'input.foreground': '#f8f8f2',
    'input.placeholderForeground': '#7970a9',
    'inputOption.activeBorder': '#9580ff',
    'inputValidation.errorBorder': '#ff9580',
    'inputValidation.infoBorder': '#ff80bf',
    'inputValidation.warningBorder': '#ffca80',
    'list.activeSelectionBackground': '#454158',
    'list.activeSelectionForeground': '#f8f8f2',
    'list.dropBackground': '#454158',
    'list.errorForeground': '#ff9580',
    'list.focusBackground': '#45415875',
    'list.highlightForeground': '#80ffea',
    'list.hoverBackground': '#45415875',
    'list.inactiveSelectionBackground': '#45415875',
    'list.warningForeground': '#ffca80',
    'listFilterWidget.background': '#2b2640',
    'listFilterWidget.noMatchesOutline': '#ff9580',
    'listFilterWidget.outline': '#424450',
    'merge.currentHeaderBackground': '#8aff8090',
    'merge.incomingHeaderBackground': '#9580ff90',
    'panel.background': '#22212c',
    'panel.border': '#9580ff',
    'panelTitle.activeBorder': '#ff80bf',
    'panelTitle.activeForeground': '#f8f8f2',
    'panelTitle.inactiveForeground': '#7970a9',
    'peekView.border': '#454158',
    'peekViewEditor.background': '#22212c',
    'peekViewEditor.matchHighlightBackground': '#ffff8080',
    'peekViewResult.background': '#151320',
    'peekViewResult.fileForeground': '#f8f8f2',
    'peekViewResult.lineForeground': '#f8f8f2',
    'peekViewResult.matchHighlightBackground': '#ffff8080',
    'peekViewResult.selectionBackground': '#454158',
    'peekViewResult.selectionForeground': '#f8f8f2',
    'peekViewTitle.background': '#0b0a10',
    'peekViewTitleDescription.foreground': '#7970a9',
    'peekViewTitleLabel.foreground': '#f8f8f2',
    'pickerGroup.border': '#9580ff',
    'pickerGroup.foreground': '#80ffea',
    'progressBar.background': '#ff80bf',
    'selection.background': '#9580ff',
    'settings.checkboxBackground': '#151320',
    'settings.checkboxBorder': '#0b0a10',
    'settings.checkboxForeground': '#f8f8f2',
    'settings.dropdownBackground': '#151320',
    'settings.dropdownBorder': '#0b0a10',
    'settings.dropdownForeground': '#f8f8f2',
    'settings.headerForeground': '#f8f8f2',
    'settings.modifiedItemIndicator': '#ffca80',
    'settings.numberInputBackground': '#151320',
    'settings.numberInputBorder': '#0b0a10',
    'settings.numberInputForeground': '#f8f8f2',
    'settings.textInputBackground': '#151320',
    'settings.textInputBorder': '#0b0a10',
    'settings.textInputForeground': '#f8f8f2',
    'sideBar.background': '#151320',
    'sideBarSectionHeader.background': '#22212c',
    'sideBarSectionHeader.border': '#0b0a10',
    'sideBarTitle.foreground': '#f8f8f2',
    'statusBar.background': '#0b0a10',
    'statusBar.debuggingBackground': '#ff9580',
    'statusBar.debuggingForeground': '#0b0a10',
    'statusBar.foreground': '#f8f8f2',
    'statusBar.noFolderBackground': '#0b0a10',
    'statusBar.noFolderForeground': '#f8f8f2',
    'statusBarItem.prominentBackground': '#ff9580',
    'statusBarItem.prominentHoverBackground': '#ffca80',
    'statusBarItem.remoteBackground': '#9580ff',
    'statusBarItem.remoteForeground': '#f8f8f2',
    'tab.activeBackground': '#22212c',
    'tab.activeBorderTop': '#ff80bf80',
    'tab.activeForeground': '#f8f8f2',
    'tab.border': '#0b0a10',
    'tab.inactiveBackground': '#151320',
    'tab.inactiveForeground': '#7970a9',
    'terminal.ansiBlack': '#21222c',
    'terminal.ansiBlue': '#9580ff',
    'terminal.ansiBrightBlack': '#7970a9',
    'terminal.ansiBrightBlue': '#bfb3ff',
    'terminal.ansiBrightCyan': '#b3fff2',
    'terminal.ansiBrightGreen': '#b9ffb3',
    'terminal.ansiBrightMagenta': '#ffb3d9',
    'terminal.ansiBrightRed': '#ffbfb3',
    'terminal.ansiBrightWhite': '#ffffff',
    'terminal.ansiBrightYellow': '#ffffb3',
    'terminal.ansiCyan': '#80ffea',
    'terminal.ansiGreen': '#8aff80',
    'terminal.ansiMagenta': '#ff80bf',
    'terminal.ansiRed': '#ff9580',
    'terminal.ansiWhite': '#f8f8f2',
    'terminal.ansiYellow': '#ffff80',
    'terminal.background': '#22212c',
    'terminal.foreground': '#f8f8f2',
    'titleBar.activeBackground': '#151320',
    'titleBar.activeForeground': '#f8f8f2',
    'titleBar.inactiveBackground': '#0b0a10',
    'titleBar.inactiveForeground': '#7970a9',
    'walkThrough.embeddedEditorBackground': '#151320',
  },
  rules: [
    {
      fontStyle: 'italic',
      token: 'emphasis',
    },
    {
      fontStyle: 'bold',
      token: 'strong',
    },
    {
      foreground: '#9580FF',
      token: 'header',
    },
    {
      foreground: '#F8F8F2',
      token: 'source',
    },
    {
      foreground: '#7970A9',
      token: 'meta.diff',
    },
    {
      foreground: '#7970A9',
      token: 'meta.diff.header',
    },
    {
      foreground: '#8AFF80',
      token: 'markup.inserted',
    },
    {
      foreground: '#FF9580',
      token: 'markup.deleted',
    },
    {
      foreground: '#FFCA80',
      token: 'markup.changed',
    },
    {
      foreground: '#FF9580',
      fontStyle: 'underline italic',
      token: 'invalid',
    },
    {
      foreground: '#F8F8F2',
      fontStyle: 'underline italic',
      token: 'invalid.deprecated',
    },
    {
      foreground: '#FFFF80',
      token: 'entity.name.filename',
    },
    {
      foreground: '#FF9580',
      token: 'markup.error',
    },
    {
      fontStyle: 'underline',
      token: 'markup.underline',
    },
    {
      foreground: '#FFCA80',
      fontStyle: 'bold',
      token: 'markup.bold',
    },
    {
      foreground: '#9580FF',
      fontStyle: 'bold',
      token: 'markup.heading',
    },
    {
      foreground: '#FFFF80',
      fontStyle: 'italic',
      token: 'markup.italic',
    },
    {
      foreground: '#80FFEA',
      token: 'beginning.punctuation.definition.list.markdown',
    },
    {
      foreground: '#80FFEA',
      token: 'beginning.punctuation.definition.quote.markdown',
    },
    {
      foreground: '#80FFEA',
      token: 'punctuation.definition.link.restructuredtext',
    },
    {
      foreground: '#8AFF80',
      token: 'markup.inline.raw',
    },
    {
      foreground: '#8AFF80',
      token: 'markup.raw.restructuredtext',
    },
    {
      foreground: '#80FFEA',
      token: 'markup.underline.link',
    },
    {
      foreground: '#80FFEA',
      token: 'markup.underline.link.image',
    },
    {
      foreground: '#FF80BF',
      token: 'meta.link.reference.def.restructuredtext',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.definition.directive.restructuredtext',
    },
    {
      foreground: '#FF80BF',
      token: 'string.other.link.description',
    },
    {
      foreground: '#FF80BF',
      token: 'string.other.link.title',
    },
    {
      foreground: '#FFFF80',
      fontStyle: 'italic',
      token: 'entity.name.directive.restructuredtext',
    },
    {
      foreground: '#FFFF80',
      fontStyle: 'italic',
      token: 'markup.quote',
    },
    {
      foreground: '#7970A9',
      token: 'meta.separator.markdown',
    },
    {
      foreground: '#8AFF80',
      token: 'fenced_code.block.language',
    },
    {
      foreground: '#8AFF80',
      token: 'markup.raw.inner.restructuredtext',
    },
    {
      foreground: '#8AFF80',
      token:
        'markup.fenced_code.block.markdown punctuation.definition.markdown',
    },
    {
      foreground: '#9580FF',
      token: 'punctuation.definition.constant.restructuredtext',
    },
    {
      foreground: '#9580FF',
      token: 'markup.heading.markdown punctuation.definition.string.begin',
    },
    {
      foreground: '#9580FF',
      token: 'markup.heading.markdown punctuation.definition.string.end',
    },
    {
      foreground: '#F8F8F2',
      token: 'meta.paragraph.markdown punctuation.definition.string.begin',
    },
    {
      foreground: '#F8F8F2',
      token: 'meta.paragraph.markdown punctuation.definition.string.end',
    },
    {
      foreground: '#FFFF80',
      token:
        'markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.begin',
    },
    {
      foreground: '#FFFF80',
      token:
        'markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.end',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'normal',
      token: 'entity.name.type.class',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'normal',
      token: 'entity.name.class',
    },
    {
      foreground: '#9580FF',
      fontStyle: 'italic',
      token: 'keyword.expressions-and-types.swift',
    },
    {
      foreground: '#9580FF',
      fontStyle: 'italic',
      token: 'keyword.other.this',
    },
    {
      foreground: '#9580FF',
      fontStyle: 'italic',
      token: 'variable.language',
    },
    {
      foreground: '#9580FF',
      fontStyle: 'italic',
      token: 'variable.language punctuation.definition.variable.php',
    },
    {
      foreground: '#9580FF',
      fontStyle: 'italic',
      token: 'variable.other.readwrite.instance.ruby',
    },
    {
      foreground: '#9580FF',
      fontStyle: 'italic',
      token: 'variable.parameter.function.language.special',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'entity.other.inherited-class',
    },
    {
      foreground: '#7970A9',
      token: 'comment',
    },
    {
      foreground: '#7970A9',
      token: 'punctuation.definition.comment',
    },
    {
      foreground: '#7970A9',
      token: 'unused.comment',
    },
    {
      foreground: '#7970A9',
      token: 'wildcard.comment',
    },
    {
      foreground: '#FF80BF',
      token: 'comment keyword.codetag.notation',
    },
    {
      foreground: '#FF80BF',
      token: 'comment.block.documentation keyword',
    },
    {
      foreground: '#FF80BF',
      token: 'comment.block.documentation storage.type.class',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'comment.block.documentation entity.name.type',
    },
    {
      foreground: '#80FFEA',
      token:
        'comment.block.documentation entity.name.type punctuation.definition.bracket',
    },
    {
      foreground: '#FFCA80',
      fontStyle: 'italic',
      token: 'comment.block.documentation variable',
    },
    {
      foreground: '#9580FF',
      token: 'constant',
    },
    {
      foreground: '#9580FF',
      token: 'variable.other.constant',
    },
    {
      foreground: '#FF80BF',
      token: 'constant.character.escape',
    },
    {
      foreground: '#FF80BF',
      token: 'constant.character.string.escape',
    },
    {
      foreground: '#FF80BF',
      token: 'constant.regexp',
    },
    {
      foreground: '#FF80BF',
      token: 'entity.name.tag',
    },
    {
      foreground: '#FF80BF',
      token: 'entity.other.attribute-name.parent-selector',
    },
    {
      foreground: '#8AFF80',
      fontStyle: 'italic',
      token: 'entity.other.attribute-name',
    },
    {
      foreground: '#8AFF80',
      token: 'entity.name.function',
    },
    {
      foreground: '#8AFF80',
      token: 'meta.function-call.generic',
    },
    {
      foreground: '#8AFF80',
      token: 'meta.function-call.object',
    },
    {
      foreground: '#8AFF80',
      token: 'meta.function-call.php',
    },
    {
      foreground: '#8AFF80',
      token: 'meta.function-call.static',
    },
    {
      foreground: '#8AFF80',
      token: 'meta.method-call.java meta.method',
    },
    {
      foreground: '#8AFF80',
      token: 'meta.method.groovy',
    },
    {
      foreground: '#8AFF80',
      token: 'support.function.any-method.lua',
    },
    {
      foreground: '#8AFF80',
      token: 'keyword.operator.function.infix',
    },
    {
      foreground: '#FFCA80',
      fontStyle: 'italic',
      token: 'entity.name.variable.parameter',
    },
    {
      foreground: '#FFCA80',
      fontStyle: 'italic',
      token: 'meta.at-rule.function variable',
    },
    {
      foreground: '#FFCA80',
      fontStyle: 'italic',
      token: 'meta.at-rule.mixin variable',
    },
    {
      foreground: '#FFCA80',
      fontStyle: 'italic',
      token: 'meta.function.arguments variable.other.php',
    },
    {
      foreground: '#FFCA80',
      fontStyle: 'italic',
      token:
        'meta.selectionset.graphql meta.arguments.graphql variable.arguments.graphql',
    },
    {
      foreground: '#FFCA80',
      fontStyle: 'italic',
      token: 'variable.parameter',
    },
    {
      foreground: '#8AFF80',
      fontStyle: 'italic',
      token: 'meta.decorator variable.other.readwrite',
    },
    {
      foreground: '#8AFF80',
      fontStyle: 'italic',
      token: 'meta.decorator variable.other.property',
    },
    {
      foreground: '#8AFF80',
      token: 'meta.decorator variable.other.object',
    },
    {
      foreground: '#FF80BF',
      token: 'keyword',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.definition.keyword',
    },
    {
      fontStyle: 'bold',
      token: 'keyword.control.new',
    },
    {
      fontStyle: 'bold',
      token: 'keyword.operator.new',
    },
    {
      foreground: '#FF80BF',
      token: 'meta.selector',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'support',
    },
    {
      foreground: '#9580FF',
      fontStyle: 'regular',
      token: 'support.function.magic',
    },
    {
      foreground: '#9580FF',
      fontStyle: 'regular',
      token: 'support.variable',
    },
    {
      foreground: '#9580FF',
      fontStyle: 'regular',
      token: 'variable.other.predefined',
    },
    {
      fontStyle: 'regular',
      token: 'support.function',
    },
    {
      fontStyle: 'regular',
      token: 'support.type.property-name',
    },
    {
      foreground: '#FF80BF',
      token:
        'constant.other.symbol.hashkey punctuation.definition.constant.ruby',
    },
    {
      foreground: '#FF80BF',
      token: 'entity.other.attribute-name.placeholder punctuation',
    },
    {
      foreground: '#FF80BF',
      token: 'entity.other.attribute-name.pseudo-class punctuation',
    },
    {
      foreground: '#FF80BF',
      token: 'entity.other.attribute-name.pseudo-element punctuation',
    },
    {
      foreground: '#FF80BF',
      token: 'meta.group.double.toml',
    },
    {
      foreground: '#FF80BF',
      token: 'meta.group.toml',
    },
    {
      foreground: '#FF80BF',
      token: 'meta.object-binding-pattern-variable punctuation.destructuring',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.colon.graphql',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.definition.block.scalar.folded.yaml',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.definition.block.scalar.literal.yaml',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.definition.block.sequence.item.yaml',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.definition.entity.other.inherited-class',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.function.swift',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.separator.dictionary.key-value',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.separator.hash',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.separator.inheritance',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.separator.key-value',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.separator.key-value.mapping.yaml',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.separator.namespace',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.separator.pointer-access',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.separator.slice',
    },
    {
      foreground: '#FF80BF',
      token: 'string.unquoted.heredoc punctuation.definition.string',
    },
    {
      foreground: '#FF80BF',
      token: 'support.other.chomping-indicator.yaml',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.separator.annotation',
    },
    {
      foreground: '#F8F8F2',
      token: 'keyword.operator.other.powershell',
    },
    {
      foreground: '#F8F8F2',
      token: 'keyword.other.statement-separator.powershell',
    },
    {
      foreground: '#F8F8F2',
      token: 'meta.brace.round',
    },
    {
      foreground: '#F8F8F2',
      token: 'meta.function-call punctuation',
    },
    {
      foreground: '#F8F8F2',
      token: 'punctuation.definition.arguments.begin',
    },
    {
      foreground: '#F8F8F2',
      token: 'punctuation.definition.arguments.end',
    },
    {
      foreground: '#F8F8F2',
      token: 'punctuation.definition.entity.begin',
    },
    {
      foreground: '#F8F8F2',
      token: 'punctuation.definition.entity.end',
    },
    {
      foreground: '#F8F8F2',
      token: 'punctuation.definition.tag.cs',
    },
    {
      foreground: '#F8F8F2',
      token: 'punctuation.definition.type.begin',
    },
    {
      foreground: '#F8F8F2',
      token: 'punctuation.definition.type.end',
    },
    {
      foreground: '#F8F8F2',
      token: 'punctuation.section.scope.begin',
    },
    {
      foreground: '#F8F8F2',
      token: 'punctuation.section.scope.end',
    },
    {
      foreground: '#F8F8F2',
      token: 'storage.type.generic.java',
    },
    {
      foreground: '#F8F8F2',
      token: 'string.template meta.brace',
    },
    {
      foreground: '#F8F8F2',
      token: 'string.template punctuation.accessor',
    },
    {
      foreground: '#FF80BF',
      token:
        'meta.string-contents.quoted.double punctuation.definition.variable',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.definition.interpolation.begin',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.definition.interpolation.end',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.definition.template-expression.begin',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.definition.template-expression.end',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.section.embedded.begin',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.section.embedded.coffee',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.section.embedded.end',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.section.embedded.end source.php',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.section.embedded.end source.ruby',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.definition.variable.makefile',
    },
    {
      foreground: '#80FFEA',
      token: 'entity.name.function.target.makefile',
    },
    {
      foreground: '#80FFEA',
      token: 'entity.name.section.toml',
    },
    {
      foreground: '#80FFEA',
      token: 'entity.name.tag.yaml',
    },
    {
      foreground: '#80FFEA',
      token: 'variable.other.key.toml',
    },
    {
      foreground: '#FFCA80',
      token: 'constant.other.date',
    },
    {
      foreground: '#FFCA80',
      token: 'constant.other.timestamp',
    },
    {
      foreground: '#8AFF80',
      fontStyle: 'italic underline',
      token: 'variable.other.alias.yaml',
    },
    {
      foreground: '#FF80BF',
      fontStyle: 'regular',
      token: 'storage',
    },
    {
      foreground: '#FF80BF',
      fontStyle: 'regular',
      token: 'meta.implementation storage.type.objc',
    },
    {
      foreground: '#FF80BF',
      fontStyle: 'regular',
      token: 'meta.interface-or-protocol storage.type.objc',
    },
    {
      foreground: '#FF80BF',
      fontStyle: 'regular',
      token: 'source.groovy storage.type.def',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'entity.name.type',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'keyword.primitive-datatypes.swift',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'keyword.type.cs',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'meta.protocol-list.objc',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'meta.return-type.objc',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'source.go storage.type',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'source.groovy storage.type',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'source.java storage.type',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'source.powershell entity.other.attribute-name',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'storage.class.std.rust',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'storage.type.attribute.swift',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'storage.type.c',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'storage.type.core.rust',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'storage.type.cs',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'storage.type.groovy',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'storage.type.objc',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'storage.type.php',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'storage.type.haskell',
    },
    {
      foreground: '#80FFEA',
      fontStyle: 'italic',
      token: 'storage.type.ocaml',
    },
    {
      foreground: '#FFCA80',
      token: 'entity.name.type.type-parameter',
    },
    {
      foreground: '#FFCA80',
      token: 'meta.indexer.mappedtype.declaration entity.name.type',
    },
    {
      foreground: '#FFCA80',
      token: 'meta.type.parameters entity.name.type',
    },
    {
      foreground: '#FF80BF',
      token: 'storage.modifier',
    },
    {
      foreground: '#FFFF80',
      token: 'string.regexp',
    },
    {
      foreground: '#FFFF80',
      token: 'constant.other.character-class.set.regexp',
    },
    {
      foreground: '#FFFF80',
      token: 'constant.character.escape.backslash.regexp',
    },
    {
      foreground: '#FF80BF',
      token: 'punctuation.definition.group.capture.regexp',
    },
    {
      foreground: '#FF9580',
      token: 'string.regexp punctuation.definition.string.begin',
    },
    {
      foreground: '#FF9580',
      token: 'string.regexp punctuation.definition.string.end',
    },
    {
      foreground: '#80FFEA',
      token: 'punctuation.definition.character-class.regexp',
    },
    {
      foreground: '#FFCA80',
      token: 'punctuation.definition.group.regexp',
    },
    {
      foreground: '#FF9580',
      token: 'punctuation.definition.group.assertion.regexp',
    },
    {
      foreground: '#FF9580',
      token: 'keyword.operator.negation.regexp',
    },
    {
      foreground: '#8AFF80',
      token: 'meta.assertion.look-ahead.regexp',
    },
    {
      foreground: '#FFFF80',
      token: 'string',
    },
    {
      foreground: '#E9F284',
      token: 'punctuation.definition.string.begin',
    },
    {
      foreground: '#E9F284',
      token: 'punctuation.definition.string.end',
    },
    {
      foreground: '#8BE9FE',
      token: 'punctuation.support.type.property-name.begin',
    },
    {
      foreground: '#8BE9FE',
      token: 'punctuation.support.type.property-name.end',
    },
    {
      foreground: '#7970A9',
      token: 'string.quoted.docstring.multi',
    },
    {
      foreground: '#7970A9',
      token:
        'string.quoted.docstring.multi.python punctuation.definition.string.begin',
    },
    {
      foreground: '#7970A9',
      token:
        'string.quoted.docstring.multi.python punctuation.definition.string.end',
    },
    {
      foreground: '#7970A9',
      token: 'string.quoted.docstring.multi.python constant.character.escape',
    },
    {
      foreground: '#F8F8F2',
      token: 'variable',
    },
    {
      foreground: '#F8F8F2',
      token: 'constant.other.key.perl',
    },
    {
      foreground: '#F8F8F2',
      token: 'support.variable.property',
    },
    {
      foreground: '#F8F8F2',
      token: 'variable.other.constant.js',
    },
    {
      foreground: '#F8F8F2',
      token: 'variable.other.constant.ts',
    },
    {
      foreground: '#F8F8F2',
      token: 'variable.other.constant.tsx',
    },
    {
      foreground: '#FFCA80',
      fontStyle: 'italic',
      token: 'meta.import variable.other.readwrite',
    },
    {
      foreground: '#FFCA80',
      fontStyle: 'italic',
      token: 'meta.object-binding-pattern-variable variable.object.property',
    },
    {
      foreground: '#FFCA80',
      fontStyle: 'italic',
      token: 'meta.variable.assignment.destructured.object.coffee variable',
    },
    {
      foreground: '#F8F8F2',
      fontStyle: 'normal',
      token: 'meta.import variable.other.readwrite.alias',
    },
    {
      foreground: '#F8F8F2',
      fontStyle: 'normal',
      token: 'meta.export variable.other.readwrite.alias',
    },
    {
      foreground: '#F8F8F2',
      fontStyle: 'normal',
      token:
        'meta.variable.assignment.destructured.object.coffee variable variable',
    },
    {
      foreground: '#FFFF80',
      token: 'meta.selectionset.graphql variable',
    },
    {
      foreground: '#F8F8F2',
      token: 'meta.selectionset.graphql meta.arguments variable',
    },
    {
      foreground: '#80FFEA',
      token: 'entity.name.fragment.graphql',
    },
    {
      foreground: '#80FFEA',
      token: 'variable.fragment.graphql',
    },
    {
      foreground: '#F8F8F2',
      token: 'constant.other.symbol.hashkey.ruby',
    },
    {
      foreground: '#F8F8F2',
      token: 'keyword.operator.dereference.java',
    },
    {
      foreground: '#F8F8F2',
      token: 'keyword.operator.navigation.groovy',
    },
    {
      foreground: '#F8F8F2',
      token: 'meta.scope.for-loop.shell punctuation.definition.string.begin',
    },
    {
      foreground: '#F8F8F2',
      token: 'meta.scope.for-loop.shell punctuation.definition.string.end',
    },
    {
      foreground: '#F8F8F2',
      token: 'meta.scope.for-loop.shell string',
    },
    {
      foreground: '#F8F8F2',
      token: 'storage.modifier.import',
    },
    {
      foreground: '#F8F8F2',
      token: 'punctuation.section.embedded.begin.tsx',
    },
    {
      foreground: '#F8F8F2',
      token: 'punctuation.section.embedded.end.tsx',
    },
    {
      foreground: '#F8F8F2',
      token: 'punctuation.section.embedded.begin.jsx',
    },
    {
      foreground: '#F8F8F2',
      token: 'punctuation.section.embedded.end.jsx',
    },
    {
      foreground: '#F8F8F2',
      token: 'punctuation.separator.list.comma.css',
    },
    {
      foreground: '#F8F8F2',
      token: 'constant.language.empty-list.haskell',
    },
    {
      foreground: '#9580FF',
      token: 'source.shell variable.other',
    },
    {
      foreground: '#9580FF',
      fontStyle: 'normal',
      token: 'support.constant',
    },
    {
      foreground: '#FFFF80',
      token: 'meta.scope.prerequisites.makefile',
    },
    {
      foreground: '#FFFF80',
      token: 'meta.attribute-selector.scss',
    },
    {
      foreground: '#F8F8F2',
      token:
        'punctuation.definition.attribute-selector.end.bracket.square.scss',
    },
    {
      foreground: '#F8F8F2',
      token:
        'punctuation.definition.attribute-selector.begin.bracket.square.scss',
    },
    {
      foreground: '#7970A9',
      token: 'meta.preprocessor.haskell',
    },
    {
      foreground: '#6796E6',
      token: 'token.info-token',
    },
    {
      foreground: '#CD9731',
      token: 'token.warn-token',
    },
    {
      foreground: '#F44747',
      token: 'token.error-token',
    },
    {
      foreground: '#B267E6',
      token: 'token.debug-token',
    },
  ],
  encodedTokensColors: [],
})
