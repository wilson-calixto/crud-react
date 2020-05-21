import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { useSelector, useDispatch } from 'react-redux';
import { DropzoneDialog } from 'material-ui-dropzone';
import {
    create,
    find,
    findAll,
    update,
    remove,
    setInitialState
} from '../../../../store/ducks/todos';
import { apiRoutes } from '../../../../Api';
import {
    Typography,
    Paper,
    Link,
    Grid,
    Button,
    Select,
    CssBaseline,
    RadioGroup,
    FormLabel,
    MenuItem,
    FormGroup,
    FormControl,
    FormControlLabel,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
const useStyles = makeStyles({});

const initialFieldState = {
    name: { value: 'abab' },
    price: { value: '' },
    storeId: { value: '' },
    description: { value: '' },
    categoryId: { value: '' },
    brandId: { value: '' },
    materialsId: { value: '' },
    stylesId: { value: '' },
    colorsId: { value: '' },
    sizes: {
        value: [
            { value: true, name: 'PP' },
            { value: true, name: 'P' },
            { value: false, name: 'M' },
            { value: false, name: 'G' },
            { value: false, name: 'GG' },
            { value: false, name: 'EG' },
            { value: false, name: 'XG' },
        ]
    },


};

const initialErrorState = {
    name: { error: false, helperText: '' },
    price: { error: false, helperText: '' },
    storeId: { error: false, helperText: '' },
    description: { error: false, helperText: '' },
    categoryId: { error: false, helperText: '' },
    brandId: { error: false, helperText: '' },
    materialsId: { error: false, helperText: '' },
    stylesId: { error: false, helperText: '' },
    colorsId: { error: false, helperText: '' },
};

const initialMenuState = {
    storeId: [],
    categoryId: [],
    brandId: [],
    materialsId: [],
    stylesId: [],
    colorsId: [],
};


export default function Product() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const mode = useSelector(state => state.todos);
    const { loading, updateInfo } = useSelector(state => state.todos);
    const [fields, setFields] = useState(initialFieldState);
    const [errors, setErrors] = useState(initialErrorState);
    const [menuItens, setmenuItens] = useState(initialMenuState);
    const inputRef = useRef();




    const isEmpty = obj => {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    };

 
    useEffect(() => {
        async function setMenu() {
            const storeItens = await findAll(apiRoutes.STORE);
            const categoryItens = await findAll(apiRoutes.CATEGORIES);
            const brandItens = await findAll(apiRoutes.BRANDS);
            const materialsItens = await findAll(apiRoutes.MATERIALS);
            const stylesItens = await findAll(apiRoutes.STYLES);
            const colorsItens = await findAll(apiRoutes.COLORS);
    
    
            await setmenuItens({
                storeId: storeItens,
                categoryId: categoryItens,
                brandId: brandItens,
                materialsId: materialsItens,
                stylesId: stylesItens,
                colorsId: colorsItens,
            });
            console.log('menuItens', menuItens)
        }
        setMenu();
    }, []);
 



    function clean() {
        // setFields(initialFieldState);
        // setErrors(initialErrorState);
    }

    function handleClose() {
        // clean();
        // onClose();
        console.log('dsdmsndjs')
    }


    // async function handleSubmit(event) {
    //     alert('Uma dissertação foi enviada: ');
    //     // event.preventDefault();
    // }

    function convertData(data) {

        const selectSizes=[]        
        data['sizes'].value.map(item => {
            if(item.value){
                selectSizes.push(item.name);
            }
            
        });
        const newData = {
            information: {
                category: data['categoryId'].value,
                name: data['name'].value,
                price: data['price'].value,
                store: data['storeId'].value,
            },

            details: {
                description: data['description'].value,
                Sizes: selectSizes,
                color: data['colorsId'].value,
                Material: data['materialsId'].value,
                Style: data['stylesId'].value,
                Brand: data['brandId'].value,
            }
        }
        return newData;
    }

    async function handleSubmit() {
        // dispatch(setLoading(true));

        console.log('fields', convertData(fields))

        const { data, success } = await dispatch(
            create(apiRoutes.PRODUCTS, convertData(fields), 'Linha de Produção')
        );


        if (success === true) {
            // clean();
            // onClose();
            alert('success');

        } else {
            alert('error');
            let updateErrors = { ...errors };
            data.forEach(errorData => {
                const { field, error: helperText } = errorData;
                updateErrors = {
                    ...updateErrors,
                    [field]: { error: true, helperText },
                };
            });
            // setErrors(updateErrors);
        }
    }

    function handleChange(field, value) {
        setFields({ ...fields, [field]: { value } });
    }

    function sizeHandleChange(item) {
        const temp = [];
        fields.sizes.value.map(value => {
            temp.push(value);
        });

        const i = temp.indexOf(item)
        item.value = !item.value
        temp[i] = item
        console.log('sizes', temp)
        handleChange('sizes', temp)

    }

    // TODO ADD Caixas de Seleção com FormGroup



    return (
        <>


            <Paper style={{ padding: 16 }}>
                <Grid container alignItems="flex-start" spacing={2}>



                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Nome"
                            value={fields.name.value}
                            onChange={e => handleChange('name', e.target.value)}
                            error={errors.name.error}
                            helperText={errors.name.helperText}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="price"
                            value={fields.price.value}
                            onChange={e => handleChange('price', e.target.value)}
                            error={errors.price.error}
                            helperText={errors.price.helperText}
                        />
                    </Grid>

                    


                    <Grid item xs={6}>
                        <Select
                            fullWidth

                            label="store"
                            value={fields.storeId.value}
                            onChange={e =>
                                handleChange('storeId', e.target.value)
                            }
                            error={errors.storeId.error}
                            helperText={errors.storeId.helperText}
                        >

                            {menuItens.storeId.map(item => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>

                    <Grid item xs={6}>
                        <Select
                            fullWidth

                            label="category"
                            value={fields.categoryId.value}
                            onChange={e =>
                                handleChange('categoryId', e.target.value)
                            }
                            error={errors.categoryId.error}
                            helperText={errors.categoryId.helperText}
                        >

                            {menuItens.categoryId.map(item => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            fullWidth

                            label="brand"
                            value={fields.brandId.value}
                            onChange={e =>
                                handleChange('brandId', e.target.value)
                            }
                            error={errors.brandId.error}
                            helperText={errors.brandId.helperText}
                        >

                            {menuItens.brandId.map(item => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            fullWidth

                            label="materials"
                            value={fields.materialsId.value}
                            onChange={e =>
                                handleChange('materialsId', e.target.value)
                            }
                            error={errors.materialsId.error}
                            helperText={errors.materialsId.helperText}
                        >

                            {menuItens.materialsId.map(item => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            fullWidth

                            label="styles"
                            value={fields.stylesId.value}
                            onChange={e =>
                                handleChange('stylesId', e.target.value)
                            }
                            error={errors.stylesId.error}
                            helperText={errors.stylesId.helperText}
                        >

                            {menuItens.stylesId.map(item => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            fullWidth

                            label="colors"
                            value={fields.colorsId.value}
                            onChange={e =>
                                handleChange('colorsId', e.target.value)
                            }
                            error={errors.colorsId.error}
                            helperText={errors.colorsId.helperText}
                        >

                            {menuItens.colorsId.map(item => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Description"
                            value={fields.description.value}
                            onChange={e => handleChange('description', e.target.value)}
                            error={errors.description.error}
                            helperText={errors.description.helperText}
                        />
                    </Grid>

                    {fields.sizes.value.map(item => (
                        <FormControlLabel
                            label="Sizes"
                            control={<Checkbox checked={item.value} onChange={e => sizeHandleChange(item)} name={item.name} />}
                            label={item.name}
                        />
                    ))}



                    <Grid item style={{ marginTop: 16 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={false}
                            onClick={handleSubmit}

                        >
                            Submit
                                </Button>
                    </Grid>
                </Grid>
            </Paper>

        </>

    );
}
