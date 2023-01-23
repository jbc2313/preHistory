import React from 'react';
import { Map, Marker } from 'pigeon-maps';

export default function WorldMap() {
    return (
        <Map height={800} width={800} defaultCenter={[37.223056, 38.9225]} defaultZoom={15}>
            <Marker width={30} anchor={[37.223056, 38.9225]} />
        </Map>

    )


}
