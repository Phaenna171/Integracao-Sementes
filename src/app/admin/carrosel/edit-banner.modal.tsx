import bannerService from "@/services/banner.service";
import { useEffect, useState } from "react";

export default function EditBannerModal({ isOpen, onClose, banner }) {
  const [images, setImages] = useState<{ name: string, src: string, file?: File }>({ name: "", src: "" });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file)
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages({
          name: file.name,
          src: reader.result,
          file
        } as any);
      };
      reader.readAsDataURL(file);
    }
  };

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!images.src) return alert('Insira uma foto');

    const formData = new FormData();

    formData.append('title', e.currentTarget.title.value);
    formData.append('description', e.currentTarget.description.value);
    formData.append('link', e.currentTarget.link.value);

    if (!images.src.includes('firebase')) formData.append(`file`, images.file);

    const result = await bannerService.update(formData, banner.id);
    if (result.error) alert(result.message);
    else {
      onClose()
      alert('Banner atualizado')
      location.reload()
    }
  }

  useEffect(() => {
    if (banner) {
      setTitle(banner.title || "");
      setDescription(banner.description || "");
      setLink(banner.link || "");
      setImages({ name: `Banner`, src: banner.image })
    }
  }, [banner]);

  if (!banner) return null

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-[#056735] ${isOpen ? "block" : "hidden"
        }`}
    >
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 w-[700px] max-h-[700px] overflow-y-auto relative">
        {/* Close Button */}
        <button type="button" onClick={onClose} className="absolute top-4 right-4 text-xl">
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4">Editar Banner</h2>

        {/* Product Name */}
        <label className="block mb-2">Título::</label>
        <input value={title} onChange={e => setTitle(e.target.value)} name="title" required type="text" className="w-full mb-4 p-2 border border-green-600 rounded"
          placeholder="Qualidade que enriquece o agro"
        />

        {/* Long Description */}
        <label className="block mb-2">Texto auxiliar:</label>
        <textarea
          value={description} onChange={e => setDescription(e.target.value)}
          name="description" required
          className="w-full mb-4 p-2 border border-green-600 rounded h-24"
          placeholder="Escreva aqui a descrição completa do produto."
        ></textarea>

        <label className="block mb-2">Imagem:</label>
        <div className="flex mb-2 gap-4 items-center">
          {images.src
            ? <img src={images.src} alt='imagem' className="h-12 w-12 object-cover rounded-md" />
            : <div className="h-12 w-12 object-cover rounded-md bg-slate-600" />
          }
          <label className='border border-green-600 rounded w-1/2 p-2 cursor-pointer' htmlFor={`banner-edit`}>{images.name || 'Selecionar foto'}</label>
          <input id={`banner-edit`} hidden
            accept="image/*"
            type="file" placeholder="Item" className="w-1/2 p-2 border border-green-600 rounded"
            onChange={(e) => handleImageChange(e)}
          />
        </div>


        {/* Short Description */}
        <label className="block mb-2">Link da imagem:</label>
        <input name="link" value={link} onChange={e => setLink(e.target.value)}
          required type="text" className="w-full mb-4 p-2 border border-green-600 rounded" placeholder="Aqui vai ficar todo o texto auxiliar."
        />

        {/* Save and Close Buttons */}
        <div className="flex justify-end gap-4">
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">SALVAR</button>
          <button type="button" onClick={onClose} className="bg-gray-600 text-white px-4 py-2 rounded">FECHAR</button>
        </div>
      </form>
    </div>
  );
}