import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import FireTruckTwoToneIcon from '@mui/icons-material/FireTruckTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import PropaneTankTwoToneIcon from '@mui/icons-material/PropaneTankTwoTone';
import { Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import EmployeeDutyTable from '../components/EmployeeDutyTable';
import FuelChart from '../components/FuelChart';
import TodoTable from '../components/TodoTable';
import TruckDutyTable from '../components/TruckDutyTable';
import WidgetSummary from '../components/WidgetSummary';


export default function Dashboard() {

    const [ tasks, setTasks ] = React.useState([
        {
            id: 1,
            heading: 'ВДА',
            description: 'Проверка налягане на резервни бутилки',
            date: '31.03.2023 г.',
            status: false
        },
        {
            id: 2,
            heading: 'ГТП',
            description: 'Технически преглед РВ0001АА',
            date: '01.04.2023 г.',
            status: false
        },
        {
            id: 3,
            heading: 'ПТЗ',
            description: 'ПТУ АРРРР ЕООД, гр. Пловдив, ул Бла бла № 13',
            date: '10.05.2023 г.',
            status: false
        },
        {
            id: 4,
            heading: 'ГТП',
            description: 'Изпит ФП и ПСП',
            date: '17.06.2023 г.',
            status: false
        },
        {
            id: 5,
            heading: 'ГТП',
            description: 'Изпит ФП и ПСП',
            date: '10.02.2023 г.',
            status: true
        },
    ])

    function getIncompleteTasks(tasks) {
        let incompleteTasks = 0;
        tasks.forEach(task => {
            if (!task.status) {
                incompleteTasks++
            }
        });
        return incompleteTasks;
    }

    const totalTasks = getIncompleteTasks(tasks)

    function addTask(task){
        console.log(task)
        setTasks([...tasks,task])
    }

    function deleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    function createEmployeesData(id, structure, position, firstName, lastName, onDuty) {
        return { id, structure, position, firstName, lastName, onDuty };
    }

    const employeesData = [
        createEmployeesData(1, "01РСПБЗН", "ИНСПЕКТОР", "Тодор", "Тодоров", true),
        createEmployeesData(2, "01РСПБЗН", "КЕ", "Димитър", "Димитров", true),
        createEmployeesData(3, "01РСПБЗН", "КЕ", "Георги", "Георгиев", false),
        createEmployeesData(4, "01РСПБЗН", "СТ.ПОЖ.", "Иван", "Иванов", false),
        createEmployeesData(5, "01РСПБЗН", "СТ.ПОЖ.", "Тома", "Томов", true),
        createEmployeesData(6, "01РСПБЗН", "СТ.ПОЖ.", "Николай", "Николов", false),
        createEmployeesData(7, "01РСПБЗН", "ВСА", "Борислав", "Бориславов", true),
        createEmployeesData(8, "01РСПБЗН", "ВСА", "Драгомир", "Драгомиров", true),
        createEmployeesData(9, "УПБЗН-С-Е", "КЕ", "Петър", "Петров", true),
        createEmployeesData(10, "УПБЗН-С-Е", "СТ.ПОЖ.", "Костадин", "Костадинов", true),
        createEmployeesData(11, "УПБЗН-С-Е", "ВСА", "Рангел", "Рангелов", true),
    ];

    function getEmployeesOnDuty(employeesData) {
        let employeesOnDuty = 0;
        employeesData.forEach(employee => {
            if (employee.onDuty) {
                employeesOnDuty++
            }
        });
        return employeesOnDuty;
    }

    const totalEmployeesOnDuty = getEmployeesOnDuty(employeesData);

    function createTruckData(id, structure, brand, model, regNum, onDuty) {
        return { id, structure, brand, model, regNum, onDuty };
    }

    const trucksData = [
        createTruckData(1, "01РСПБЗН", "RENAULT", "MIDLUM 270.15 dxi", "AA0001BB", true),
        createTruckData(2, "01РСПБЗН", "IVECO", "DAYLY 65С15", "CC0002DD", true),
        createTruckData(3, "01РСПБЗН", "IVECO", "EUROCARGO", "EE0003FF", false),
        createTruckData(4, "01РСПБЗН", "IVECO", "MAGIRUS DEUTZ", "GG0004HH", false),
        createTruckData(5, "01РСПБЗН", "SCANIA", "P360", "KK0005MM", true),
        createTruckData(6, "УПБЗН-С-Е", "IVECO", "DAYLY 65C17В", "PP0006TT", true),
        createTruckData(7, "УПБЗН-С-Е", "ЗИЛ", "130", "YY0007XX", false),
    ];

    function getTrucksOnDuty(trucksData) {
        let trucksOnDuty = 0;
        trucksData.forEach(employee => {
            if (employee.onDuty) {
                trucksOnDuty++
            }
        });
        return trucksOnDuty;
    }

    const totalTrucksOnDuty = getTrucksOnDuty(trucksData);

    const widgetData = [
        { title: 'Служители на дежурство', total: totalEmployeesOnDuty, color: 'info', icon: <PeopleAltTwoToneIcon />, },
        { title: 'Автомобили на дежурство', total: totalTrucksOnDuty, color: 'error', icon: <FireTruckTwoToneIcon />, },
        { title: 'ВДА на дежурство', total: 17, color: 'secondary', icon: <PropaneTankTwoToneIcon />, },
        { title: 'Задачи за изпълнение', total: totalTasks, color: 'success', icon: <AssignmentTwoToneIcon />, },
    ];

    return (
        <div >
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    {/* Hi, Welcome back ! */}
                </Typography>

                <Grid container spacing={3}>

                    {widgetData.map((item) => (
                        <Grid item key={item.title} xs={12} sm={6} md={3} >
                            <WidgetSummary
                                title={item.title}
                                total={item.total}
                                color={item.color}
                                icon={item.icon}
                            />

                        </Grid>
                    ))}

                    <Grid item xs={12} sm={12} md={6}>
                        <EmployeeDutyTable employeesData={employeesData} />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <TruckDutyTable trucksData={trucksData} />
                    </Grid>

                    {/* 
                    <Grid item xs={12} sm={12} md={12}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={6}>
                                <TruckDutyTable trucksData={trucksData} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}>
                                <FuelChart />
                            </Grid>
                        </Grid>
                    </Grid> */}

                    <Grid item xs={12} sm={12} md={6}>
                        <TodoTable tasks={tasks} addTask={addTask} deleteTask={deleteTask}/>
                       
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <FuelChart />
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}
