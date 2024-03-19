import { CatalogTrainingList } from '@redux/reducers/catalogsSlice';
import { api } from '.';
import { ApiEndpoint } from '@utils/constants';

export const catalogsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCatalogTrainingList: build.query<CatalogTrainingList, void>({
            query: () => ({
                url: ApiEndpoint.CATALOGS_TRANING_LIST,
            }),
        }),
    }),
});

export const { useLazyGetCatalogTrainingListQuery } = catalogsApi;
