import React, { Component } from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { endpoints } from '../../services/endpoints';

class ContractDetail extends Component {

    token = null;

    deleteClicked = () => {
        console.log('delete click');
        token = this.props.route.params.token;
        contract = this.props.route.params.contract;
        fetch(`${endpoints.contract}${contract.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
        .then( res => this.props.navigation.navigate('ContractList'))
        .catch( error => console.log(error))
    }

    render() {
        contract = this.props.route.params.contract;
        return (
            <View style={styles.container}>
                <View style={{ marginBottom:20, height: 100, alignItems:"center", justifyContent: "center"}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}> Contract Detail </Text>
                </View>
                <View style={{ marginLeft:20, alignItems: 'flex-start' }}>
                    <Text> Name: { contract.name } </Text>
                    <Text> Start Date: { contract.start_date } </Text>
                    <Text> End Date: { contract.end_date } </Text>
                </View>
                <View style={{ marginTop:50, alignItems:"center"}}>
                    <View style={{ width: '80%'}}>
                        <Button  title="Update"  
                            onPress={() => this.props.navigation.navigate('ContractForm', { contract: contract, view_type: false, token: token })} 
                        />  
                        <Text />
                        <Button  title="Delete"  onPress={this.deleteClicked} />
                        <Text />
                        <Button  title="Go Home"  onPress={() => this.props.navigation.navigate('ContractList')} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    }
});

export default ContractDetail;
