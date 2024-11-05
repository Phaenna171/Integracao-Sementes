'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AddBlogModal from "./add-blog.modal";
import DeleteBlogModal from "./delete-blog.modal";
import EditBlogModal from "./edit-blog.modal";
import blogService from "@/services/blog.service";
import 'react-quill/dist/quill.snow.css';

export default function Page() {

    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [blogToEdit, setBlogToEdit] = useState()
    const [blogToDelete, setBlogToDelete] = useState('')

    useEffect(() => {
        getData()
        async function getData() {
            const { data } = await blogService.getAll()
            setBlogs(data)
        }
    }, []);

    function handleEdit(id: string) {
        setEditModalOpen(true)
        setBlogToEdit(blogs.find(el => el.id == id))
    }

    async function handleDelete() {
        const result = await blogService.delete(blogToDelete)
        if (result.error) alert(result.message);
        else {
            setDeleteModalOpen(false)
            alert('Blog removido')
            location.reload()
        }

    }

    return (
        <main className="p-10 bg-white h-full">
            <h1 className="text-4xl font-bold mb-10">BLOG</h1>

            <div className="flex gap-6 justify-between flex-wrap">
                <div className="relative flex flex-col gap-4 h-fit">
                    <div onClick={() => setAddModalOpen(true)} className="cursor-pointer flex justify-center items-center relative md:w-[209px] w-full md:h-[175px] h-full z-0 top-0 left-0 rounded-lg overflow-hidden ">
                        <Image unoptimized width={300} height={300} alt="Card blogs" className="w-full h-full object-cover" src="/imgs/admin-produtos.png" />
                        <div className="bg-black absolute w-full h-full top-0 left-0 bg-opacity-70"></div>
                        <span className="absolute text-white text-7xl font-black z-10">+</span>
                    </div>
                    <button onClick={() => setAddModalOpen(true)} className="h-[34px] px-2.5 py-[5px] bg-[#056735] rounded-lg justify-center items-center gap-2.5 inline-flex">
                        <span className="text-white text-xs font-black">+</span>
                        <span className="text-white text-xs font-normal"> Adicionar novo blog</span>
                    </button>
                </div>

                <div className="flex flex-wrap md:gap-6 gap-14">
                    {blogs.length == 0 && <p className="text-red-600">Nenhum post adicionado</p>}

                    {blogs?.map((blog, index) => (
                        <div key={index} className="w-[209px] flex-col items-center gap-2 inline-flex relative ">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                width={250}
                                height={200}
                                className="object-cover w-[250px] h-[200px] rounded-md"
                                unoptimized
                            />

                            <div className="text-center">
                                <h2 className="font-bold mb-0">{blog.title}</h2>
                                <div className="mt-1" dangerouslySetInnerHTML={{ __html: blog.description.substr(0, 20) }}></div>
                                <span className="mt-1">{new Date(blog.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                            </div>

                            <div className="items-center gap-3 inline-flex w-full">
                                <button onClick={() => handleEdit(blog.id)} className="flex-grow text-white text-xs font-normal transition-all hover:scale-105 h-[34px] px-2.5 py-[5px] bg-[#6f6f6f] rounded-lg flex items-center justify-center gap-2">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.862 4.487L18.549 2.799C18.9007 2.44733 19.3777 2.24976 19.875 2.24976C20.3723 2.24976 20.8493 2.44733 21.201 2.799C21.5527 3.15068 21.7502 3.62766 21.7502 4.125C21.7502 4.62235 21.5527 5.09933 21.201 5.451L10.582 16.07C10.0533 16.5984 9.40137 16.9867 8.685 17.2L6 18L6.8 15.315C7.01328 14.5986 7.40163 13.9467 7.93 13.418L16.862 4.487ZM16.862 4.487L19.5 7.125M18 14V18.75C18 19.3467 17.7629 19.919 17.341 20.341C16.919 20.763 16.3467 21 15.75 21H5.25C4.65326 21 4.08097 20.763 3.65901 20.341C3.23705 19.919 3 19.3467 3 18.75V8.25C3 7.65327 3.23705 7.08097 3.65901 6.65901C4.08097 6.23706 4.65326 6 5.25 6H10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>Editar</span>
                                </button>
                                <button onClick={() => { setDeleteModalOpen(true); setBlogToDelete(blogs.find(el => el.id == blog.id).id) }} className="flex-grow text-white text-xs font-normal transition-all hover:scale-105 h-[34px] px-2.5 py-[5px] bg-[#ea722d] rounded-lg flex items-center justify-center gap-2">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.25 7.5L19.625 18.132C19.5913 18.705 19.3399 19.2436 18.9222 19.6373C18.5045 20.031 17.952 20.2502 17.378 20.25H6.622C6.04796 20.2502 5.49555 20.031 5.07783 19.6373C4.66011 19.2436 4.40868 18.705 4.375 18.132L3.75 7.5M9.75 11.625L12 13.875M12 13.875L14.25 16.125M12 13.875L14.25 11.625M12 13.875L9.75 16.125M3.375 7.5H20.625C21.246 7.5 21.75 6.996 21.75 6.375V4.875C21.75 4.254 21.246 3.75 20.625 3.75H3.375C2.754 3.75 2.25 4.254 2.25 4.875V6.375C2.25 6.996 2.754 7.5 3.375 7.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>Remover</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <AddBlogModal
                isOpen={isAddModalOpen}
                onClose={() => setAddModalOpen(false)}
            />

            <EditBlogModal
                blog={blogToEdit}
                isOpen={isEditModalOpen}
                onClose={() => setEditModalOpen(false)}
            />

            {/* Delete Blog Modal */}
            <DeleteBlogModal
                isOpen={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onDelete={handleDelete}
            />
        </main>
    );
}