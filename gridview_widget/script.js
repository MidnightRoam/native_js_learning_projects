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
gridView.header = 'Grid view widget';
gridView.headerClass = ['header', 'site-header'];
// gridView.attribute = ['company', 'chef', 'country']
gridView.attribute = {
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
};
gridView.data = dataExample;
gridView.render();

