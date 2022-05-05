import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.background,
      },
      item: {
        padding: 10,
        flexDirection: 'row',
        margin: (24, 0),
        // opacity: 0.5,
      },
      header: {
        fontSize: 16,
        color: Colors.text_tret,
        fontFamily: 'Inter',
        fontWeight: '500',
        margin: (0, 10),
        lineHeight: 19,
      },
      timeCont: {
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: 0,
      },
      timeStart: {
          margin: (0, 0),
          color: Colors.text_prim,
          fontFamily: 'Inter',
          fontWeight: '500',
          lineHeight: 19,
          fontSize: 16,
          fontStyle: 'normal',
      },
      timeEnd: {
          marginBottom: 0,
          color: Colors.text_second,
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: 12,
          lineHeight: 15,
      },
      delimeter: {
          width: 2,
        //   height: '100%',
        //   border: '2px solid #1F4EC7',
          boxSizing: 'border-box',
          margin: (0, 12, 0, 8),
          backgroundColor: Colors.text_tret,
      },
      infoCont: {
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          boxSizing: 'border-box',
          margin: 0,
      },
      type: {
          color: Colors.primary,
        //   marginBottom: 8,
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: 12,
          lineHeight: 15,
          margin: (8, 0),
      },
      subjectName: {
          color: Colors.text_prim,
          fontFamily: 'Inter',
          fontSize: 16,
          fontWeight: '500',
          lineHeight: 19,
          fontStyle: 'normal',
          margin: (8, 0),
      },
      visitType: {
          color: Colors.text_second,
          marginBottom: 8,
          fontWeight: '400',
          fontSize: 14,
          lineHeight: 21,
          fontStyle: 'normal',
          fontFamily: 'Inter',

      },
      components: {
          width: '20%',
      }
});