import Image from "next/image";
import styles from "./components/Home/Home.module.css";
import Carousel from "./components/Carousel";
export default function Home() {
  return (
    <main>
      <>
        <div className={styles.contenedorcarrusel}>
          <Carousel />
        </div>
        <div className={styles.rectangulo2}>
          <p>PRODUCTOS DESTACADOS</p>
        </div>
        <div>
          <ul className={styles.fotosProductos}>
            <li id="cervezas">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <img
                src="ImagenPNG/arandanos.jpg"
                alt="cerveza1"
                width={470}
                height={600}
              />
              <img
                src="ImagenPNG/cachodecabra.jpg"
                alt="cerveza2"
                width={470}
                height={600}
              />
              <img
                src="ImagenPNG/calafate.jpg"
                alt="cerveza3"
                width={470}
                height={600}
              />
              <img
                src="ImagenPNG/kombuchela.jpg"
                alt="cerveza4"
                width={470}
                height={600}
              />
              <img
                src="ImagenPNG/moras.jpg"
                alt="cerveza5"
                width={470}
                height={600}
              />
              <img
                src="ImagenPNG/piñones.jpg"
                alt="cerveza6"
                width={470}
                height={600}
              />
            </li>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className={styles.rectangulo3}>
          <p>PACKS</p>
        </div>
        <div>
          <ul className={styles.fotospacks}>
            <li id="packs">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <img
                src="ImagenTienda/pack1.jpg"
                alt="cerveza1"
                width={470}
                height={400}
              />
              <img
                src="ImagenTienda/pack3.jpg"
                alt="cerveza2"
                width={470}
                height={400}
              />
              <img
                src="ImagenTienda/pack2.jpg"
                alt="cerveza3"
                width={470}
                height={400}
              />
            </li>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <br />

        <section id="sec2">
          <div className="rectangulo4">
            <p>OBJETIVOS SOCIOAMBIENTALES</p>
          </div>
          <br />
          <br /> <br />
          <br /> <br />
          <br />
          <div className={styles.imagecontainer}>
            <ul id="imagecontainerimg" className={styles.imagecontainerimg}>
              <img src="/solidarity.png" alt="Imagen 1" width={90} />
              <img src="/cheers.png" alt="Imagen 2" width={90} />
              <img src="/group.png" alt="Imagen 3" width={90} />
              <img src="/recycle (1).png" alt="Imagen 4" width={90} />
            </ul>
          </div>
          <ul id="botonesobjetivos" className={styles.botonesobjetivos}>
            <li>
              <a className="botones">Impulsamos la comunidad local</a>
            </li>
            <li>
              <a className="botones">Beber con moderación</a>
            </li>
            <li>
              <a className="botones">Visitas guiadas con fines educativos</a>
            </li>
            <li>
              <a className="botones">Envases reciclados</a>
            </li>
          </ul>
          <br /> <br /> <br /> <br /> <br /> <br />
          <br /> <br /> <br /> <br /> <br /> <br />
        </section>
      </>
    </main>
  );
}
