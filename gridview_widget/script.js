const dataExample = [
    {
        company: 'Alfreds <b>Futterkiste</b>',
        chef: 'Maria Anders',
        country: 'Germany',
    },
    {
        company: 'Centro comercial Moctezuma',
        chef: 'Francisco Chang',
        country: 'Mexico',
    },
    {
        company: 'Ernst Handel',
        chef: 'Roland Mendel',
        country: 'Austria',
    },
    {
        company: 'Island Trading',
        chef: 'Helen Bennett',
        country: 'UK',
    },
    {
        company: 'Laughing Bacchus Winecellars',
        chef: 'Yoshi Tannamuri',
        country: 'Canada',
    }
];

let gridView = new GridView();
const data = {
    header: 'Grid view widget',
    headerClass: ['header'],
    attribute: {
        'company': {
            'label': 'Company',
            'src': 'html',
        },
        'chef': {
            'label': 'Director',
        },
        'country': {
            'label': 'Country',
            // 'value': (data) => {
            //     if (data['country'] === 'Germany') {
            //         return
            //     }
            // }
        }
    },
    data: dataExample
}
gridView.render(data);

