import { useContext } from "react";
import { ProductContext } from "@/app/products/context/ProductContext";

export default function Textos() {

  const { datas, selectedSeed, selectedCategory } = useContext(ProductContext)

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await productService.getAll()
      setProducts(data)
    }
    getData()
  }, [selectedSeed]);
  
  return (
    <>
      {/* TEXTOS */}
      <div className="px-16 py-4 lg:px-28 xl:px-60 xl:py-16">
        {datas[selectedCategory].textos[selectedSeed].introducao.map((introducao, index) => (
          <p key={index} className="text-[#354D4D] font-openSans text-lg font-medium">{introducao}</p>
        ))}
        <h2 className="font-openSans font-bold text-[#354D4D] tracking-[0.05rem] pt-16 pb-4">VANTAGENS:</h2>
        {datas[selectedCategory].textos[selectedSeed].vantagens.map((vantagem, index) => (
          <p key={index} className="text-[#354D4D] font-openSans text-lg font-medium pb-2 md:pb-4">{vantagem}</p>
        ))}
        <h2 className="font-openSans font-bold text-[#354D4D] tracking-[0.05rem] pt-16 pb-4">OBSERVAÇÕES:</h2>
        {datas[selectedCategory].textos[selectedSeed].obs.map((observacao, index) => (
          <p key={index} className="text-[#354D4D] font-openSans text-lg font-medium pb-2 md:pb-4">{observacao}</p>
        ))}
      </div>

    </>
  )
}