import Spinner from "@/components/spinner";
import productService from "@/services/product.service";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function EditProductModal({ isOpen, onClose, product }) {
  const [table, setTable] = useState([{ key: "" }]);
  const [images, setImages] = useState<{ name: string, src: string, file?: File }[]>([{ name: "", src: "" }]);
  const [showSpinner, setShowSpinner] = useState(false);

  // const [uses, setUses] = useState([
  //   { id: 1, label: "Áreas Verdes", src: "/imgs/admin-products/icone_areas_verdes.png", selected: false },
  //   { id: 2, label: "Ensilagem", src: "/imgs/admin-products/icone_ensilagem.png", selected: false },
  //   { id: 3, label: "Fenação", src: "/imgs/admin-products/icone_fenacao.png", selected: false },
  //   { id: 4, label: "Margens de Rodovias", src: "/imgs/admin-products/icone_margens_de_rodovias.png", selected: false },
  //   { id: 5, label: "Palhada", src: "/imgs/admin-products/icone_palhada.png", selected: false },
  //   { id: 6, label: "Pastoreio", src: "/imgs/admin-products/icone_pastoreio.png", selected: false },
  //   { id: 7, label: "Piquetes", src: "/imgs/admin-products/icone_piquetes.png", selected: false },
  //   { id: 8, label: "Pista de Pouso", src: "/imgs/admin-products/icone_pista_de_pouso.png", selected: false },
  //   { id: 9, label: "Taludes", src: "/imgs/admin-products/icone_talaudes.png", selected: false },
  // ]);

  // // State for "indications" with an additional "selected" attribute
  // const [indications, setIndications] = useState([
  //   { id: 1, label: "Gado de Corte", src: "/imgs/admin-products/icone_gado_de_corte.png", selected: false },
  //   { id: 2, label: "Gado de Leite", src: "/imgs/admin-products/icone_gado_de_leite.png", selected: false },
  //   { id: 3, label: "Ovinos e Caprinos", src: "/imgs/admin-products/icone_ovino_e_caprinos.png", selected: false },
  //   { id: 4, label: "Equinos", src: "/imgs/admin-products/icone_equinos.png", selected: false },
  // ]);

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setCategory] = useState("");
  const [line, setLine] = useState("");
  const [description, setDescription] = useState("");
  const [tableTitle, setTableTitle] = useState("");

  // // Function to handle clicking a "use" item (toggle selected state)
  // const toggleUseSelection = (id) => {
  //   setUses((prevUses) =>
  //     prevUses.map((use) =>
  //       use.id === id ? { ...use, selected: !use.selected } : use
  //     )
  //   );
  // };

  // // Function to handle clicking an "indication" item (toggle selected state)
  // const toggleIndicationSelection = (id) => {
  //   setIndications((prevIndications) =>
  //     prevIndications.map((indication) =>
  //       indication.id === id ? { ...indication, selected: !indication.selected } : indication
  //     )
  //   );
  // };

  const handleAddTableItem = () => {
    setTable([...table, { key: "" }]);
  };

  const handleRemoveTableItem = (index) => {
    const newTable = table.filter((_, i) => i !== index);
    setTable(newTable);
  };

  const handleAddImage = () => {
    setImages([...images, { name: "", src: "" }]);
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    console.log(file)
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedImages = [...images];
        updatedImages[index] = {
          name: file.name,
          src: reader.result,
          file
        } as any
        setImages(updatedImages);
      };
      reader.readAsDataURL(file);
    }
  };

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (images.length == 0 || (images.length == 1 && images.find(el => !el.name))) return alert('Insira uma foto ao carrossel');
    // if (uses.filter(el => el.selected).length == 0) return alert('Selecione ao menos uma utilização')
    // if (indications.filter(el => el.selected).length == 0) return alert('Selecione ao menos uma indicação')

    const formData = new FormData();

    formData.append('title', e.currentTarget.title.value);
    formData.append('subtitle', e.currentTarget.subtitle.value);
    formData.append('category', e.currentTarget.category.value);
    formData.append('line', e.currentTarget.line.value);
    formData.append('description', e.currentTarget.description.value);
    formData.append('tableTitle', e.currentTarget.tableTitle.value);

    formData.append('table', JSON.stringify(table));

    images.forEach((image, index) => {
      if (!image.src.includes('firebase')) formData.append(`carouselPhotos`, image.file);
      else formData.append(`oldPhotos`, image.src)
    });

    // formData.append('use', JSON.stringify(uses.filter(use => use.selected).map(el => el.label)));
    // formData.append('indication', JSON.stringify(indications.filter(indication => indication.selected).map(el => el.label)));
    setShowSpinner(true)
    const result = await productService.update(formData, product.id);
    if (result.error) alert(result.message);
    else {
      onClose()
      alert('Produto atualizado')
      location.reload()
    }
    setShowSpinner(false)
  }

  useEffect(() => {
    if (product) {
      // const updatedUses = uses.map(el => {
      //   if (product.use.find(productUse => productUse == el.label)) return { ...el, selected: true }
      //   return el
      // })

      // const updatedIndications = indications.map(el => {
      //   if (product.indication.find(productIndication => productIndication == el.label)) return { ...el, selected: true }
      //   return el
      // })

      setTitle(product.title || "");
      setSubtitle(product.subtitle || "");
      setCategory(product.category || "");
      setLine(product.line || "");
      setDescription(product.description || "");
      setTableTitle(product.tableTitle || "");
      // setIndications(updatedIndications)
      // setUses(updatedUses)
      setTable(product.table)
      product.carouselPhotos && setImages(product.carouselPhotos?.map((el, index) => ({ name: `Produto ${++index}`, src: el })))
    }
  }, [product]);

  if (!product) return null

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-[#056735] ${isOpen ? "block" : "hidden"
        }`}
    >
      <Spinner isVisible={showSpinner} />
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 w-[700px] max-h-[700px] overflow-y-auto relative">
        {/* Close Button */}
        <button type="button" onClick={onClose} className="absolute top-4 right-4 text-xl">
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4">Editar Produto</h2>

        {/* Product Name */}
        <label className="block mb-2">Nome do Produto:</label>
        <input value={title} onChange={e => setTitle(e.target.value)} name="title" required type="text" className="w-full mb-4 p-2 border border-green-600 rounded"
          placeholder="Qualidade que enriquece o agro"
        />

        {/* Short Description */}
        <label className="block mb-2">Descrição curta:</label>
        <input name="subtitle" value={subtitle} onChange={e => setSubtitle(e.target.value)}
          required type="text" className="w-full mb-4 p-2 border border-green-600 rounded" placeholder="Aqui vai ficar todo o texto auxiliar."
        />

        {/* Linha de produtos */}
        <label className="block mb-2">Linha:</label>
        <select
          value={line}
          onChange={e => setLine(e.target.value)}
          name="line"
          required
          className="w-full mb-4 p-2 border border-green-600 rounded"
        >
          <option value="" disabled selected hidden>
            Selecione uma linha
          </option>
          <option selected value="Linha Quali">Linha Quali</option>
          <option value="Linha Pro">Linha Pro</option>
          <option value="Linha Total Quali">Linha Total Quali</option>
          <option value="Mix">Mix</option>
        </select>

        {/* Short Description */}
        <label className="block mb-2">Categoria:</label>
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          name="category"
          required
          className="w-full mb-4 p-2 border border-green-600 rounded"
        >
          <option value="" disabled selected hidden>Selecione uma categoria</option>
          <option selected value="Brachiaria">Brachiaria</option>
          <option value="Panicum">Panicum</option>
          <option value="Leguminosas">Leguminosas</option>
          <option value="Gramíneas">Gramíneas</option>
          <option value="Brássicas">Brássicas</option>
          <option value="Sementes de cobertura">Sementes de cobertura</option>
          <option value="Poligonáceas">Poligonáceas</option>
          <option value="Asteráceas">Asteráceas</option>
        </select>

        <label className="block mb-2">Carrossel de fotos:</label>
        {images.map((item, index) => (
          <div className="flex mb-2 gap-4 items-center" key={index}>
            {item.src
              ? <img src={item.src} alt={item.name} className="h-12 w-12 object-cover rounded-md" />
              : <div className="h-12 w-12 object-cover rounded-md bg-slate-600" />
            }
            <label className='border border-green-600 rounded w-1/2 p-2 cursor-pointer' htmlFor={`image-edit-${index}`}>{item.name || 'Selecionar foto'}</label>
            <input id={`image-edit-${index}`} hidden
              accept="image/*"
              type="file" placeholder="Item" className="w-1/2 p-2 border border-green-600 rounded"
              onChange={(e) => handleImageChange(e, index)}
            />
            <button type="button" onClick={() => handleRemoveImage(index)} className="text-red-600">Remover</button>
          </div>
        ))}
        <button type="button" onClick={handleAddImage} className="text-green-600 font-bold mb-4">+ Adicionar mais fotos</button>

        {/* Long Description */}
        <label className="block mb-2">Descrição Completa:</label>
        <textarea
          value={description} onChange={e => setDescription(e.target.value)}
          name="description" required
          className="w-full mb-4 p-2 border border-green-600 rounded h-24"
          placeholder="Escreva aqui a descrição completa do produto."
        ></textarea>

        {/* Table Items */}
        <label className="block mb-2">Título da tabela:</label>
        <input
          value={tableTitle} onChange={e => setTableTitle(e.target.value)}
          required name="tableTitle" type="text" className="w-full mb-4 p-2 border border-green-600 rounded"
          placeholder="MORFOLOGIA"
        />
        {table.map((item, index) => (
          <div className="flex mb-2 gap-4" key={index}>
            <input
              required type="text" placeholder="Item" className="w-1/2 p-2 border border-green-600 rounded"
              value={item.key}
              onChange={(e) => setTable(table.map((ti, i) => i === index ? { ...ti, key: e.target.value } : ti))}
            />
            {/* <input
              required type="text" placeholder="Descrição" className="w-1/2 p-2 border border-green-600 rounded"
              value={item.value}
              onChange={(e) => setTable(table.map((ti, i) => i === index ? { ...ti, value: e.target.value } : ti))}
            /> */}
            <button type="button" onClick={() => handleRemoveTableItem(index)} className="text-red-600">Remover</button>
          </div>
        ))}
        <button type="button" onClick={handleAddTableItem} className="text-green-600 font-bold mb-4">+ Adicionar mais itens</button>

        {/* Save and Close Buttons */}
        <div className="flex justify-end gap-4">
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">SALVAR</button>
          <button type="button" onClick={onClose} className="bg-gray-600 text-white px-4 py-2 rounded">FECHAR</button>
        </div>
      </form>
    </div>
  );
}