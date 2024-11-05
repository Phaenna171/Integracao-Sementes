export default function DeleteProductModal({ isOpen, onClose, onDelete }) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-[#056735] ${isOpen ? "block" : "hidden"
        }`}
    >
      <div className="bg-white rounded-lg p-6 w-[400px] relative">

        <h2 className="text-2xl font-bold mb-4">Tem certeza que deseja excluir o produto selecionado?</h2>

        {/* Confirm and Cancel Buttons */}
        <div className="flex justify-between gap-4 mt-10">
          <button
            onClick={onDelete}
            className="bg-[#056735] text-white px-4 py-2 rounded text-xs"
          >
            SIM, QUERO EXCLUIR
          </button>
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-4 py-2 rounded text-xs"
          >
            NÃO, QUERO CANCELAR
          </button>
        </div>
      </div>
    </div>
  );
}