import {View,Text,StyleSheet, Button} from 'react-native'


export const Home = ({navigation})=>{
    return <View style={styles.container}>
        <Text>HOME</Text>
        <Button title='ir a contatcs' onPress={()=>{
            navigation.navigate('ContactsNav')
        }}/>
        <Button title='ir a products' onPress={()=>{
            navigation.navigate('ProductsNav')
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