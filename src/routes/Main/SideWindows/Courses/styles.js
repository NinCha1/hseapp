import {StyleSheet} from 'react-native';
import Colors from '../../../../common/Colors';

export default StyleSheet.create(
    {
        container: {
            backgroundColor: 'white',
            flex: 1,
        },
        header: {
            color: Colors.text_prim,
            fontSize: 28,
            fontWeight: '700',
            padding: (48, 60, 40),
        },

        headerContainer: {
            height: 106,
            justifyContent: 'flex-end',
            flexDirection: 'column',
            width: '100%',
        },

        contentContainer: {
            width: 700,
            padding: 40,
        },

        inputField: {
            height: 48, 
            backgroundColor: Colors.addBack, 
            borderRadius: 12, 
            padding: (12, 16), 
            alignItems: 'center',
        },

        headerList: {
            fontSize: 16, 
            fontWeight: '500', 
            color: Colors.text_prim, 
            marginBottom: 16,
        },

        courseDescription: {
            fontSize: 14, 
            fontWeight: '400', 
            color: 'rgba(0, 0, 0, 0.5)', 
            marginBottom: 20,
        },

        gradesContainer: {
            backgroundColor: Colors.addBack, 
            padding: 12, 
            borderRadius: 8, 
            marginBottom: 20,
        },

        gradeFormula: {
            color: Colors.text_prim, 
            fontSize: 14, 
            fontWeight: '500'
        },

        icon: {
            width: 48,
            height: 48,
            marginRight: 8,
        },

        teacherName: {
            color: Colors.text_prim, 
            fontSize: 16, 
            fontWeight: '500',
        },

        teacherInfo: {
            color: Colors.primary,
            fontSize: 12,
            fontWeight: '500',
        },

        teachersContainer: {
            flexDirection: 'row', 
            marginBottom: 100, 
            width: '100%', 
            display: 'flex', 
            flexWrap: 'wrap'
        }
    }
)