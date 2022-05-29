/**
 * 使用 qiankun 加载该应用时，动态的修改 webpack 的 public_path
 */
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}
