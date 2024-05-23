import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#155565',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    white: '#ffffff',
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        minWidth: '100%',
        maxWidth: '100%',
        height: 200,
        borderEndStartRadius: 10,
        borderEndEndRadius: 10,
    },
    descriptionContainer: {
        padding: 20,
        flex: 1,
        borderRadius: 10,
        paddingTop: 20,
        minWidth: '100%',
    },
    description: {
        textAlign: 'justify',
        marginBottom: 100,
    },
    textCenter: {
        textAlign: 'center',
    },
    textRight: {
        textAlign: 'right',
    },
    tabIcon: {
        width: 20,
        height: 20,
    },
    fabIcon: {
        width: 32,
        height: 32,
    },
    tabButton: {
        padding: 12,
        borderRadius: 50,
    },
    bottomTab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: '15%',
        paddingVertical: 10,
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.08,
        shadowRadius: 1,
        elevation: 5,
        backgroundColor: colors.white,
    },
    FabButtonContainer: {
        bottom: 40,
        right: 0,
        left: 0,
        alignItems: 'center',
        zIndex: 1,
    },
    FabButtonInnerContainer: {
        position: 'absolute',
        backgroundColor: colors.white,
        padding: 16,
        borderRadius: 50,
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    FabButton: {
        backgroundColor: colors.white,
        padding: 14,
        borderRadius: 50,
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2,
    },
    appTopBar: {
        paddingVertical: 10,
        paddingHorizontal: 32,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: colors.primary,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.07,
        shadowRadius: 6,
        elevation: 2,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center',
    },
    bodyText: {
        fontSize: 14,
        color: colors.white,
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    loadingContainer: {
        justifyContent: 'center',
        minHeight: '100%',
    },
    confirmButton: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    loading: {
        height: 150,
        width: 150,
        alignSelf: 'center',
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 40,
        backgroundColor: 'rgba(21, 85, 101, 0.1)',
    },
    modalContent: {
        backgroundColor: colors.white,
        borderColor: colors.primary,
        borderWidth: 2,
        width: '100%',
        padding: 20,
        borderRadius: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.07,
        shadowRadius: 6,
        elevation: 2,
    },
    photoModeSelector: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        marginTop: 'auto',
        justifyContent: 'flex-end',
        height: '100%',
    },
    photoSelectorButtonsContainer: {
        backgroundColor: colors.primary,
        width: '100%',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    photoSelectorButton: {
        paddingVertical: 10,
        width: '100%',
    },
    photoSelectorButtonText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
        color: colors.white,
    },
    divider: {
        height: 0.5,
        backgroundColor: colors.primary,
        width: '100%',
        marginVertical: 20,
    },
});
