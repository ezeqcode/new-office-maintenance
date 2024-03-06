import SvgImage from "./assets/svg1.svg";
import { FaArrowRightLong } from "react-icons/fa6";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen overflow-y-auto bg-gray-50 font-sans">
      <img className=" md:w-80 md:h-80 w-52 h-52" src={SvgImage} />
      <div className="flex-col justify-start items-center gap-6 flex">
        <div className=" text-center text-gray-900 text-3xl font-bold  tracking-tight">
          Painel em manutenção
        </div>
        <div className="flex flex-col w-full justify-center items-center text-center">
          <span className="text-center justify-center items-center w-[90%] md:w-[90%] text-gray-600 md:text-lg font-normal  leading-6 md:leading-loose tracking-tight">
            Estamos realizando uma manutenção programada em nosso painel atual
            para melhorar ainda mais a sua experiência. Enquanto isso, você pode
            acessar todas as suas funcionalidades no painel antigo através do
            endereço <span className="text-green-500"> cmswarez.tv</span>.
            Agradecemos a sua compreensão e paciência. Em breve, você poderá
            retornar ao painel atualizado com novidades e melhorias.
          </span>
        </div>

        <a
          href="https://cmswarez.tv/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 no-underline justify-center items-center p-3 bg-green-500 rounded-lg hover:text-white hover:bg-green-600"
        >
          Acessar cmswarez.tv
          <FaArrowRightLong />
        </a>
      </div>
    </div>
  );
}

export default App;
