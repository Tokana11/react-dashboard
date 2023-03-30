import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Box, Button, Dialog, DialogContent, Grid, TextField } from '@mui/material';
import Fab from '@mui/material/Fab';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/bg';
import * as React from 'react';
import { Controller, useForm } from "react-hook-form";

export default function AddTask({ addTask }) {

    const [ open, setOpen ] = React.useState(false);

    const [ value, setValue ] = React.useState('');

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            id: '',
            heading: '',
            description: '',
            date: '',
            status: false
        }
    });

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        reset();
    }

    const addTaskRecord = (task) => {
        let formatedDate = new Date(`${value}`).toLocaleDateString('bg')
        task.date = formatedDate;
        addTask(task)
        setValue('')
        handleClose();
    }

    return (
        <div>
            <Fab
                size="medium"
                color="info"
                aria-label="add-task"
                onClick={handleClickOpen}
            >
                <AddBoxOutlinedIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}
                        onSubmit={handleSubmit((task) => {
                            addTaskRecord(task);
                            reset();
                        })}
                    >
                        <Grid container>
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={6} >
                                    <h3>Заглавие:</h3>
                                    <TextField
                                        {...register("heading", {
                                            required: 'Въведете заглавие!'
                                        })}
                                        helperText={errors.heading?.message}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <h3>Дата:</h3>
                                    <Controller
                                        name={'date'}
                                        control={control}
                                        render={() => (
                                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="bg">
                                                <DatePicker
                                                    value={value}
                                                    onChange={(newValue) => setValue(newValue)}
                                                />
                                            </LocalizationProvider>
                                        )}
                                    />
                                </Grid>
                                <Grid item container direction={'row'} >
                                    <h3>Описание:</h3>
                                    <TextField
                                        fullWidth
                                        {...register("description", {
                                            required: 'Въведете описание на задачата!'
                                        })}
                                        helperText={errors.description?.message}
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                container
                                justifyContent="space-between"
                                alignItems="flex-end"
                            >
                                <Button
                                    variant='contained'
                                    color='error'
                                    onClick={handleClose}
                                >
                                    Отказ
                                </Button>
                                {' '}
                                <Button
                                    variant='contained'
                                    color='info'
                                    type='submit'
                                >
                                    Запиши
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
            </Dialog >
        </div >
    )
}
