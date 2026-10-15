import { getListOfRegions, getListOfSeasons, getFilteredRoutes } from '../../models/model.js';

export default async (req, res) => {
    const regions = await getListOfRegions();
    const seasons = await getListOfSeasons();

    const { region, season } = req.query; 

    const routes = await getFilteredRoutes(region, season);

    res.render('routes/list', { 
        title: 'Scenic Train Routes',
        regions,
        routes,
        seasons,
        query: req.query
    });
};