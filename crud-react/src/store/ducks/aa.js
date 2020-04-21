import Types from '../Types';
import { api } from '../../Api';
import httpStatus from '../../../Config/httpStatus';
import { toast } from 'react-toastify';

const initialState = {
    rows: [],
    pageNumber: 0,
    pageSize: 10,
    totalElements: 0,
    error: null,
    loading: false,
    loadingRows: false,
    viewInfo: {},
    updateInfo: {},
    deleteInfo: {},
};

export const setPageNumber = pageNumber => ({
    type: Types.SET_PAGE_NUMBER,
    pageNumber,
});

export const setPageSize = pageSize => ({
    type: Types.SET_PAGE_SIZE,
    pageSize,
});

export const setTotaElements = totalElements => ({
    type: Types.SET_TOTAL_ELEMENTS,
    totalElements,
});

export const setRows = rows => ({
    type: Types.SET_ROWS,
    rows,
});

export const setError = error => ({
    type: Types.SET_ERROR,
    error,
});

export const setLoading = loading => ({
    type: Types.SET_LOADING,
    loading,
});

export const setLoadingRows = loadingRows => ({
    type: Types.SET_LOADING_ROWS,
    loadingRows,
});

export const setViewInfo = viewInfo => ({
    type: Types.SET_VIEW_INFO,
    viewInfo,
});

export const setUpdateInfo = updateInfo => ({
    type: Types.SET_UPDATE_INFO,
    updateInfo,
});

export const setDeleteInfo = deleteInfo => ({
    type: Types.SET_DELETE_INFO,
    deleteInfo,
});

export const setInitialState = () => ({
    type: Types.SET_INITIAL_STATE,
    initialState,
});

export const find = (route, search = '') => {
    return async (dispatch, getState) => {
        const searchData = search ? `search=${search}&` : '';
        const { data } = await api.get(
            `${route}/?${searchData}page=${
                getState().register.pageNumber
            }&size=${getState().register.pageSize}`
        );
        const { content, pageable } = data;
        dispatch(setLoadingRows(false));
        dispatch(setRows(content));
        dispatch(setPageSize(pageable.pageSize));
        dispatch(setTotaElements(data.totalElements));
    };
};

export const findById = (route, id, submenu = 'Registro') => {
    return async dispatch => {
        try {
            //dispatch(setViewInfo({}));
            const { data } = await api.get(`${route}/${id}`);

            dispatch(setViewInfo(data));
            dispatch(setLoadingRows(false));

            return { data, success: true };
        } catch (error) {
            const { data, status } = error.response;

            if (status === httpStatus.NOT_FOUND) {
                toast.error(`${submenu} não encontrado`);
            }

            return { data, success: false };
        }
    };
};

export const create = (route, body, submenu = 'Registro', innerData = null) => {
    return async dispatch => {
        try {
            const { data } = await api.post(route, body);
            dispatch(setLoading(false));

            toast.info(`${submenu} criado com sucesso`);

            if (innerData !== null) {
                dispatch(findById(innerData.route, innerData.id));
            } else {
                dispatch(find(route));
            }

            return { data, success: true };
        } catch (error) {
            const { data, status } = error.response;
            dispatch(setLoading(false));

            if (
                status === httpStatus.INTERNAL_SERVER_ERROR ||
                status === httpStatus.NOT_FOUND
            ) {
                toast.error('Erro interno na criação');
            }

            return { data, success: false };
        }
    };
};

export const update = (
    route,
    id,
    body,
    submenu = 'Registro',
    innerData = null
) => {
    return async dispatch => {
        try {
            const { data } = await api.put(`${route}/${id}`, body);

            if (innerData === null) {
                toast.info(`${submenu} atualizado com sucesso`);
                dispatch(setLoading(false));
                dispatch(setUpdateInfo({}));
                dispatch(find(route));
            }

            return { data, sucess: true };
        } catch (error) {
            const { data, status } = error.response;
            dispatch(setLoading(false));
            //dispatch(setUpdateInfo({}));

            if (
                status === httpStatus.INTERNAL_SERVER_ERROR ||
                status === httpStatus.NOT_FOUND
            ) {
                toast.error('Erro interno na atualização');
            }

            return { data, success: false };
        }
    };
};

export const remove = (route, id, submenu = 'Registro', innerData = null) => {
    return async dispatch => {
        try {
            const { data } = await api.delete(`${route}/${id}`);
            dispatch(setLoading(false));
            dispatch(setDeleteInfo({}));

            toast.info(`${submenu} removido com sucesso`);
            if (innerData !== null) {
                dispatch(findById(innerData.route, innerData.id));
            } else {
                dispatch(find(route));
            }

            return { data, success: true };
        } catch (error) {
            const { data, status } = error.response;
            dispatch(setLoading(false));
            dispatch(setDeleteInfo({}));

            if (status === httpStatus.INTERNAL_SERVER_ERROR) {
                toast.error('Erro interno na exclusão');
            }
            if (status === httpStatus.NOT_FOUND) {
                toast.error(`${submenu} não encontrado`);
            }

            return { data, success: false };
        }
    };
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.SET_ROWS:
            return { ...state, rows: action.rows };

        case Types.SET_PAGE_NUMBER:
            return { ...state, pageNumber: action.pageNumber };

        case Types.SET_PAGE_SIZE:
            return { ...state, pageSize: action.pageSize };

        case Types.SET_TOTAL_ELEMENTS:
            return { ...state, totalElements: action.totalElements };

        case Types.SET_ERROR:
            return { ...state, error: action.error };

        case Types.SET_LOADING:
            return { ...state, loading: action.loading };

        case Types.SET_LOADING_ROWS:
            return { ...state, loadingRows: action.loadingRows };

        case Types.SET_VIEW_INFO:
            return { ...state, viewInfo: action.viewInfo };

        case Types.SET_UPDATE_INFO:
            return { ...state, updateInfo: action.updateInfo };

        case Types.SET_DELETE_INFO:
            return { ...state, deleteInfo: action.deleteInfo };

        case Types.SET_INITIAL_STATE:
            return { ...state, ...action.initialState };

        default:
            return state;
    }
}
