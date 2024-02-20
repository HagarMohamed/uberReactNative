import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useDispatch, useSelector } from "react-redux";
import tw from 'twrnc';
import { GOOGLE_MAP_API_KEY } from '@env'
import { selectDestination, selectOrigin, setTravelTimeInformation } from "../redux/reducers/navReducer";
import { useEffect, useRef } from "react";



const Map = () => {

    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)
    const dispatch = useDispatch()


    useEffect(() => {
        if (!origin || !destination) return;
        mapRef.current.fitToSuppliedMarkers(["origin", "destination"],
            {
                edgePadding: { top: 50, bottom: 50, left: 50, right: 50 },
                animated: true
            }
        )
    }, [origin, destination])

    useEffect(() => {
        if (!origin || !destination) return;

        const getTravelTime = async () => {
            fetch(`https://api.distancematrix.ai/maps/api/distancematrix/json??origins=${origin.description}&destinations=${destination.description}
            &key=${GOOGLE_MAP_API_KEY}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
                })
        }

        getTravelTime()

    }, [origin, destination, GOOGLE_MAP_API_KEY])

    return (
        <MapView style={tw`flex-1`}
            mapType="mutedStandard"
            ref={mapRef}
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }} >

            {
                origin && destination &&
                <MapViewDirections
                    destination={destination.description}
                    origin={origin.description}
                    apikey={GOOGLE_MAP_API_KEY}
                    strokeColor="black"
                    strokeWidth={3}

                />

            }

            {
                origin?.location && <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng
                    }}
                    title="Origin"
                    identifier="origin"
                    description={origin.description}
                />
            }

            {
                destination?.location && <Marker
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng
                    }}
                    title="Destination"
                    identifier="destination"
                    description={destination.description}
                />
            }


        </MapView>
    );
}


export default Map