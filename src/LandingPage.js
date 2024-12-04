import React, { useState } from "react";

const LandingPage = () => {
  const handleButtonClick = () => {
    // Substitua pelo link do Google Forms quando disponível
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSepIEISB6l8cWshcRYpuQ7O-qwMo6brlwyfMIzErIGp7Mx-Ew/viewform?usp=sf_link";
  };

  return (
    <div>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.headerText}>
            <h1 style={styles.headerTitle}>Letícia e Nathan 🩷 🧡 💛 💚 🩵 💜 🤎 🖤 🩶 🤍 ❤️‍🩹 💘 😍 💖 💗 💓 💞 💕 ❣️  ❤ ❣ ♡ ღ 💌 🫶 ❤️‍🔥</h1>
            <p style={styles.headerSubtitle}>
              As vezes, o coração guarda coisas que a mente tenta esquecer, e eu
              ainda guardo você entre essas lembranças especiais
            </p>
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <a href="#home" style={styles.navItem}>
          Início
        </a>
        <a href="#sobre" style={styles.navItem}>
          Sobre
        </a>
        <a href="#modalidades" style={styles.navItem}>
          Fotenhas
        </a>
        <a href="#revitalizacao" style={styles.navItem}>
          Poema
        </a>
        <a href="#contato" style={styles.navItem}>
          Contato
        </a>
      </nav>

      {/* Seções */}
      <section id="home" style={styles.heroSection}>
        <h2 style={styles.heroTitle}>Como eu te conheci ?</h2>
        <p style={styles.heroText}>
          Eu era muito inseguro em uma escola nova, no ensino integral, e me
          sentia sozinho. Na primeira semana de aula, vi uma garota desenhando
          uma borboleta linda na mesa dos professores. Mal sabia eu que iria me
          apaixonar por ela. Eu lembro de ter comentado com o Deyvid que tinha
          achado aquela garota muito linda, e ele ficou rindo de mim, kkk. Um
          tempo depois, essa garota linda me mandou um 'oii' no zap e pediu algo, acho que era uma
          foto do quadro ou alguma dúvida. Não lembro exatamente, mas lembro
          perfeitamente do 'oii' dela. A partir daí, começamos a conversar de vez
          em quando, e logo virou rotina eu mandar bom dia, boa tarde e boa
          noite, kkk. Eu estava gostando muito dela e de conversar com ela e tinha certeza que ela ia ser pra minha vida, mas tinha medo dela me
          rejeitar por ser como eu era, então nunca tive coragem de contar o
          que sentia. Até que um dia, contei para o Gabriel, e ele acabou
          contando para a Fabrícia e para a Maria Esther. A partir daí, o Luiz
          Saraça e o Renan descobriram, porque eram super fofoqueiros. Mesmo eu
          nunca contando diretamente, o Renan me disse: 'Todo mundo sabe
          disso, você não sabe esconder'. Foi quando o Gabriel contou para ela
          que eu gostava de dela, e sempre ficava falando para a gente se
          beijar. Mas, como eu não sabia beijar direito, fiquei com receio e
          acabava rejeitando a ideia. Até que um dia, o beijo finalmente
          aconteceu, e depois desse dia, NUNCA, nem por um só segundo, deixei de
          pensar naquela garota linda que desenhou uma borboleta com uma asa só
          na mesa da professora. E foi tudo tão mágico que até hoje não me
          parece real. Porque eu não ia conseguir vaga nessa escola, foi por
          MUITO pouco, e nós namoramos por 1 ano e 1 mês. Ficamos 2 anos e 3
          meses separados e depois voltamos a namorar e ficamos 2 anos e 2 meses juntos, mesmo eu sempre tendo sentimentos por você.
          O que também foi algo muito raro de acontecer,
          aquele bendito beijo no esporte clube, porque eu não ia pra lá quando o Renan e Ryan me chamaram, e
          no meio do caminho eu descobri que você também estava indo pra lá. E nada disso
          teria acontecido se eu tivesse servido o Exército, que era a minha
          vontade na época. Foi por muitíssimo pouco que deu merda no quartel e eu não fui. Então, tudo com você é
          mágico, e eu sei disso e consigo ter a certeza de que você é a mulher da minha vida. Letícia Santos Ferreira é o meu mundo e é pra você que eu vivo.      </p>
        <a href="#modalidades" style={styles.ctaButton}>
          Bae❤️
        </a>
      </section>

      <section id="sobre" style={styles.section}>
        <h2 style={styles.sectionTitle}>O que falar sobre você ?</h2>
        <p style={styles.sectionText}>
          Letícia, você é simplesmente linda, por dentro e por fora. Sua
          presença ilumina qualquer ambiente, e seu sorriso tem o poder de
          transformar o meu dia. Não é só a sua beleza que me encanta, mas
          também a sua personalidade, sua maneira única de ser e a forma como
          você faz o mundo ao seu redor parecer mais leve e alegre. Você é uma
          pessoa incrível e merece tudo de mais maravilhoso que a vida tem a
          oferecer. E, Letícia, você é perfeita para mim. Sem você, não existe
          eu, você é a razão de tudo ter mais sentido. Você é perfeita
          demaisssss, de um jeito que eu jamais poderia imaginar. Eu me sinto
          completo ao seu lado, e cada momento com você é um presente.
        </p>
      </section>

      <section id="modalidades" style={styles.section}>
        <h2 style={styles.sectionTitle}>Casal nota 99999999999999999999999+</h2>
        <div style={styles.modalidades}>

          <div style={styles.modalidadeItem}>

            <img
              src="/img1.jpg" // Substitua com o caminho correto para a imagem de futebol
              alt="oo"
              style={styles.modalidadeImage}
            />
        
          </div>

          <div style={styles.modalidadeItem}>
            <img
              src="img2.jpg" // Substitua com o caminho correto para a imagem de vôlei
              alt="ou"
              style={styles.modalidadeImage}
            />
       
          </div>
          <div style={styles.modalidadeItem}>
            <img
              src="img4.jpg" // Substitua com o caminho correto para a imagem de vôlei
              alt="oi"
              style={styles.modalidadeImage}
            />
       
          </div>

          <div style={styles.modalidadeItem}>
            <img
              src="img5.jpg" // Substitua com o caminho correto para a imagem de vôlei
              alt="ae"
              style={styles.modalidadeImage}
            />
            </div>

       <div style={styles.modalidadeItem}>
            <img
              src="img6.jpg" // Substitua com o caminho correto para a imagem de vôlei
              alt="rt"
              style={styles.modalidadeImage}
            />
       
          </div>

          
          <div style={styles.modalidadeItem}>
            <img
              src="img3.jpg" // Substitua com o caminho correto para a imagem de basquete
              alt="po"
              style={styles.modalidadeImage}
            />
          </div>
        </div>
      </section>
        <h3> Obs.: Se as fotos ficarem cortadas, experimenta ficar aumentando e diminuindo a janela. Te amo! </h3> 
      <section id="modalidades" style={styles.section}>
        <div style={styles.modalidades}>

          <div style={styles.modalidadeItem}>

            <img
              src="/img7.jpg" // Substitua com o caminho correto para a imagem de futebol
              alt="lo"
              style={styles.modalidadeImage}
            />
        
          </div>

          <div style={styles.modalidadeItem}>
            <img
              src="img8.jpg" // Substitua com o caminho correto para a imagem de vôlei
              alt="u"
              style={styles.modalidadeImage}
            />
       
          </div>
          <div style={styles.modalidadeItem}>
            <img
              src="img9.jpg" // Substitua com o caminho correto para a imagem de vôlei
              alt="o"
              style={styles.modalidadeImage}
            />
       
          </div>

          <div style={styles.modalidadeItem}>
            <img
              src="img10.jpg" // Substitua com o caminho correto para a imagem de vôlei
              alt="a"
              style={styles.modalidadeImage}
            />
            </div>

       <div style={styles.modalidadeItem}>
            <img
              src="img11.jpg" // Substitua com o caminho correto para a imagem de vôlei
              alt="r"
              style={styles.modalidadeImage}
            />
       
          </div>

          
          <div style={styles.modalidadeItem}>
            <img
              src="img12.jpg" // Substitua com o caminho correto para a imagem de basquete
              alt="p"
              style={styles.modalidadeImage}
            />
          </div>
        </div>
      </section>




      <section id="revitalizacao" style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Amar é encontrar no outro a razão de sorrir todos os dias
        </h2>
        <p style={styles.sectionText}>
          Amar é descobrir no olhar do outro a paz que falta em nós, é
          compartilhar os pequenos momentos com a certeza de que juntos tudo se
          torna mais bonito. É sorrir não só nos dias bons, mas também nos
          desafios, sabendo que o amor é a nossa força.!
        </p>
      </section>

      <section id="contato" style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Entre em contato comigo pra falar sobre esse site e dizer oque achou:
        </h2>
        <p style={styles.sectionText}>
          Tem alguma dúvida ? aperte aqui em baixo (lá ele)
        </p>
        {/* Botão para o Google Forms */}
        <button onClick={handleButtonClick} style={styles.formButton}>
          Clique aqui
        </button>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          &copy; 2024 Esporte Para Todos. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: "#ADD8E6", // Tom de verde mais vibrante
    color: "white",
    textAlign: "center",
    padding: "40px 20px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.60)", // Sombra sutil para dar profundidade
    borderBottom: "4px solid #333", // Linha sutil no fundo do header
  },
  headerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px", // Aumentando o espaçamento entre o logo e o texto
    flexDirection: "row", // Garantir que a linha se mantenha em ordem
    maxWidth: "1200px", // Limita o tamanho para deixar mais elegante
    margin: "0 auto", // Centralizando o conteúdo
  },
  logo: {
    width: "150px",
    height: "auto",
    borderRadius: "10px",
  },
  headerText: {
    maxWidth: "600px",
    textAlign: "center",
    color: "#fff", // Assegura que o texto fique visível
  },
  headerTitle: {
    fontSize: "36px",
    fontWeight: "700", // Deixa o título mais forte
    letterSpacing: "2px", // Aumenta o espaçamento entre letras para dar sofisticação
    margin: "0", // Remove margens desnecessárias
    textTransform: "uppercase", // Deixa o texto em maiúsculas para um visual mais impactante
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Sombra suave no título
  },
  headerSubtitle: {
    fontSize: "20px",
    fontWeight: "300", // Tira a rigidez e coloca um peso mais leve
    marginTop: "10px",
    letterSpacing: "1px", // Sutilmente aumenta o espaçamento das letras
    color: "#34495E", // Subtítulo em uma cor mais clara
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#333",
    padding: "12px 0",
  },
  navItem: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    padding: "0 15px",
    cursor: "pointer",
  },
  heroSection: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#A8E6A3",
    borderRadius: "10px",
  },
  heroTitle: {
    fontSize: "40px",
    fontWeight: "bold",
  },
  heroText: {
    fontSize: "18px",
    marginTop: "20px",
  },
  ctaButton: {
    display: "inline-block",
    marginTop: "30px",
    padding: "15px 30px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    fontSize: "18px",
    textDecoration: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  section: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#FADADD", // Alterado apenas na seção específica
    color: "#333", // Cor do texto
  },
  sectionTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  sectionText: {
    fontSize: "18px",
    lineHeight: "1.6",
    maxWidth: "800px",
    margin: "0 auto",
  },
  modalidades: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "40px",
    backgroundColor: "#ADD8E6",
    borderRadius: "20px",
    padding: "20px",
  },
  modalidadeItem: {
    textAlign: "center",
    width: "30%",
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  modalidadeImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "15px",
    marginBottom: "15px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  modalidadeTitle: {
    fontSize: "24px", // Aumentei um pouco o tamanho da fonte para mais destaque
    fontWeight: "700", // Deixei o peso da fonte mais forte para maior impacto
    marginBottom: "12px", // Aumentei a margem para dar mais espaço abaixo do título
    color: "#34495E", // Uma cor de texto mais sofisticada e moderna
    textTransform: "uppercase", // Deixei o texto em maiúsculas para dar um ar mais elegante
    letterSpacing: "1px", // Espaçamento entre as letras para um toque mais limpo
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Sombra suave para dar profundidade
    transition: "transform 0.3s ease", // Adiciona uma animação suave para transformações
  },
  modalidadeText: {
    fontSize: "16px",
    color: "#555",
  },
  footer: {
    backgroundColor: "#333",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
  },
  footerText: {
    margin: "0",
    fontSize: "16px",
  },
};


export default LandingPage;
