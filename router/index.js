import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../Component/Home'
import Pembayaran from '../Component/Pembayaran'
import Login from '../Component/Login'
import Desa from '../Component/Data Desa'
import Dusun from '../Component/Data Dusun'
import Pelanggan from '../Component/Data Pelanggan'
import Profile from '../Component/Profile'
import Tunggakan from '../Component/Tunggakan'
const AppNavigator = createStackNavigator({
    Pembayaran,
    Home,
    Login,
    Desa,
    Dusun,
    Pelanggan,
    Profile,
    Tunggakan
},
{
    headerMode : 'none',
    initialRouteName: 'Login'
}
)

export default createAppContainer(AppNavigator)