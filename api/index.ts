import { LRUCache } from "lru-cache";
import { hash as ohash } from "ohash";

const apiBaseUrl = "https://movies-proxy.vercel.app";

const promiseCache = new LRUCache<string, any>({
  max: 500,
  ttl: 2000 * 60 * 60 // 2 hour
});

async function _fetch(
  url: string,
  params: Record<string, string | number | boolean | undefined> = {}
) {
  // // 检查是否存在语言参数，如果不存在，则使用应用的本地化信息
  // if (params.language == null) {
  //   // 获取应用的本地化信息
  //   const locale = useNuxtApp().$i18n.locale;
  //   // 将本地化信息赋值给请求参数中的语言属性
  //   params.language = unref(locale);
  // }
  return await $fetch(url, {
    // 设置请求的基础URL
    baseURL: `${apiBaseUrl}/tmdb`,
    params
  });
}

// 公共接口函数
export function fetch(
  url: string,
  params: Record<string, string | number | boolean | undefined> = {}
): Promise<any> {
  // 计算请求的唯一哈希值，用于缓存请求结果
  const hash = ohash([url, params]);
  // 创建用于跟踪请求状态的状态变量，初始值为null
  const state = useState<any>(hash, () => null);
  // 如果已经存在缓存的请求结果，则直接返回缓存的结果
  if (state.value) return state.value;
  // 如果之前没有缓存过该请求
  if (!promiseCache.has(hash)) {
    // 设置缓存，以防止同时发起多次相同的请求
    promiseCache.set(
      hash,
      _fetch(url, params)
        .then((res) => {
          // 将请求结果存储在状态变量中
          state.value = res;
          return res;
        })
        .catch((e) => {
          // 请求失败时，从缓存中删除对应的哈希值并抛出错误
          promiseCache.delete(hash);
          throw e;
        })
    );
  }
  // 返回缓存或新发起的网络请求Promise
  return promiseCache.get(hash)!;
}
