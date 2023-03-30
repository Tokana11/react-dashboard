import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import { Divider, IconButton, MenuItem, Popover, TableCell } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import AddTask from './AddTask';

function TodoHeader() {
    return (
        <React.Fragment>
            <AppBar color='info' position="static" >
                <Toolbar>
                    <Typography align='center' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ЗАДАЧИ
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

function TaskItem({ task, deleteTask, onChange }) {

    const [ open, setOpen ] = React.useState(null);

    const handleOpenMenu = (event) => {
        setOpen(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setOpen(null);
    };

    const handleMarkComplete = () => {
        handleCloseMenu();
        task.status = true
    };

    const handleShare = () => {
        handleCloseMenu();
        console.log('SHARE', task.id);
    };

    const handleEdit = () => {
        handleCloseMenu();
        console.log('EDIT', task.id);
    };

    const handleDelete = () => {
        handleCloseMenu();
        deleteTask(task.id)
    };

    return (
        <TableRow>
            <TableCell
                sx={{
                    px: 2,
                    py: 0.75,
                    ...(task.status && {
                        color: 'text.disabled',
                        textDecoration: 'line-through',
                    }),
                }}
            >
                <Typography variant="h5" component="div">
                    {task.heading}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {task.date}
                </Typography>
                <Typography variant="body2">
                    {task.description}
                </Typography>
            </TableCell>
            <TableCell align='right'>
                <IconButton
                    size="small"
                    color="inherit"
                    sx={{ opacity: 0.48 }}
                    onClick={handleOpenMenu}
                >
                    <DragIndicatorOutlinedIcon />
                </IconButton>
                <Popover
                    open={Boolean(open)}
                    anchorEl={open}
                    onClose={handleCloseMenu}
                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    PaperProps={{
                        sx: {
                            p: 1,
                            '& .MuiMenuItem-root': {
                                px: 1,
                                typography: 'body2',
                                borderRadius: 0.75,
                            },
                        },
                    }}
                >

                    {
                        task.status
                            ? ''
                            : <MenuItem onClick={handleMarkComplete}>
                                <DoneOutlineIcon sx={{ mr: 2 }} />
                                Изпълнена
                            </MenuItem>
                    }

                    <MenuItem onClick={handleEdit}>
                        <EditIcon sx={{ mr: 2 }} />
                        Редактирай
                    </MenuItem>

                    <MenuItem onClick={handleShare}>
                        <ShareIcon sx={{ mr: 2 }} />
                        Сподели
                    </MenuItem>

                    <Divider sx={{ borderStyle: 'dashed' }} />

                    <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
                        <DeleteForeverIcon sx={{ mr: 2 }} />
                        Изтрий
                    </MenuItem>
                </Popover>
            </TableCell>

        </TableRow>
    );
}

export default function TodoTable({ tasks, addTask, deleteTask }) {
    return (
        <TableContainer component={Paper}>
            <TodoHeader />
            <Table>
                <TableBody>
                    {tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                        />
                    ))}
                    <TableRow >
                        <TableCell />
                        <TableCell align='right'>
                            <AddTask addTask={addTask} />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}


