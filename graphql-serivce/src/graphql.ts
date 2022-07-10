
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
    artists?: Nullable<Nullable<string>[]>;
    bands?: Nullable<Nullable<string>[]>;
    tracks?: Nullable<Nullable<string>[]>;
    genres?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export interface UpdateAlbum {
    _id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<string>[]>;
    bands?: Nullable<Nullable<string>[]>;
    tracks?: Nullable<Nullable<string>[]>;
    genres?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export interface NewArtist {
    firstName: string;
    secondName: string;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country: string;
    bands?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface UpdateArtist {
    _id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<string>;
}

export interface NewBand {
    name: string;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<string>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<string>[]>;
}

export interface UpdateBand {
    _id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<string>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<string>[]>;
}

export interface NewGenre {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface UpdateGenre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface NewTrack {
    title: string;
    album?: Nullable<string>;
    artists?: Nullable<Nullable<string>[]>;
    bands?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<string>[]>;
}

export interface UpdateTrack {
    id: string;
    title?: Nullable<string>;
    album?: Nullable<string>;
    artists?: Nullable<Nullable<string>[]>;
    bands?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<string>[]>;
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

export interface IQuery {
    getAlbums(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Album>[]> | Promise<Nullable<Nullable<Album>[]>>;
    getAlbum(id: string): Nullable<Album> | Promise<Nullable<Album>>;
    getArtist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    getArtists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Artists> | Promise<Nullable<Artists>>;
    getBand(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    getBands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Band>[]> | Promise<Nullable<Nullable<Band>[]>>;
    getGenre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    getGenres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;
    getTrack(id: string): Nullable<Track> | Promise<Nullable<Track>>;
    getTracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Track>[]> | Promise<Nullable<Nullable<Track>[]>>;
    login(login?: Nullable<Login>): Nullable<JWT> | Promise<Nullable<JWT>>;
    getUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createAlbum(newAlbum?: Nullable<NewAlbum>): Nullable<Album> | Promise<Nullable<Album>>;
    updateAlbum(id: string, updateAlbum?: Nullable<UpdateAlbum>): Nullable<Album> | Promise<Nullable<Album>>;
    deleteAlbum(id: string): Nullable<DeleteData> | Promise<Nullable<DeleteData>>;
    createArtist(newArtist?: Nullable<NewArtist>): Nullable<Artist> | Promise<Nullable<Artist>>;
    updateArtist(id: string, updateArtist?: Nullable<UpdateArtist>): Nullable<Artist> | Promise<Nullable<Artist>>;
    deleteArtist(id: string): Nullable<DeleteData> | Promise<Nullable<DeleteData>>;
    createBand(newBand?: Nullable<NewBand>): Nullable<Band> | Promise<Nullable<Band>>;
    updateBand(id: string, updateBand?: Nullable<UpdateBand>): Nullable<Band> | Promise<Nullable<Band>>;
    deleteBand(id: string): Nullable<DeleteData> | Promise<Nullable<DeleteData>>;
    createGenre(newGenre?: Nullable<NewGenre>): Nullable<Genre> | Promise<Nullable<Genre>>;
    updateGenre(id: string, updateGenre?: Nullable<UpdateGenre>): Nullable<Genre> | Promise<Nullable<Genre>>;
    deleteGenre(id: string): Nullable<DeleteData> | Promise<Nullable<DeleteData>>;
    createTrack(newBand?: Nullable<NewTrack>): Nullable<Track> | Promise<Nullable<Track>>;
    updateTrack(id: string, updateTrack?: Nullable<UpdateTrack>): Nullable<Track> | Promise<Nullable<Track>>;
    deleteTrack(id: string): Nullable<DeleteData> | Promise<Nullable<DeleteData>>;
    createUser(user?: Nullable<CreateUser>): Nullable<User> | Promise<Nullable<User>>;
}

export interface Artist {
    _id: string;
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
    artist?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<string>;
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

export interface Favorite {
    _id: string;
    userId: string;
    bandsIds?: string[];
    genresIds?: string[];
    artistsIds?: string[];
    tracksIds?: string[];
}

type Nullable<T> = T | null;
