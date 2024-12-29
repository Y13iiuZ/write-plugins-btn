const Configuration = { 
   // 忽略包含 init 字符串的 commit
  ignores: [(commit) => commit.includes('init')],
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则类型
  rules: {
    'body-leading-blank': [2, 'always'], // 要求提交信息的正文部分必须以空行开始
    'footer-leading-blank': [1, 'always'], // 要求提交信息的页脚部分必须以空行开始
    'header-max-length': [2, 'always', 108], // 要求提交信息的标题部分最长为 108 个字符
    'subject-empty': [2, 'never'], // 求提交信息的主题部分不能为空
    'type-empty': [2, 'never'], // 要求提交信息的类型部分不能为空
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增feature
        'fix', // 修复bug
        'perf', // 优化相关，比如性能、体验的提升
        'style', // 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑;
        'docs', // 	仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等;
        'test', // 测试用例，包括单元测试、集成测试等
        'refactor', // 代码重构，没有加新功能或者修复bug
        'build',
        'ci',
        'chore', // 改变构建流程、或者增加依赖库、工具等
        'revert', // 回滚到上一个版本
        'wip',
        'workflow',
        'types',
        'release',
      ],
    ],
  },
  prompt: {
    questions: {
      type: {
        description: 'Commit 类型选择',
        enum: {
          'feat': {
            description: '新增feature',
            title: 'feat: 新增feature',
            emoji: '✨'
          }
        }
      }
    }
  }
}

export default Configuration;
