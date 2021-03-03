export const COLUMNS = [
    {
        Header: 'Priority',
        accessor: 'priority'
    },
    {
        Header: 'Instrument',
        accessor: 'instrument',
        Cell: e =><a href={'projects/' + e.value}> {e.value} </a>
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