# Project Name: Geolocation with History

### Group: Colour Convulsion

#### Team members: Matt Wilkin, Michael Chapman, Jeffrey Lawrence

#### Technologies Used

* React Native
* Expo
* VSCode
* Github

#### Links

[Git Hub](https://github.com/michaelchapman-401-advanced-javascript/color-convulsion)

[PR](https://github.com/michaelchapman-401-advanced-javascript/color-convulsion/pull/1)

[Wireframe](./assets/images/wireframe.jpg)

#### Instructions of how to use the application

* clone the repository
* `npm i`
* `npm start`

* initiate tunneling with your phone's camera


#### Development reflections / documentation

The initial goal of the application was to generate random colors upon shaking the phone. 

We evisioned the first page to have a short description of how to generate the colors (shaking the phone) and a visual representation of the color change.  

This visual representation would take two forms: 
1. The background color would randomly roll (or flicker) through a number of changes until coming to rest on the final color.
2. Three groupings of the 3-digit representation the rgb numbers (1-256), would change in-step with and accurately represent the rgb color visually displayed. 
We further envisioned addional features, however we encoutered difficulties while trying to utilize the shake event listener to trigger our desired functionality. 

Apparently, the `shakeEventListener` is, by default, assigned to a developer debugging/reload tool and the process for unassigning the `shakeEventListener` was an involved process that extended beyond the scope of our current skillset and allowed time frame.

As a group, we decided to retool the application to utilize the built-in geolocation functionality to report the current latitude and longitude upon pressing a text box. 

This information would be trasnferred and printed in an ordered list on the second page of the application. 

In addition, we were able to encorporate a main-screen random background color change with each location capture. On the second page, we enabled scroll functionality to allow
a user to scroll through the list of captured locations.

We learned that the geolocation functionality is built in both Expo and React Native. 

#### Dependencies
* "@expo/samples": "~3.0.0",
* "@expo/vector-icons": "^10.0.1",
* "@react-navigation/web": "^1.0.0-alpha.9",
* "expo": "^33.0.0",
* "expo-asset": "^5.0.0",
* "expo-constants": "^5.0.0",
* "expo-font": "^5.0.0",
* "expo-location": "~5.0.1",
* "expo-permissions": "~5.0.1",
* "expo-sensors": "~5.0.1",
* "expo-web-browser": "^5.0.0",
* "install": "^0.13.0",
* "react": "16.8.3",
* "react-dom": "^16.8.6",
* "react-native": "https://github.com/expo/react-native/archive/sdk-33.0.0.tar.gz",
* "react-native-shake": "^3.3.1",
* "react-native-simple-compass": "^1.0.0",
* "react-native-voice": "^0.3.0",
* "react-native-web": "^0.11.4",
* "react-navigation": "^3.11.0"