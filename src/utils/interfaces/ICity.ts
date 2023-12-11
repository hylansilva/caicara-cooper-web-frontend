export  interface ICity {
    place_id: number,
    licence: string,
    powered_by: string,
    osm_type: string,
    osm_id: number,
    lat: string,
    lon: string,
    display_name: string,
    address: {
        road: string,
        residential: string,
        city_district: string,
        town: string,
        municipality: string,
        state_district: string,
        state: string,
        region: string,
        postcode: string,
        country: string,
        country_code: string
    },
    boundingbox: [
        string,
        string,
        string,
        string
    ]
}