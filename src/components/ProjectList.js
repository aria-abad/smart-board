// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function ProjectList({ projects }) {
//     return (
//         <div className="project-list">
//             {projects.map(project => (
//                 <div className="project-preview" key={project.id}>
//                     <Link to={`/projects/${project.id}`}>
//                         <h3>{ project.instrument }</h3>
//                     </Link>
//                     <p>Priority of this project: { project.priority}</p>
//                     <p>Process Cycle: { project.cycle }</p>
//                     <p>Autoclave Cycle: { project.autoclave }</p>
//                 </div>
//             ))}
//         </div>
//     )
// }



// Table
import React, { useMemo } from 'react';
import { useTable} from 'react-table';
import NEW_DATA from './NEW_DATA.json';
import { COLUMNS, GROUPED_COLUMNS } from './columns'
import './table.css'


export default function ProjectList() {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => NEW_DATA, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        // footerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    })


    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}





// // Sorting Table
// import React, { useMemo } from 'react';
// import { useTable, useSortBy} from 'react-table';
// import NEW_DATA from './NEW_DATA.json';
// import { COLUMNS } from './columns'
// import './table.css'


// export default function ProjectList() {
//     const columns = useMemo(() => COLUMNS, [])
//     const data = useMemo(() => NEW_DATA, [])

//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow
//     } = useTable({
//         columns,
//         data
//     },useSortBy)


//     return (
//         <div>
//             <table {...getTableProps()}>
//                 <thead>
//                 {headerGroups.map(headerGroup => (
//                     <tr {...headerGroup.getHeaderGroupProps()}>
//                     {headerGroup.headers.map(column => (
//                         <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                   {column.render('Header')}
//                   <span>
//                     {column.isSorted
//                       ? column.isSortedDesc
//                         ? ' 🔽'
//                         : ' 🔼'
//                       : ''}
//                   </span>
//                 </th>
//                     ))}
//                     </tr>
//                 ))}
//                 </thead>
//                 <tbody {...getTableBodyProps()}>
//                 {rows.map(row => {
//                     prepareRow(row)
//                     return (
//                     <tr {...row.getRowProps()}>
//                         {row.cells.map(cell => {
//                         return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                         })}
//                     </tr>
//                     )
//                 })}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

