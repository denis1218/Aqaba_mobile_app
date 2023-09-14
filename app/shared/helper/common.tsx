export const gotoPreviousScreen = (navigation: any) => {
    const routes = navigation.getState().routes ;
    const previous_screen_name = routes[routes.length - 1].params.name ;

    navigation.navigate(`${previous_screen_name}`, { name: `${previous_screen_name}` })
}