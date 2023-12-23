import React, { useState, useEffect } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';


const ManageBooks = () => {


    const [allbooks, setallbooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/all-books').then(res => res.json()).then(data => setallbooks(data));
    }, [])

const handleDelete=(id)=>{
    console.log(id);
    fetch(`http://localhost:3000/book/${id}`,{method:'DELETE'}).then(res=>res.json()).then(data=>{
        alert("Book Deletd Succesfully")

    })
}

    return (
        <div className='px-4 my-12 ' >
            <h2 className='text-3xl mb-8 font-bold '>Manage Books</h2>
          
            <Table className='lg:w-[1000px] md:w-[600px] flex-row sm:w-[300px]'>
        <Table.Head>
          <Table.HeadCell> Sr No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>

          <Table.HeadCell>Category</Table.HeadCell>

          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span >Edit Or Manage</span>
          </Table.HeadCell>
        </Table.Head>
{
   allbooks.map((book,index)=>  <Table.Body className="divide-y" key={book._id}>

       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
              {index + 1}
            </Table.Cell>
            <Table.Cell className='w-60'> {book.BookTitle}</Table.Cell>

            <Table.Cell>{book.AuthorName}r</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>$10.0</Table.Cell>
            <Table.Cell>

              <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                Edit
              </Link>
              <button onClick={()=> handleDelete(book._id)} className='bg-red-700 font-semibold px-3 py-1 rounded-md text-white hover:bg-sky-700'>Delete</button>

            </Table.Cell>
          </Table.Row>


   </Table.Body> )

}

        
      </Table>
    


        </div>
    )
}

export default ManageBooks