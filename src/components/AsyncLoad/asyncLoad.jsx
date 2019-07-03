/**
 * @author jiangrui
 * @param {loader} 加载函数
 * @desc  借助react-loadable封装的react-组件异步加载函数
 */
import Loadable from 'react-loadable';
import Loading from './Loading';

export default function AsyncLoading(loader) {
  return Loadable({
    loader,
    loading: Loading
  })
}