/**
 * ポケモン一覧取得結果
 */
export interface PokemonList {
    // ポケモンの総数
    count: number;
    // 次のポケモン取得URL
    next?: string;
    // 前のポケモン取得URL
    previous?: string;
    // ポケモン一覧
    results: Array<PokemonIndex>;
}

/**
 * ポケモン 取得情報
 */
export interface PokemonIndex {
    // ポケモン名
    name: string;
    // 取得URL
    url: string;
}