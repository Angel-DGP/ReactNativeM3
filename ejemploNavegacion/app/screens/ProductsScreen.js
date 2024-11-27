import {View,Text,StyleSheet, Button} from 'react-native'


export const Products = ({navigation})=>{
    return <View style={styles.container}>
        <Text>Productos</Text>
        <Button title='ir a Home' onPress={()=>{
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