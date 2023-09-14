import * as React from 'react';
import { View } from 'react-native';

const AuthLayout = ({ children }: any) => {
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                paddingHorizontal: '5%',
                backgroundColor: 'white'
            }}
        >
            {children}
        </View>
    )
}

export default AuthLayout
