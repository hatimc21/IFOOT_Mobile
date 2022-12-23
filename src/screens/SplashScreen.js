import React, { useEffect } from "react";
import { ImageBackground } from "react-native";
import { Image } from "react-native";

const SplashScreen = (props) =>{
    
    const wait = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
      };

    function next(){
        wait(10000000);
        return () => props.navigation.navigate(("LoginPage"));
    }
    return(
        <ImageBackground 
            style={{flex: 1}} 
            source={require('../img/berna.jpg')} 
            >
                <Image 
                    source={require('../img/Slpash.gif')}  
                    style={{flex: 1}}
                    onLoadEnd={next()}
                    />
        </ImageBackground>
        
    )
}
export default SplashScreen