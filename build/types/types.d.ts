export declare enum MovieType {
    MOVIE = "movie",
    TVSERIES = "tv-show"
}
export type MovieTypeStrings = keyof typeof MovieType;
export declare enum MovieReport {
    TRENDING = "Trending",
    LATEST_MOVIE = "Latest Movies",
    LATEST_TV_SHOWS = "Latest TV Shows",
    COMING_SOON = "Coming Soon"
}
export declare enum Filter {
    GENRE = "genre",
    COUNTRY = "country"
}
export type FilterStrings = keyof typeof Filter;
export declare enum StreamingServers {
    UpCloud = "UpCloud",
    VidCloud = "VidCloud",
    MixDrop = "MixDrop"
}
export type StreamingServersStrings = keyof typeof StreamingServers;
export interface ISliderDetail {
    quality: string;
    duration: string;
    imdb: string;
    genres: string[];
}
export interface ISlider {
    image: string;
    title: string;
    detail: ISliderDetail;
    description: string;
}
export interface IMovieResult {
    id: string;
    title: string;
    url?: string;
    image?: string;
    releaseDate?: string | null;
    type?: MovieType;
    [x: string]: unknown;
}
export interface IHomeResult {
    slider: ISlider[];
    moviesSection: {
        trending: {
            trendingMovies: IMovieResult[];
            trendingTVShows: IMovieResult[];
        };
        latestMovies: IMovieResult[];
        latestTvShows: IMovieResult[];
        commingSoon: IMovieResult[];
    };
}
export interface IGenre {
    id?: number;
    title: string;
    url: string;
}
export interface ICountry {
    id?: number;
    title: string;
    url: string;
}
export interface ISearch<T> {
    currentPage?: number;
    hasNextPage?: boolean;
    totalPages?: number;
    totalResults?: number;
    results: T[];
}
export interface IMovieEpisode {
    id: string;
    title: string;
    url?: string;
    episode?: number;
    seasons?: number;
    [x: string]: unknown;
}
export interface IMovieInfo extends IMovieResult {
    cover: string;
    description: string;
    episodes: IMovieEpisode[];
    recommended?: IMovieResult[];
    country?: ICountry;
    genres?: string[];
    productions?: string[];
    casts?: string[];
    tags?: string[];
    duration?: string;
    rating?: number;
    quality?: string;
}
export interface IEpisodeServer {
    id: string;
    name: string;
    url: string;
}
export interface IVideo {
    url: string;
    quality?: string;
    isM3U8: boolean;
    poster?: string;
}
export interface ISubtile {
    url: string;
    lang: string;
}
export interface IVideoResult {
    sources: IVideo[];
    subtiles: ISubtile[];
}
//# sourceMappingURL=types.d.ts.map