import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput,Textarea } from 'flowbite-react';
const Uploadbook = () => {
 const Category=[
    'Fiction',
    'Non-Fiction',
    'Comic',
    'Romanatic',
    'Histroy',
    'Mistry',
    'Sci-Fic',
    'Horror',
    'Biography',
    'Fantasy',
    'Memoir',
    'Novel',
    'Business',
    'Childern',
    'Travel',
    'Religion',
    'Art & Design'

 ]
 const [selectBookCategory,setselectBookCategory]=useState(Category[0]);

const handlechangeSelectedvalue=(event)=>{
    // console.log(event.target.value);
    setselectBookCategory(event.target.value);
}
// Book submission
const handleBooksubmit=(event)=>{
event.preventDefault();
const form=event.target;
const  BookTitle =form.BookTitle.value;
// console.log(BookTitle);
const AuthorName =form.AuthorName.value;
const ImageUrl=form.ImageUrl.value;
const Category=form.Category.value;
const BookDescription=form.BookDescription.value;
const BookPdfUrl=form.BookPdfUrl.value;


const bookObj={
    BookTitle,
    AuthorName,
    ImageUrl,
    Category,
    BookDescription,
    BookPdfUrl
}
console.log(bookObj);

fetch('http://localhost:3000/upload-book',{method:"POST",headers:{
    "Content-type":"application/json"

},
body:JSON.stringify(bookObj)
}).then(res=>res.json()).then(data=>{
    alert("Book Uplaoded Successfully !!!")
    form.reset();
})
}


    return (
        <div className='px-4 my-12 '>

            <h2 className='text-3xl mb-8 font-bold '>Upload A Book</h2>
            <form onSubmit={handleBooksubmit} className="flex lg:w-[900px]  flex-col  flex-wrap gap-4">
            {/* first row */}

            <div className='flex gap-8'>
                 <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label htmlFor="BookTitle" value="BookTitle" />
                    </div>
                    <TextInput id="BookTitle" type="text" placeholder="Book Name" required />
                </div>
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label htmlFor="AuthorName" value="AuthorName" />
                    </div>
                    <TextInput id="AuthorName" type="text" placeholder="Author Name" required />
                </div>

            
            </div>
            {/* second row */}
              <div className='flex gap-8'>
                 <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label htmlFor="ImageUrl" value="ImageUrl" />
                    </div>
                    <TextInput id="ImageUrl" type="text" placeholder="Image link" required />
                </div>
               
    {/* Category */}
               <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label htmlFor="inputState" value="Book Category" />
                    </div>
                 <Select id='inputState' name='Category' className='w-full rounded ' value={selectBookCategory}
                 onChange={handlechangeSelectedvalue}>
       {
    Category.map((option)=>
        <option key={option} value={option}>{option}</option>
    )
        }
                 </Select>

                </div>
            
               </div>

           {/* Book BookDescription */}
           <div>
           <div className="mb-2 block">
          <Label htmlFor="BookDescription" value="BookDescription" />
        </div>
        <Textarea id="BookDescription" name='BookDescription' placeholder="Write about book..." required rows={6} className='w-full' />
          </div>
         
              <div/>
               {/* Book PDF link */}
               <div>
          <div className="mb-2 block">
          <Label htmlFor="BookPdfUrl" value="BookPdfUrl" />
        </div>
        <TextInput id="BookPdfUrl" name='BookPdfUrl' type="text" placeholder='book pdf url' required shadow />
        </div>
     
        <Button type="submit" className='mt-5 ' >Upload </Button>


            </form>
        </div>
    )
}

export default Uploadbook