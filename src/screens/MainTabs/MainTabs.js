import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


const StartTabs = () => {


    Promise.all([
        Icon.getImageSource("md-map",30),
        Icon.getImageSource("ios-share-alt",30),
    ]
    ).then(sources =>

        Navigation.startTabBasedApp({

            tabs: [{
                label: 'ShardPlaces',
                screen: 'src.ShardPlaces.ShardPlaces',
                title : "ShardPlaces",
                icon: sources[0], 
        
                 },
                 {
                    label: 'FinderPlaces',
                    screen: 'src.FinderPlaces.FinderPlaces',
                    title : "FinderPlaces", 
                    icon: sources[1],
                    },
        ]
        })

    );

}

export default StartTabs;
