import { useState } from "react";
import Spinner from "@/components/spinner";
import productService from "@/services/product.service";

export default function EditMixModal({ isOpen, onClose, product }) {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [topics, setTopics] = useState([{ value: "" }]);
  const [plantingSeason, setPlantingSeason] = useState("");
  const [management, setManagement] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  const handleAddTopic = () => {
    setTopics([...topics, { value: "" }]);
  };

  const handleRemoveTopic = (index) => {
    const updatedTopics = topics.filter((_, i) => i !== index);
    setTopics(updatedTopics);
  };

  const handleTopicChange = (index, value) => {
    const updatedTopics = topics.map((topic, i) =>
      i === index ? { value } : topic
    );
    setTopics(updatedTopics);
  };

  const handleImageChange = (event, setImageState) => {
    const file = event.target.files[0];
    if (file) {
      setImageState(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!productName || !productImage || !backgroundImage || !plantingSeason || !management || topics.length === 0) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("productImage", productImage);
    formData.append("backgroundImage", backgroundImage);
    formData.append("plantingSeason", plantingSeason);
    formData.append("management", management);
    formData.append("topics", JSON.stringify(topics.map(topic => topic.value)));

    setShowSpinner(true);
    const result = await productService.registerMix(formData);
    setShowSpinner(false);

    if (result.error) {
      alert(result.message);
    } else {
      alert("Produto Mix adicionado com sucesso!");
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-[#056735] ${isOpen ? "block" : "hidden"
        }`}
    >
      <Spinner isVisible={showSpinner} />

      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 w-[700px] max-h-[700px] overflow-y-auto relative">
        {/* Botão de Fechar */}
        <button type="button" onClick={onClose} className="absolute top-4 right-4 text-xl">
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4">Adicionar Mix</h2>

        {/* Nome do Produto */}
        <label className="block mb-2">Nome do Produto:</label>
        <input
          name="productName"
          type="text"
          className="w-full mb-4 p-2 border border-green-600 rounded"
          placeholder="Digite o nome do produto"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        {/* Imagem do Produto */}
        <label className="block mb-2">Imagem do Produto:</label>
        <input
          type="file"
          accept="image/*"
          className="w-full mb-4 p-2 border border-green-600 rounded"
          onChange={(e) => handleImageChange(e, setProductImage)}
        />

        {/* Imagem de Fundo */}
        <label className="block mb-2">Imagem de Fundo:</label>
        <input
          type="file"
          accept="image/*"
          className="w-full mb-4 p-2 border border-green-600 rounded"
          onChange={(e) => handleImageChange(e, setBackgroundImage)}
        />

        {/* Tópicos */}
        <label className="block mb-2">Tópicos:</label>
        {topics.map((topic, index) => (
          <div className="flex items-center gap-4 mb-2" key={index}>
            <input
              type="text"
              className="w-full p-2 border border-green-600 rounded"
              placeholder={`Tópico ${index + 1}`}
              value={topic.value}
              onChange={(e) => handleTopicChange(index, e.target.value)}
            />
            <button
              type="button"
              onClick={() => handleRemoveTopic(index)}
              className="text-red-600"
            >
              Remover
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddTopic} className="text-green-600 font-bold mb-4">
          + Adicionar Tópico
        </button>

        {/* Época de Plantio */}
        <label className="block mb-2">Época de Plantio:</label>
        <input
          name="plantingSeason"
          type="text"
          className="w-full mb-4 p-2 border border-green-600 rounded"
          placeholder="Digite a época de plantio"
          value={plantingSeason}
          onChange={(e) => setPlantingSeason(e.target.value)}
        />

        {/* Manejo */}
        <label className="block mb-2">Manejo:</label>
        <input
          name="management"
          type="text"
          className="w-full mb-4 p-2 border border-green-600 rounded"
          placeholder="Digite o manejo"
          value={management}
          onChange={(e) => setManagement(e.target.value)}
        />

        {/* Botões de Salvar e Fechar */}
        <div className="flex justify-end gap-4">
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            SALVAR
          </button>
          <button type="button" onClick={onClose} className="bg-gray-600 text-white px-4 py-2 rounded">
            FECHAR
          </button>
        </div>
      </form>
    </div>
  );
}