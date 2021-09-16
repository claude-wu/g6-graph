/**
 * @author claude
 * @date 2020/04/26
 * @description 注册工厂函数
 */

import shape from './shape/exports';
import behavior from './behavior/exports';
import registerEdges from './shape/edges/base-edge';

export default () => {
  // 注册图形
  shape();
  // 注册行为
  behavior();
  // 注册边
  registerEdges();
};
