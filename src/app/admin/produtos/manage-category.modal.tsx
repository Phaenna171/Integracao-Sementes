import { useState, useEffect } from "react";
import productService from "../../../services/product.service";

export default function ManageCategoryModal({ isOpen, onClose }) {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [editingCategory, setEditingCategory] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  useEffect(() => {
    async function fetchCategories() {
      const response = await productService.manageCategories("getAll");
      if (!response.error) {
        console.log(response)
        setCategories(response.data);
      } else {
        console.error("Failed to fetch categories:", response.message);
      }
    }

    if (isOpen) {
      fetchCategories();
    }
  }, [isOpen]);

  async function addCategory() {
    if (!newCategory.trim()) return alert("O nome da categoria não pode ser vazio.");
    const response = await productService.manageCategories("create", { name: newCategory });
    if (!response.error) {
      setNewCategory("");
      setCategories((prev) => [...prev, response.data]);
      location.reload()
    } else {
      console.error("Failed to add category:", response.message);
    }
  }

  async function editCategory(id) {
    if (!updatedName.trim()) return alert("O nome da categoria não pode ser vazio.");
    const response = await productService.manageCategories("update", { name: updatedName }, id);
    if (!response.error) {
      setCategories((prev) =>
        prev.map((category) =>
          category.id === id ? { ...category, name: updatedName } : category
        )
      );
      setEditingCategory(null);
      setUpdatedName("");
      location.reload()
    } else {
      console.error("Failed to update category:", response.message);
    }
  }

  async function deleteCategory(id) {
    const response = await productService.manageCategories("delete", null, id);
    if (!response.error) {
      setCategories((prev) => prev.filter((category) => category.id !== id));
      location.reload()
    } else {
      console.error("Failed to delete category:", response.message);
    }
  }

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-[#056735] ${isOpen ? "block" : "hidden"
        }`}
    >
      <div className="bg-white rounded-lg p-6 w-[500px] relative">
        <h2 className="text-2xl font-bold mb-4">Gerenciar Categorias</h2>

        {/* List of Categories */}
        <ul className="mb-4">
          {categories?.map((category) => (
            <li
              key={category.id}
              className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded"
            >
              {editingCategory === category.id ? (
                <input
                  type="text"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                  className="border px-2 py-1 rounded w-full"
                />
              ) : (
                <span>{category.name}</span>
              )}

              <div className="flex gap-2">
                {editingCategory === category.id ? (
                  <button
                    onClick={() => editCategory(category.id)}
                    className="bg-green-600 text-white px-2 py-1 rounded text-xs"
                  >
                    Salvar
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditingCategory(category.id);
                      setUpdatedName(category.name);
                    }}
                    className="bg-blue-600 text-white px-2 py-1 rounded text-xs"
                  >
                    Editar
                  </button>
                )}
                <button
                  onClick={() => deleteCategory(category.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded text-xs"
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Add Category Input */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Nova Categoria"
            className="border px-2 py-1 rounded w-full"
          />
          <button
            onClick={addCategory}
            className="bg-green-600 text-white px-4 py-2 rounded text-xs"
          >
            Adicionar
          </button>
        </div>

        {/* Close Modal */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-4 py-2 rounded text-xs"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}