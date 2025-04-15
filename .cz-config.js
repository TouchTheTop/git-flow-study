module.exports = {
  types: [
    { value: "feat", name: "✨ feat:     新功能" },
    { value: "fix", name: "🐛 fix:      修复 Bug" },
    { value: "docs", name: "📚 docs:     文档变更" },
    { value: "style", name: "🎨 style:    不影响逻辑的代码格式调整" },
    { value: "refactor", name: "♻️  refactor: 重构代码" },
    { value: "test", name: "✅ test:     添加或修改测试" },
    { value: "chore", name: "🔧 chore:    构建/工具/依赖更新" },
    { value: "revert", name: "⏪ revert:   回退提交" },
  ],
  messages: {
    type: "选择提交类型:",
    scope: "影响范围（可选）:",
    subject: "简要说明:",
    body: "详细描述（可选）:",
    footer: "关联 issue（如: #123）:",
    confirmCommit: "确定提交吗？",
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
};
