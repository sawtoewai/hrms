import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import { endpoints } from '../../services/endpoints';

class RecruitmentForm extends Component {

    state = {
        editedRecruitment: null
    }

    inputChanged = (name, value) => {
        console.log('input change', name, value);
        recruitment = this.props.route.params.recruitment;
        recruitment[name] = value;
        this.setState({ editedRecruitment: recruitment });
    }

    save = () => {
        console.log('save click');
        token = this.props.route.params.token;
        fetch(endpoints.recruitment, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(this.state.editedRecruitment)
        }).then( resp => resp.json())
        .then( res => this.props.navigation.navigate('RecruitmentDetail', {  
            recruitment: this.state.editedRecruitment
        })  
        )
        .catch( error => console.log(error))
    }  
        
    update = () => {
        console.log('update click');
        token = this.props.route.params.token;
        recruitment = this.props.route.params.recruitment;
        fetch(`${endpoints.recruitment}${recruitment.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(
                this.state.editedRecruitment
            )
        }).then( resp => resp.json())
        .then( res => this.props.navigation.navigate('RecruitmentDetail', {  
            recruitment: this.state.editedRecruitment
        }))
        .catch( error => console.log(error))
    }

    render() {
        recruitment = this.props.route.params.recruitment;
        view_type = this.props.route.params.view_type;

        return (
            <View style={styles.container}>
                <View style={{ marginBottom:20, height: 100, alignItems:"center", justifyContent: "center"}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20}}> Recruitment Form </Text>
                </View>

                <TextInput 
                    style={styles.inputText} 
                    value={recruitment.name} 
                    onChangeText={value => this.inputChanged('name', value)}
                    />

                <TextInput 
                    style={styles.inputText} 
                    value={recruitment.phone} 
                    onChangeText={value => this.inputChanged('phone', value)}
                    />

                <TextInput 
                    style={styles.inputText} 
                    value={recruitment.address} 
                    onChangeText={value => this.inputChanged('address', value)}
                    />
                
                <View style={{ width: '80%'}}>
                    {
                        view_type ? <Button onPress={this.save} title="Save" /> : <Button onPress={this.update} title="Update" />
                    }
                </View>
                <Button  title="Go Home"  onPress={() => this.props.navigation.navigate('RecruitmentList')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    inputText: {
      height: 50,
      padding: 10,
      height: 45,
      width: "80%",
      borderRadius: 10,
      marginBottom: 20,
      borderColor: 'blue', 
      borderWidth: 1
    },
});

export default RecruitmentForm;
