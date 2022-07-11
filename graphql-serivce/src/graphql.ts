
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface NewAlbum {
    name: string;
    released?: Nullable<number>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bands?: Nullable<Nullable<string>[]>;
    tracksIds?: Nullable<Nullable<string>[]>;
    genres?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export interface UpdateAlbum {
    name?: Nullable<string>;
    released?: Nullable<number>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bands?: Nullable<Nullable<string>[]>;
    tracksIds?: Nullable<Nullable<string>[]>;
    genres?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export interface CreateArtist {
    firstName: string;
    secondName: string;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country: string;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface UpdateArtist {
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<string>;
}

export interface NewBand {
    name: string;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<string>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface UpdateBand {
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<string>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface NewMember {
    artist: string;
    instrument?: Nullable<string>;
    years?: Nullable<string>;
}

export interface AddItemToFavorites {
    id: string;
    userId: string;
    bands?: Nullable<Nullable<string>[]>;
    genres?: Nullable<Nullable<string>[]>;
    artists?: Nullable<Nullable<string>[]>;
    tracks?: Nullable<Nullable<string>[]>;
}

export interface NewGenre {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface UpdateGenre {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface NewTrack {
    title: string;
    album?: Nullable<string>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface UpdateTrack {
    title?: Nullable<string>;
    album?: Nullable<string>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface CreateUser {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}

export interface Login {
    email: string;
    password: string;
}

export interface Album {
    _id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    image?: Nullable<string>;
}

export interface Albums {
    items?: Nullable<Nullable<Album>[]>;
    limit?: Nullable<number>;
    offset?: Nullable<number>;
    total?: Nullable<number>;
}

export interface IQuery {
    albums(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Albums> | Promise<Nullable<Albums>>;
    album(id: string): Nullable<Album> | Promise<Nullable<Album>>;
    artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    artists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Artists> | Promise<Nullable<Artists>>;
    band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Bands> | Promise<Nullable<Bands>>;
    favourites(): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Genres> | Promise<Nullable<Genres>>;
    track(id: string): Nullable<Track> | Promise<Nullable<Track>>;
    tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Tracks> | Promise<Nullable<Tracks>>;
    jwt(login?: Nullable<Login>): Nullable<JWT> | Promise<Nullable<JWT>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createAlbum(album?: Nullable<NewAlbum>): Nullable<Album> | Promise<Nullable<Album>>;
    updateAlbum(id: string, album?: Nullable<UpdateAlbum>): Nullable<Album> | Promise<Nullable<Album>>;
    deleteAlbum(id: string): Nullable<DeleteData> | Promise<Nullable<DeleteData>>;
    createArtist(artist?: Nullable<CreateArtist>): Nullable<Artist> | Promise<Nullable<Artist>>;
    updateArtist(id: string, updateArtist?: Nullable<UpdateArtist>): Nullable<Artist> | Promise<Nullable<Artist>>;
    deleteArtist(id: string): Nullable<DeleteData> | Promise<Nullable<DeleteData>>;
    createBand(band?: Nullable<NewBand>): Nullable<Band> | Promise<Nullable<Band>>;
    updateBand(id: string, band?: Nullable<UpdateBand>): Nullable<Band> | Promise<Nullable<Band>>;
    deleteBand(id: string): Nullable<DeleteData> | Promise<Nullable<DeleteData>>;
    addTrackToFavourites(id: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    addBandToFavourites(id: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    addArtistToFavourites(id: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    addGenreToFavourites(id: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    createGenre(newGenre?: Nullable<NewGenre>): Nullable<Genre> | Promise<Nullable<Genre>>;
    updateGenre(id: string, updateGenre?: Nullable<UpdateGenre>): Nullable<Genre> | Promise<Nullable<Genre>>;
    deleteGenre(id: string): Nullable<DeleteData> | Promise<Nullable<DeleteData>>;
    createTrack(createTrack?: Nullable<NewTrack>): Nullable<Track> | Promise<Nullable<Track>>;
    updateTrack(id: string, updateTrack?: Nullable<UpdateTrack>): Nullable<Track> | Promise<Nullable<Track>>;
    deleteTrack(id: string): Nullable<DeleteData> | Promise<Nullable<DeleteData>>;
    register(user?: Nullable<CreateUser>): Nullable<User> | Promise<Nullable<User>>;
}

export interface Artist {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface Genre {
    _id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
    id: string;
}

export interface Artists {
    items?: Nullable<Nullable<Artist>[]>;
    limit?: Nullable<number>;
    offset?: Nullable<number>;
    total?: Nullable<number>;
}

export interface DeleteData {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
}

export interface Band {
    _id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<Member>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface Bands {
    items?: Nullable<Nullable<Band>[]>;
    limit?: Nullable<number>;
    offset?: Nullable<number>;
    total?: Nullable<number>;
}

export interface Favourites {
    id: string;
    userId?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    artists?: Nullable<Nullable<Artist>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
}

export interface Genres {
    items?: Nullable<Nullable<Genre>[]>;
    limit?: Nullable<number>;
    offset?: Nullable<number>;
    total?: Nullable<number>;
}

export interface Track {
    id: string;
    title: string;
    album?: Nullable<Album>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface Member {
    artist: Artist;
    instrument?: Nullable<string>;
    years?: Nullable<string>;
}

export interface Tracks {
    items?: Nullable<Nullable<Track>[]>;
    limit?: Nullable<number>;
    offset?: Nullable<number>;
    total?: Nullable<number>;
}

export interface User {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
}

export interface JWT {
    jwt: string;
}

type Nullable<T> = T | null;
