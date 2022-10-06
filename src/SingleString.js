import React, { useState } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import GetText from 'node-gettext';

const SimpleString = () => {

    const gt = new GetText();

    const [language, setLanguage] = useState();

    const toggleLanguage = (value) => {
        console.log('Log: ', value);
        setLanguage(value)
        gt.locale(value);
    };

    return (
        <View>
            <Text style={styles.text}>{gt.gettext('Errore traduzione')}</Text>
            <Text style={styles.text}>{gt.gettext('Errore package matto')}</Text>

            <Button title={gt.gettext('Set Italiano')} onPress={() => toggleLanguage('it-It')} />
            <Button title={gt.gettext('Set English')} onPress={() => toggleLanguage('en-US')} />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        marginVertical: 10,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});


export default SimpleString;