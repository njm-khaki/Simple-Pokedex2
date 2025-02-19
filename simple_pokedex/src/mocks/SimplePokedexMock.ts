import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { PokeApiMock } from './api/PokeApiMock';

export const SimplePokedexMock = () => {
  const mock = new MockAdapter(axios, {
    onNoMatch: 'passthrough',
  });

  PokeApiMock(mock);
};

/**
 * モックするURL
 * 静的/動的URLに応じたパスを返却
 * 動的URLの記載ルール
 * 可変部分は`:`から始まる文字列を割り当てる
 * 例 idの部分が可変
 * `api/:id/user`
 * @param path APIのパス(文字列) {string}
 * @returns モックに設定するパス {string | RegExp}
 */
export const parseDynamicMockPath = (path: string) => {
  // URLの末端が可変のときは正規表現で指定する必要はない
  // const trimmedPath = path.replace(/:\w+$/, ``);

  // 動的URLを指定しているなら正規表現で返却
  return path.match(/:\w+/g)
    ? // :から始まる文字列を置き換える
      new RegExp(path.replace(/:\w+/g, `[^/]+`))
    : // 静的なURLは文字列で指定して設定する
      path;
};

/**
 * 動的URLから可変値を抜き出す関数
 * @param path APIのパス(文字列) {string}
 * @param url 呼び出されたURL {string | undefined}
 * @returns URLから抜き出した可変値のリスト
 */
export const matchDynamicPathParameter = (
  path: string,
  url: string | undefined
) => {
  // 動的URLの記載ルールから
  // 可変値を抜き出す正規表現を生成
  const pattern = path.replace(/:\w+/g, `([^/]+)`);

  // 呼び出されたURLから可変値を抜き出す
  const params = url?.match(RegExp(pattern));

  // 抜き出した値をリストにして返却
  return params?.slice(1) ?? [];
};
