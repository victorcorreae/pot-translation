import React from 'react';
import GetText from 'node-gettext';
import { StyleSheet, Text } from 'react-native';

const SimpleString = () => {

    const gt = new GetText();
    gt.locale();

    return (
        <>
            <Text style={styles.text}>{gt.gettext('Errore traduzione')}</Text>
            <Text style={styles.text}>{gt.gettext('Errore package matto')}</Text>
        </>
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