import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { CommonButton } from "../buttons";
import Header from "../header";
import useStorage from "../../hooks/useStorage";
import { ADD_ADDRESS } from "../../queries";
import { useNavigation } from "@react-navigation/native";
import { showToast } from "../../util/toast";
import { Icon } from "react-native-elements";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function MapScreen() {
  const [user] = useStorage("logIn", { isObject: true });
  const [locationResult, setLocation] = useState(null);
  const [mapAddress, setMapAddress] = useState("");
  //   const
  const [hasLocationPermissions, setLocationPermission] = useState(false);
  const bottomSheetModalRef = useRef(null);
  const navigation = useNavigation();
  // variables
  //   const formattedAddress = `${mapAddress.name} ${mapAddress.district} ${mapAddress.city} ${mapAddress.country}`;
  const snapPoints = useMemo(() => ["10%", "25%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  // GETTING ADDRESS OF MARKER FROM EXPO LOCATION
  const getLocationAddress = async ({
    latitude,
    longitude,
    accuracy,
    altitude,
    formattedAddress,
  }) => {
    const locationDetails = {
      latitude: latitude || locationResult.latitude,
      longitude: longitude || locationResult.longitude,
      accuracy: accuracy || locationResult?.accuracy,
      altitude: altitude || locationResult?.altitude,
    };
    let address = "";
    setLocation(locationDetails);
    if (!formattedAddress)
      address = ((await Location.reverseGeocodeAsync(locationDetails)) ||
        [])[0];
    setMapAddress(
      formattedAddress ||
        `${address.name} ${address.district} ${address.city} ${address.country}`
    );
  };

  // GETTING LOCATION OF USER IN LONG AND LAT
  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if ("granted" !== status) {
      setLocation("Permission to access location was denied");
    } else {
      setLocationPermission(true);
    }
    let {
      coords: { latitude, longitude, accuracy, altitude },
    } = await Location.getCurrentPositionAsync({});
    Location.installWebGeolocationPolyfill();
    // navigator.geolocation.getCurrentPosition(setPosition);
    // setLocation({ latitude, longitude, accuracy, altitude });
    await getLocationAddress({ latitude, longitude, accuracy, altitude });
  };

  // USE EFFECT FROM GETTING LOCATION
  useEffect(() => {
    getLocationAsync();
  }, []);

  // CHANGE MARKER POSITION
  const handleMapChange = (e) => {
    const add = e.nativeEvent.coordinate;
    getLocationAddress({ latitude: add.latitude, longitude: add.longitude });
  };

  // SUBMITTING USER'S LOCATION
  const submitUserAddress = async () => {
    const addressObject = {
      address: mapAddress,
      locationDetails: locationResult,
    };
    if (user) await ADD_ADDRESS(addressObject);
    showToast("Location has been added", "success");
    navigation.goBack();
  };

  if (locationResult === null) {
    return (
      <>
        <Header screen="profile" headingText="Add location" />
        <Text>Finding your current location...</Text>
      </>
    );
  }

  if (hasLocationPermissions === false) {
    return (
      <>
        <Header screen="profile" headingText="Add location" />
        <Text>Location permissions are not granted.</Text>
      </>
    );
  }
  if (!mapAddress) {
    return (
      <>
        <Header screen="profile" headingText="Add location" />
        <Text>Address is loading....</Text>
      </>
    );
  }

  // RENDER FUNCTION
  return (
    <View style={styles.container}>
      <Header screen="profile" headingText="Add location" />
      <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            height: 38,
            color: "#5d5d5d",
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
        }}
        placeholder="Enter Location"
        fetchDetails={true}
        onPress={(data, details = null) => {
          getLocationAddress({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            formattedAddress: details.formatted_address,
          });
          // 'details' is provided when fetchDetails = true
          //   console.log( details.geometry.location.lat; );
        }}
        nearbyPlacesAPI="GoogleReverseGeocoding"
        currentLocation={true}
        enableHighAccuracyLocation={true}
        query={{
          key: "AIzaSyAb-aq-uNiitauLRo7CWdyJK2l7fQB6LTQ",
          language: "en",
        }}
      />
      <MapView
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: locationResult.latitude,
          latitudeDelta: parseFloat(locationResult.latitude) * 0.0001,
          longitude: locationResult.longitude,
          longitudeDelta: parseFloat(locationResult.longitude) * 0.0001,
        }}
        region={{
          latitude: locationResult.latitude,
          latitudeDelta: parseFloat(locationResult.latitude) * 0.0001,
          longitude: locationResult.longitude,
          longitudeDelta: parseFloat(locationResult.longitude) * 0.0001,
        }}
      >
        <MapView.Marker
          draggable
          title="Your location"
          description=""
          onDragEnd={handleMapChange}
          coordinate={{
            latitude: locationResult.latitude,
            longitude: locationResult.longitude,
          }}
        >
          <Icon name="map-pin" color="#ffbd11" type="font-awesome" />
        </MapView.Marker>
      </MapView>

      <BottomSheet
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <View style={[{ flexDirection: "row" }]}>
            <Text style={styles.locationText}>Location: </Text>
            <Text style={styles.mapAddressText}>{mapAddress}</Text>
          </View>
        </View>
        <CommonButton
          bgColor="#ffbd11"
          color="black"
          style={{ position: "absolute", bottom: 10 }}
          text="Add new Address"
          onPress={submitUserAddress}
          rightIcon
          rightIconName="add-outline"
        />
      </BottomSheet>
    </View>
  );
}

MapScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 10,
  },
  mapAddressText: {
    fontFamily: "ProximaNovaSemiBold",
  },
  locationText: {
    fontFamily: "ProximaNova",
  },
});
