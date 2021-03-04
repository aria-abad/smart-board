import { Link } from 'react-router-dom'

export const COLUMNS = [
    {
        Header: 'ID',
        accessor: 'id',
        show: false
    },
    {
        Header: 'Priority',
        accessor: 'priority'
    },
    {
        Header: 'Instrument',
        accessor: 'instrument',
        Cell: ({ row }) => (<Link to={{pathname:'/editpage/'+`${row.id}`, state :{data : row} } }>{row.id}</Link>)
    },
    {
        Header: 'Cycle',
        accessor: 'cycle'
    },
    {
        Header: 'Autoclave',
        accessor: 'autoclave'
    },
    {
        Header: 'Completion',
        accessor: d => `${d.completionCycle} ${d.completionTime}`
    },
    {
        Header: 'NOTE',
        accessor: 'note'
    },
    {
        Header: 'CONTACT',
        accessor: 'contact'
    }
]

export const GROUPED_COLUMNS = [
    {
        Header: 'ID',
        accessor: 'id'
    },
    {
        Header: 'Priority',
        accessor: 'priority'
    },
    {
        Header: 'Instrument',
        accessor: 'instrument'
    },
    {
        Header: 'Completion Time',
        columns: [
            {
                Header: 'CYCLE',
                accessor: 'cycle'
            },
            {
                Header: 'AUTOCLAVE',
                accessor: 'autoclave'
            }
        ]
    },
    {
        Header: 'NOTE',
        accessor: 'note'
    },
    {
        Header: 'CONTACT',
        accessor: 'contact'
    }
]