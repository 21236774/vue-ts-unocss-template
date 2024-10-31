/* eslint-env node */
/**
 * feat:新功能
 * update:更新某功能
 * merge:合并
 * fix:修补某功能的bug
 * refactor:重构某个功能
 * optimize:优化构建工具或运行时性能
 * style:仅样式改动
 * docs:仅文档新增/改动
 * chore:构建过程或辅助工具的变动
 */

// eslint-disable-next-line no-undef
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'update',
        'merge',
        'fix',
        'refactor',
        'optimize',
        'style',
        'docs',
        'chore'
      ]
    ],
    'subject-empty': [0, 'always'],
    'subject-case': [0, 'always']
  }
}
