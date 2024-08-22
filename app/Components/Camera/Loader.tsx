import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { FlashMode } from 'expo-camera/build/legacy/Camera.types';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
export default function CameraPage() {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [permissionMediaResponse, requestMediaPermission] = MediaLibrary.usePermissions();
    const cameraRef = useRef<CameraView>(null);

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }
    if (!permissionMediaResponse?.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the Media</Text>
                <Button onPress={requestMediaPermission} title="grant permission" />
            </View>
        );
    }


    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));

    }

    async function ImagePost(result:any) {
        let localUri = result.uri;
        let filename = localUri.split('/').pop();

        // Infer the type of the image
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        // Upload the image using the fetch and FormData APIs
        let formData = new FormData() as any;
        // Assume "photo" is the name of the form field the server expects
        formData?.append('photo', { uri: localUri, name: filename, type });

        console.log(formData,"form data");

        return await fetch('localhost', {
            method: 'POST',
            body: formData,
            headers: {
                'content-type': 'multipart/form-data',
            },
        });
    }

    function OnStartCapture(e:any) {
        if (cameraRef.current) {
            cameraRef?.current
                ?.takePictureAsync({
                    skipProcessing: false,
                })
                .then(async (photoData: any) => {
                    
                    try {
                        const asset = await MediaLibrary.createAssetAsync(photoData.uri);
                        console.log(photoData.uri, asset);
                                 
                        ImagePost(photoData).then(r=> {
                            console.log(photoData);
                        }).catch(err=> {
                             console.log(err)
                        })

                        
                    } catch (error) {
                       console.debug(error) 
                    }

                });
        }
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} ref={cameraRef} facing={facing} flash={FlashMode.on}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity  style={styles.button} onPress={toggleCameraFacing}>
                        <Text style={styles.text}>Flip Camera</Text>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={OnStartCapture}>
                        <Text style={styles.text}>Take Capture</Text>
                    </TouchableOpacity>
                </View>
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});
