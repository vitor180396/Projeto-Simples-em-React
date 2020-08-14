import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 50,
        backgroundColor:"#340b61"
      },
      
      button: {
        alignItems: "center",
        backgroundColor: "white",
        margin:20,
        padding: 10,
        borderRadius: 8,
        borderWidth: 0.5
      },
      rootContainer: {
        flex: 1
    },
    buttontext:{
        fontSize: 16,
        fontWeight: 'bold'
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#6d0da8',
        justifyContent: 'center'
    },

    displayText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },

    inputContainer: {
        flex: 8,
        backgroundColor: '#340b61'
    },

    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },

    inputButtonHighlighted: {
        backgroundColor: '#193441'
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default styles;