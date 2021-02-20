export interface Location {
    id: number;
    name: string;
    locationType: string;
    coords: {
        latt: number;
        long: number;
    }
}