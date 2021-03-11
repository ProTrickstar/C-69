import React from 'react'
import{
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
}from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

export default class bookTransactionScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal',
        }
    }
    getCameraPermissions = async()=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions: status === "granted"
        });
    }

    handleBarcodeScanned = async({type,data})=>{
        this.state({
            scanned: true,
            scannedData: data,
            buttonState: 'normal',
        })
    }
    
    render(){
        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;
        if(buttonState === "clicked"&&hasCameraPermissions){

            return(
                <BarCodeScanner
                    onBarCodeScanned = {scanned  ? undefined: this.handleBarcodeScanned}
                    style = {StyleSheet.absoluteFillObject}
                />
            )
        }
        else if(buttonState === "normal"){
            
        return(
            <View style = {
              styles.container            }>
                <Text style = {styles.displayText}>{
                    hasCameraPermissions === true ? this.state.scannedData: "requestCameraPermission" 
                }</Text>
                <TouchableOpacity onPress = {this.getCameraPermissions} style = {styles.scanButton}>
                    <Text style = {styles.buttonText}>Scan QR Code</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    displayText:{
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    scanButton:{
        backgroundColor: '#000',
        margin: 10,
        padding: 10,
    }
})