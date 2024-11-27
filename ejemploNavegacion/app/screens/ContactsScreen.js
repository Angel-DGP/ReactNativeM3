import {View,Text,StyleSheet, Button} from 'react-native'

export const contacts = ({navigation})=>{
    return <View style={styles.container}>
        <Text>contacts</Text>
        <Button title='ir a home' onPress={()=>{
            navigation.navigate('HomeNav')
        }}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 50,
        paddingVertical: 30,
        justifyContent: 'center',
        alignItems:'center'
    }
})