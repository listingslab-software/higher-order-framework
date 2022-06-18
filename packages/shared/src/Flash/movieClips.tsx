export const movieClips = [
    {
        id: 'content',
        // border: "1px solid limegreen",
        component: 'RouteEngine',
        initialPosition: 'topmiddle',
        options: {
            top: 20,
            left: -50,
            rotation: 0,
            scale: 1,
        },
        width: 290,
        height: 100,
        zIndex: 1000,
    },
    {
        id: 'work',
        component: 'Work',
        initialPosition: 'topmiddle',
        options: {
            top: 130,
            left:0,
            rotation: 0,
            scale: 1,
        },
        // border: "1px solid red",
        width: 300,
        // height: 100,
        zIndex: 1200,
    },
    {
        id: 'life',
        component: 'Life',
        initialPosition: 'topmiddle',
        options: {
            top: 245,
            left:0,
            rotation: 0,
            scale: 1,
        },
        // border: "1px solid blue",
        width: 300,
        // height: 300,
        zIndex: 1300,
    },

    {
        id: 'balance',
        component: 'Balance',
        initialPosition: 'topmiddle',
        options: {
            top: 360,
            left:0,
            rotation: 0,
            scale: 1,
        },
        width: 300,
        // border: "1px solid orange",
        
        zIndex: 1400,
    },

    {  
        id: 'appMenu',
        component: 'AppMenu',
        initialPosition: 'bottomright',
        options: {
            top: 8,
            left: 0,
            rotation: 0,
            scale: 1,
        },
        width: 100,
        height: 50,
        zIndex: 8000,
    },
]
