import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {colors} from '../../styles';
import {useNavigation} from '@react-navigation/native';

interface WelcomeComponentProps {}

const WelcomeComponent = (props: WelcomeComponentProps) => {
  const navigation = useNavigation();

  const date = `${new Date().getDate()}/${
    new Date().getMonth() + 1
  }/${new Date().getFullYear()}`;
  return (
    <View style={styles.container}>
      <View style={{marginTop: 60}}>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
          REACT NATIVE CHALLENGE
        </Text>
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16}}>
          IVAN VIVEROS
        </Text>
      </View>

      <View
        style={{
          borderRadius: 200,
          backgroundColor: colors.turquese,
          width: 350,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 30,
          marginTop: 100,
          paddingTop: 40,
        }}>
        <Image
          source={require('../../assets/01.png')}
          style={{width: 280, height: 350}}
        />
      </View>

      <View
        style={{
          marginTop: 80,
          paddingTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabNav')}
          style={{
            width: 160,
            height: 60,
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 10,
          }}>
          <Text style={{textAlign: 'center', fontSize: 12}}>ENTER</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          marginTop: 20,
          textAlign: 'center',
          fontSize: 16,
          fontWeight: '500',
        }}>
        {date}
      </Text>
    </View>
  );
};

export default WelcomeComponent;

const styles = StyleSheet.create({});
