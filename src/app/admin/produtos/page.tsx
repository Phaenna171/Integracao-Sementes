'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AddProductModal from "./add-product.modal";
import DeleteProductModal from "./delete-product.modal";
import productService from "@/services/product.service";
import EditProductModal from "./edit-product.modal";
import Spinner from "@/components/spinner";
import ManageCategoryModal from "./manage-category.modal";
import AddMixModal from "./add-mix-modal";
import 'react-quill/dist/quill.snow.css';
import DeleteProductMixModal from "./delete-product-mix.modal";
import EditMixModal from "./edit-mix-modal";

export default function Page() {
    const [isAddMixModalOpen, setAddMixModalOpen] = useState(false);
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isEditMixModalOpen, setEditMixModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [isDeleteMixModalOpen, setDeleteMixModalOpen] = useState(false);
    const [isManageCategoryModalOpen, setManageCategoryModalOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [productsMix, setProductsMix] = useState([]);
    const [productToEdit, setProductToEdit] = useState()
    const [productMixToEdit, setProductMixToEdit] = useState()
    const [productToDelete, setProductToDelete] = useState('')
    const [productMixToDelete, setProductMixToDelete] = useState('')
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        getData()
        async function getData() {
            const { data } = await productService.getAll()
            setProducts(data)
            const { data: mixData } = await productService.getAllMix()
            setProductsMix(mixData)
        }
    }, []);

    function handleEdit(id: string) {
        setEditModalOpen(true)
        setProductToEdit(products.find(el => el.id == id))
    }

    function handleEditMix(id: string) {
        setEditMixModalOpen(true)
        setProductMixToEdit(productsMix.find(el => el.id == id))
    }

    async function handleDelete() {
        setShowSpinner(true)
        const result = await productService.delete(productToDelete)
        if (result.error) alert(result.message);
        else {
            setDeleteModalOpen(false)
            alert('Produto removido')
            location.reload()
        }
        setShowSpinner(false)
    }

    async function handleDeleteMix() {
        setShowSpinner(true)
        const result = await productService.deleteMix(productMixToDelete)
        if (result.error) alert(result.message);
        else {
            setDeleteModalOpen(false)
            alert('Mix removido')
            location.reload()
        }
        setShowSpinner(false)
    }

    return (
        <main className="p-10 bg-white h-full">

            <Spinner isVisible={showSpinner} />

            <h1 className="text-4xl font-bold mb-10">PRODUTOS</h1>

            <div className="flex gap-6 justify-between md:flex-nowrap flex-wrap">
                <div className="flex flex-col gap-10">
                    <div className="relative flex flex-col gap-4 h-fit">
                        <div onClick={() => setAddModalOpen(true)} className="cursor-pointer flex justify-center items-center relative md:w-[209px] w-full md:h-[175px] h-full z-0 top-0 left-0 rounded-lg overflow-hidden ">
                            <Image unoptimized width={300} height={300} alt="Card produtos" className="w-full h-full object-cover" src="/imgs/admin-produtos.png" />
                            <div className="bg-black absolute w-full h-full top-0 left-0 bg-opacity-70"></div>
                            <span className="absolute text-white text-7xl font-black z-10">+</span>
                        </div>
                        <button onClick={() => setAddModalOpen(true)} className="h-[34px] px-2.5 py-[5px] bg-[#056735] rounded-lg justify-center items-center gap-2.5 inline-flex">
                            <span className="text-white text-xs font-black">+</span>
                            <span className="text-white text-xs font-normal"> Adicionar novo produto</span>
                        </button>
                    </div>
                    <div className="relative flex flex-col gap-4 h-fit">
                        <div onClick={() => setAddMixModalOpen(true)} className="cursor-pointer flex justify-center items-center relative md:w-[209px] w-full md:h-[175px] h-full z-0 top-0 left-0 rounded-lg overflow-hidden ">
                            <Image unoptimized width={300} height={300} alt="Card produtos" className="w-full h-full object-cover" src="/imgs/admin-produtos.png" />
                            <div className="bg-black absolute w-full h-full top-0 left-0 bg-opacity-70"></div>
                            <span className="absolute text-white text-7xl font-black z-10">+</span>
                        </div>
                        <button onClick={() => setAddMixModalOpen(true)} className="h-[34px] px-2.5 py-[5px] bg-blue-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
                            <span className="text-white text-xs font-black">+</span>
                            <span className="text-white text-xs font-normal"> Adicionar novo mix</span>
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap md:gap-6 gap-14 justify-end">
                    {products.length == 0 && productsMix.length == 0 && <p className="text-red-600">Nenhum produto adicionado</p>}

                    {products?.map((product, index) => (
                        <div key={index} className="w-[209px] flex-col items-center gap-2 inline-flex relative ">
                            <Image
                                src={product.carouselPhotos && product?.carouselPhotos[0]}
                                alt={product.title}
                                width={250}
                                height={200}
                                className="object-cover w-[250px] h-[200px] rounded-md"
                                unoptimized
                            />

                            <div className="absolute top-0 left-0 m-3 text-white">
                                <h2 className="font-bold">{product.title}</h2>
                                <h3>{product.subtitle}</h3>
                            </div>

                            <div className="items-center gap-3 inline-flex w-full">
                                <button onClick={() => handleEdit(product.id)} className="flex-grow text-white text-xs font-normal transition-all hover:scale-105 h-[34px] px-2.5 py-[5px] bg-[#6f6f6f] rounded-lg flex items-center justify-center gap-2">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.862 4.487L18.549 2.799C18.9007 2.44733 19.3777 2.24976 19.875 2.24976C20.3723 2.24976 20.8493 2.44733 21.201 2.799C21.5527 3.15068 21.7502 3.62766 21.7502 4.125C21.7502 4.62235 21.5527 5.09933 21.201 5.451L10.582 16.07C10.0533 16.5984 9.40137 16.9867 8.685 17.2L6 18L6.8 15.315C7.01328 14.5986 7.40163 13.9467 7.93 13.418L16.862 4.487ZM16.862 4.487L19.5 7.125M18 14V18.75C18 19.3467 17.7629 19.919 17.341 20.341C16.919 20.763 16.3467 21 15.75 21H5.25C4.65326 21 4.08097 20.763 3.65901 20.341C3.23705 19.919 3 19.3467 3 18.75V8.25C3 7.65327 3.23705 7.08097 3.65901 6.65901C4.08097 6.23706 4.65326 6 5.25 6H10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>Editar</span>
                                </button>
                                <button onClick={() => { setDeleteModalOpen(true); setProductToDelete(products.find(el => el.id == product.id).id) }} className="flex-grow text-white text-xs font-normal transition-all hover:scale-105 h-[34px] px-2.5 py-[5px] bg-[#ea722d] rounded-lg flex items-center justify-center gap-2">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.25 7.5L19.625 18.132C19.5913 18.705 19.3399 19.2436 18.9222 19.6373C18.5045 20.031 17.952 20.2502 17.378 20.25H6.622C6.04796 20.2502 5.49555 20.031 5.07783 19.6373C4.66011 19.2436 4.40868 18.705 4.375 18.132L3.75 7.5M9.75 11.625L12 13.875M12 13.875L14.25 16.125M12 13.875L14.25 11.625M12 13.875L9.75 16.125M3.375 7.5H20.625C21.246 7.5 21.75 6.996 21.75 6.375V4.875C21.75 4.254 21.246 3.75 20.625 3.75H3.375C2.754 3.75 2.25 4.254 2.25 4.875V6.375C2.25 6.996 2.754 7.5 3.375 7.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>Remover</span>
                                </button>
                            </div>
                        </div>
                    ))}
                    {productsMix?.map((productMix, index) => (
                        <div key={index} className="w-[209px] flex-col items-center gap-2 inline-flex relative ">
                            <Image
                                src={productMix.productImage}
                                alt={productMix.name}
                                width={250}
                                height={200}
                                className="object-cover w-[250px] h-[200px] rounded-md"
                                unoptimized
                            />

                            <div className="absolute top-0 left-0 m-3 text-white">
                                <h2 className="font-bold">{productMix.name}</h2>
                            </div>

                            <div className="items-center gap-3 inline-flex w-full">
                                <button onClick={() => handleEditMix(productMix.id)} className="flex-grow text-white text-xs font-normal transition-all hover:scale-105 h-[34px] px-2.5 py-[5px] bg-[#6f6f6f] rounded-lg flex items-center justify-center gap-2">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.862 4.487L18.549 2.799C18.9007 2.44733 19.3777 2.24976 19.875 2.24976C20.3723 2.24976 20.8493 2.44733 21.201 2.799C21.5527 3.15068 21.7502 3.62766 21.7502 4.125C21.7502 4.62235 21.5527 5.09933 21.201 5.451L10.582 16.07C10.0533 16.5984 9.40137 16.9867 8.685 17.2L6 18L6.8 15.315C7.01328 14.5986 7.40163 13.9467 7.93 13.418L16.862 4.487ZM16.862 4.487L19.5 7.125M18 14V18.75C18 19.3467 17.7629 19.919 17.341 20.341C16.919 20.763 16.3467 21 15.75 21H5.25C4.65326 21 4.08097 20.763 3.65901 20.341C3.23705 19.919 3 19.3467 3 18.75V8.25C3 7.65327 3.23705 7.08097 3.65901 6.65901C4.08097 6.23706 4.65326 6 5.25 6H10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>Editar</span>
                                </button>
                                <button onClick={() => { setDeleteMixModalOpen(true); setProductMixToDelete(productMix.id) }} className="flex-grow text-white text-xs font-normal transition-all hover:scale-105 h-[34px] px-2.5 py-[5px] bg-[#ea722d] rounded-lg flex items-center justify-center gap-2">
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

            <AddProductModal
                isOpen={isAddModalOpen}
                onClose={() => setAddModalOpen(false)}
            />

            <AddMixModal
                isOpen={isAddMixModalOpen}
                onClose={() => setAddMixModalOpen(false)}
            />

            <EditProductModal
                product={productToEdit}
                isOpen={isEditModalOpen}
                onClose={() => setEditModalOpen(false)}
            />

            <EditMixModal
                product={productMixToEdit}
                isOpen={isEditMixModalOpen}
                onClose={() => setEditModalOpen(false)}
            />

            {/* Delete Product Modal */}
            <DeleteProductModal
                isOpen={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onDelete={handleDelete}
            />
            <DeleteProductMixModal
                isOpen={isDeleteMixModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onDelete={handleDeleteMix}
            />
            <ManageCategoryModal
                isOpen={isManageCategoryModalOpen}
                onClose={() => setManageCategoryModalOpen(false)}
            />

            <button onClick={() => setManageCategoryModalOpen(true)} className="fixed bottom-10 left-10 h-[34px] px-2.5 py-[5px] bg-[#056735] rounded-lg justify-center items-center gap-2.5 inline-flex">
                <span className="text-white text-xs font-normal">Gerenciar categorias</span>
            </button>
        </main>
    );
}