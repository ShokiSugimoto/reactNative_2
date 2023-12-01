// データ挿入用

import React from "react";
import * as SQLite from 'expo-sqlite';
import { View } from 'react-native';
import { Button } from "react-native-paper";

const Sqlite = () => {

  const db = SQLite.openDatabase('inu.db');

  const handlePress = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO user(user_name, name, image, pass) VALUES(?, ?, ?, ?);',
        ['kanatoendo', '叶翔', 'profileImage_', 'ke'],
        // 'kanatoendo', '叶翔', 'profileImage_', 'ke',
        // 'shokisugimoto', '祥希', 'profileImage_', 'ss',
        // 'hiroyukitakada', '寛之', 'profileImage_', 'ht',
        // 'chenpochun', '柏均', 'profileImage_', 'cpc',
        // 'ibukimatsuda', '尉吹', 'profileImage_', 'im',
        // 'shomiyagawa', '翔', 'profileImage_', 'sm',
        // 'tomoakimurayama', '智章', 'profileImage_', 'tm',
        // 'manteklam', '文迪', 'profileImage_', 'mtl'
        (_, result) => {
          console.log('Insert success!');
        },
        (_, error) => {
          console.log('Error during insertion:', error);
        }
      );
    });
  };

  return(
    <View style={{width: '100%', height: '100%', backgroundColor: '#000000', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Button
        onPress={handlePress}
        style={{width: 40, height: 30, backgroundColor: 'rgba(255, 255, 255, .5)', marginBottom: 50}}
      />
    </View>
  );
}

export default Sqlite;
