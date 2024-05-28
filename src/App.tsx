import wplayLogo from "./assets/wplay-logo.png";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

function App() {
  return (
    <div className=" min-h-screen  max-h-screen overflow-y-auto flex justify-s items-s flex-1  w-screen overflow-x-hidden bg-custom-gradient-home text-white md:py-11">
      <div className="w-full flex-col justify-start items-center inline-flex gap-6 mt-12">
        <div className="flex-col justify-start items-center flex max-w-[90%] md:max-w-[60%] gap-6">
          <img src={wplayLogo} alt="wplay" className="h-10" />
          <h1 className="font-bold  text-balance  text-center text-4xl md:text-6xl ">
            Vamos subir de nível: conheça o novo painel!
          </h1>
          <p
            className="max-w-full break-words whitespace-break-spaces md:max-w-[60%] text-balance text-center leading-[150%]
          font-normal text-base md:text-lg
          "
          >
            Desativamos o painel https://cmswarez.tv/ e redesenhamos um novo, do
            zero, com muitas melhorias, além de um visual mais moderno e
            simplificado!
          </p>
          <span className="text-center">
            Agora, você pode acessar o novo painel em{" "}
            <span className="text-green-500"> wplay.vip</span>, porque você é
            VIP!
          </span>
        </div>
        <div className="flex flex-col gap-6 justify-center items-center px-12">
          <div className="flex gap-6 flex-wrap w-full ">
            <a
              href="https://meajuda.wplay.vip/"
              target="_blank"
              className="flex whitespace-nowrap px-5 py-4  rounded-lg border border-white border-solid dark:border-white justify-center items-center gap-2 mt-2 flex-1"
            >
              <span className="text-white text-base font-medium ">
                Tutoriais do painel novo
              </span>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8556 9.95794V14.6835C14.8557 14.8334 14.8263 14.9819 14.769 15.1204C14.7117 15.2589 14.6276 15.3847 14.5216 15.4907C14.4156 15.5967 14.2898 15.6807 14.1513 15.738C14.0128 15.7953 13.8644 15.8247 13.7145 15.8246H2.30773C2.15785 15.8247 2.00941 15.7953 1.87091 15.738C1.73242 15.6807 1.60657 15.5967 1.50059 15.4907C1.39461 15.3847 1.31056 15.2589 1.25326 15.1204C1.19596 14.9819 1.16654 14.8334 1.16667 14.6835V3.27678C1.16654 3.1269 1.19596 2.97846 1.25326 2.83996C1.31056 2.70147 1.39461 2.57562 1.50059 2.46964C1.60657 2.36366 1.73242 2.27961 1.87091 2.22231C2.00941 2.16502 2.15785 2.13559 2.30773 2.13572H6.82311M10.1935 1.15794H15.8333V6.79776M8.11964 8.87163L15.7248 1.26647"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://wplay.vip/"
              target="_blank"
              className="flex whitespace-nowrap px-5 py-4 bg-[#07A85D] rounded-lg border  justify-center items-center gap-2 mt-2 flex-1"
            >
              <span className="text-white text-base font-medium ">
                Ir para painel novo
              </span>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8556 9.95794V14.6835C14.8557 14.8334 14.8263 14.9819 14.769 15.1204C14.7117 15.2589 14.6276 15.3847 14.5216 15.4907C14.4156 15.5967 14.2898 15.6807 14.1513 15.738C14.0128 15.7953 13.8644 15.8247 13.7145 15.8246H2.30773C2.15785 15.8247 2.00941 15.7953 1.87091 15.738C1.73242 15.6807 1.60657 15.5967 1.50059 15.4907C1.39461 15.3847 1.31056 15.2589 1.25326 15.1204C1.19596 14.9819 1.16654 14.8334 1.16667 14.6835V3.27678C1.16654 3.1269 1.19596 2.97846 1.25326 2.83996C1.31056 2.70147 1.39461 2.57562 1.50059 2.46964C1.60657 2.36366 1.73242 2.27961 1.87091 2.22231C2.00941 2.16502 2.15785 2.13559 2.30773 2.13572H6.82311M10.1935 1.15794H15.8333V6.79776M8.11964 8.87163L15.7248 1.26647"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <span className="text-gray-400 text-xs text-center ">
            Vamos te redirecionar para o endereço do painel atual que é
            https://wplay.vip/
          </span>
        </div>

        <div className=" mb-4 md:w-[700px]  px-4 py-6">
          <Accordion className="flex flex-col gap-4 [&>*:nth-child(odd)]:bg-[#1F2A37] [&>*:nth-child(even)]:bg-gray-[#1F2A37]">
            <AccordionPanel className=" ">
              <AccordionTitle className="m-0 [font-family:'Inter',Helvetica]">
                Por que isso aconteceu?
              </AccordionTitle>
              <AccordionContent className="">
                <p className="mb-2 [font-family:'Inter',Helvetica] text-gray-500 dark:text-gray-500 leading-6">
                  Decidimos redesenhar o painel para proporcionar uma
                  experiência ainda melhor para nossos usuários. Com o novo
                  painel, fizemos diversas melhorias, deixamos a interface mais
                  moderna e simplificada, e adicionamos novas funcionalidades
                  para tornar sua navegação e gestão ainda mais intuitivas e
                  eficientes. Nosso objetivo é sempre oferecer o melhor serviço,
                  e acreditamos que essas mudanças irão facilitar e aprimorar o
                  uso do painel.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="[font-family:'Inter',Helvetica]">
                Como acesso o painel novo? Meu usuário e senha continuam iguais?
              </AccordionTitle>
              <AccordionContent>
                <p className="[font-family:'Inter',Helvetica] mb-2 text-gray-500 dark:text-gray-500 leading-6">
                  Para acessar o novo painel, basta clicar no link
                  <a
                    href="https://wplay.vip/"
                    target="_blank"
                    className="px-1 text-green-500 hover:text-green-600"
                  >
                    https://wplay.vip/
                  </a>{" "}
                  Seu usuário e senha continuam os mesmos, então você pode fazer
                  login normalmente com suas credenciais atuais.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="[font-family:'Inter',Helvetica]">
                O que muda na prática?
              </AccordionTitle>
              <AccordionContent>
                <p className="[font-family:'Inter',Helvetica] mb-2 text-gray-500 dark:text-gray-500 leading-6">
                  No novo painel, você terá acesso a todas as funcionalidades do
                  painel antigo, e muito mais, de forma mais simplificada e
                  moderna. A interface foi atualizada para ser mais atraente e
                  intuitiva, a navegação está mais fácil e rápida, e adicionamos
                  novas ferramentas para aumentar sua produtividade. Além disso,
                  o desempenho foi aprimorado e a segurança das suas informações
                  está ainda mais reforçada.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="[font-family:'Inter',Helvetica]">
                Onde encontro tutoriais e vídeos de como usar o painel?
              </AccordionTitle>
              <AccordionContent>
                <p className="[font-family:'Inter',Helvetica] mb-2 text-gray-500 dark:text-gray-500 leading-6">
                  Você pode encontrar tutoriais e vídeos de como usar o novo
                  painel na nossa Central de Ajuda. Acesse{" "}
                  <a
                    href="https://meajuda.wplay.vip/"
                    target="_blank"
                    className="px-0 text-green-500 hover:text-green-600"
                  >
                    https://meajuda.wplay.vip/
                  </a>{" "}
                  para ver todos os materiais disponíveis e tirar suas dúvidas.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="[font-family:'Inter',Helvetica]">
                E se eu não gostar do painel novo?
              </AccordionTitle>
              <AccordionContent>
                <p className="[font-family:'Inter',Helvetica] mb-2 text-gray-500 dark:text-gray-500 leading-6">
                  Entendemos que mudanças podem ser desafiadoras, e queremos
                  garantir que você tenha a melhor experiência possível. Se você
                  não gostar do novo painel, nosso canal está sempre aberto para
                  receber suas sugestões e feedback. Valorizamos muito a opinião
                  dos nossos usuários e estamos comprometidos em fazer melhorias
                  contínuas com base nas suas necessidades
                </p>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default App;
