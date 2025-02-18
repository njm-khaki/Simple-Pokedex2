/**
 * APIレスポンス型
 */
export interface ApiResponse<T> {
  // ステータスコード
  status: number;
  // レスポンスボディ
  body?: T;
}
