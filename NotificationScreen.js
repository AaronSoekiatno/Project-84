import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';

export default class NotificationScreen extends React.Component {
constructor(){
    super();
this.state = {
    allNotification:[],
}
}

keyExtractor = (item,index) => index.toString();
renderItem=({item,i})=>{
    return(
        <ListItem
            key={i}
            title={item.itemName}
            subtitle={item.description}
            titleStyle={{color:'black',fontWeight:'bold'}}
            rightElement={
                <TouchableOpacity 
                style={styles.btn}
                //onPress={()=>{}}
                >
                <Text style={{color:'white'}}>Exchange</Text>
                </TouchableOpacity>
            }
            />
    )
}

    render(){
        return(
            <View>
                <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.allNotifications}
                renderItem={this.renderItem}
                />
            </View>
        )
    }
}