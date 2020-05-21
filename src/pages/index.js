import React from "react"

import { Container, Content, Banner, About, Inovation, Footer, Profissionais, Copyright } from './styles';
import GlobalStyle  from '../styles/reset';
import Logo from '../assets/logo.svg';
import LogoWhite from '../assets/logo-white.svg';
import LogoSenior from '../assets/senior.svg';
import LogoInsta from '../assets/instagram.svg';
import LogoWhatsapp from '../assets/whatsapp.svg';
import Healthy from '../assets/healthy.svg';
import ProfessionalMarcela from '../assets/professional-marcela.jpeg';
import ProfessionalEujessika from '../assets/professional-eujessika.jpg';
import Idea from '../assets/idea.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'


export default function Index() {
  return (
    <>
      <GlobalStyle/>
      <Container>
        <Content>
          <img src={Logo} alt="logo" />
        </Content>
      </Container>
      <Banner>
      <img src={LogoWhite} alt="logo" />
        <div>
          <img src={LogoSenior} alt="logo" />
          <p>Na palma da sua mão</p>
          <button>Saiba Mais</button>
        </div>
      </Banner>
      <About>
        <img src={Healthy} alt="healthy"/>
        <div>
          <h1>Sobre</h1>
          <p>A Sênior Saúde Móvel nasceu em Campina Grande, fruto dos projetos de doutorado e mestrado de duas fisioterapeutas: Eujessika Rodrigues e Marcela Pimentel. Entusiastas do universo do envelhecimento humano, as duas dedicam-se nos últimos anos à prestação de um atendimento fisioterapêutico cada vez mais inovador, personalizado, humanizado e que estimule a autonomia e a independência do idoso. </p>
        </div>
      </About>

      <Inovation>
        <div>
        <FontAwesomeIcon icon={faCheckSquare} />
          <img src={Idea} alt="ideia" />
          <h1>Inovação</h1>
          <p>Após profunda dedicação em estudos nessa área, a Sênior Saúde Móvel implementou uma estratégia tecnológica aos atendimentos fisioterapêuticos. Desenvolvemos um sistema de monitoramento remoto de idosos, que capta informações do paciente 24h por dia através de um smartwatch. Esse serviço auxilia na avaliação continuada, oferecendo dados cruciais para predição de condições adversas à saúde, bem como ajuda na tomada de decisão fisioterapêutica. Idosos em diferentes condições funcionais podem se beneficiar do monitoramento remoto. </p>
        </div>

      </Inovation>



      <Profissionais>
        <div>
          <div>
            <img src={ProfessionalMarcela} alt="healthy"/>  
            <h1>Marcela Pimentel</h1>
          </div>
          <div>
            <p>Mestranda em Ciências e Tecnologia em Saúde pela Universidade Estadual da Paraíba (UEPB). Pós-graduanda em Fisioterapia Neurofuncional Adulto e Infantil pela Faculdades Integradas de Patos (FIP). Atualmente, é professora universitária na área de neurologia e pesquisadora no Núcleo de Tecnologias Estratégicas em Saúde (NUTES) desenvolvendo projetos voltados ao monitoramento remoto de idosos com uso da tecnologia. É membro do Laboratório de Neurociências e Comportamento Aplicadas (LANEC/UEPB). Possui ampla experiência no tratamento das doenças crônico-neurodegenerativas comuns do envelhecimento.</p>
          </div>
        </div>

        <div>
          <div>
            <img src={ProfessionalEujessika} alt="healthy"/>  
            <h1>Eujessika Rodrigues</h1>
          </div>
          <div>
            <p>Mestranda em Ciências e Tecnologia em Saúde pela Universidade Estadual da Paraíba (UEPB). Pós-graduanda em Fisioterapia Neurofuncional Adulto e Infantil pela Faculdades Integradas de Patos (FIP). Atualmente, é professora universitária na área de neurologia e pesquisadora no Núcleo de Tecnologias Estratégicas em Saúde (NUTES) desenvolvendo projetos voltados ao monitoramento remoto de idosos com uso da tecnologia. É membro do Laboratório de Neurociências e Comportamento Aplicadas (LANEC/UEPB). Possui ampla experiência no tratamento das doenças crônico-neurodegenerativas comuns do envelhecimento.</p>
          </div>
        </div>
        
      </Profissionais>
      <Footer>
        <div>
          <img src={LogoWhite} alt="logo" />
          <div>
            <img src={LogoInsta} alt="instagram" />
            <img src={LogoWhatsapp} alt="whatsapp" />
          </div>
         
        </div>
        <Copyright>Senior Saúde - &copy; {new Date().getFullYear()} Copyright</Copyright>
      </Footer>

    </>
  );
}

