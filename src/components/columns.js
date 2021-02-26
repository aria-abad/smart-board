export const COLUMNS = [
    {
        Header: 'ID',
        accessor: 'id'
    },
    {
        Header: 'PRIORITY',
        accessor: 'priority'
    },
    {
        Header: 'INSTRUMENT',
        accessor: 'instrument'
    },
    {
        Header: 'CYCLE',
        accessor: 'cycle'
    },
    {
        Header: 'AUTOCLAVE',
        accessor: 'autoclave'
    },
    // {
    //     Header: 'SOAK',
    //     accessor: 'soakCompletion'
    // },
    // {
    //     Header: 'MEDISAFE',
    //     accessor: 'medisafeCompletion'
    // },
    // {
    //     Header: 'AUTOCLAVE',
    //     accessor: 'autoclaveCompletion'
    // },
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