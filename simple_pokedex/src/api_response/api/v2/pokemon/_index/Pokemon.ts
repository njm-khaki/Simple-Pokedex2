/**
 * ポケモン情報
 */
export interface Pokemon {
    // ポケモン名
    name: string;
    // 高さ
    height: number;
    // 重さ
    weight: number;
    // 見た目
    sprites: PokemonSprite;
    // タイプ
    types: Array<PokemonType>;
    // 種族値
    stats: Array<PokemonStat>;
    // 特性
    abilities: Array<PokemonAbility>;
};

/**
 * ポケモンの見た目
 */
export interface PokemonSprite {
    // デフォルト 後ろ姿
    back_default?: string;
    // 後ろ姿 雌
    back_female?: string;
    // 後ろ姿 色違い
    back_shiny?: string;
    // 後ろ姿 色違い 雌
    back_shiny_female?: string;
    // デフォルト 前面
    front_default?: string;
    // 前面 雌
    front_female?: string;
    // 前面 色違い
    front_shiny?: string;
    // 前面 色違い 雌
    front_shiny_female?: string;
}

/**
 * ポケモン タイプ情報
 */
export interface PokemonType {
    // タイプ番号
    slot: number;
    // タイプ情報
    type: {
        // タイプ名
        name: string;
        // タイプ情報 取得URL
        url: string;
    };
};

/**
 * ポケモン種族値情報
 */
export interface PokemonStat {
    // 種族値
    base_stat: number;
    // 努力値
    effort: number;
    // 種族値詳細情報
    stat: {
        // 種族値名
        name: string;
        // 種族値情報URL
        url: string;
    };
};

/**
 * ポケモン 特性情報
 */
export interface PokemonAbility {
    // 特性詳細情報
    ability: {
        // 特性名
        name: string;
        // 特性 詳細情報URL
        url: string;
    };
    // 夢(隠し)特性 フラグ
    is_hidden: boolean;
    // 特性番号
    slot: number;
}