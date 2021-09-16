import registerBaseNode from './items/base-node';
import registerNode from './node';

export default () => {
  // 先注册基础节点
  registerBaseNode();
  registerNode();
};
