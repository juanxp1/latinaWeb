import styled from "styled-components";

export const StyledContainer = styled("div")<any>`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 60px;
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};

  .whatsapp {
  position: fixed;
  width: 70px;
  height: 70px;
  bottom: 80px;
  right: 40px;
  background-color: #25d366;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  z-index: 100;
  transition: transform 0.3s, background-color 0.3s; /* Agregar transiciones para los efectos */
}

.whatsapp-icon {
  margin-top: 18px;
  font-size: 35px;
}

.whatsapp:hover {
  background-color: #128c7e; /* Cambiar el color en el hover */
  transform: scale(1.1); /* Aplicar un efecto de zoom en el hover */
}


  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 0 18px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 18px;
  }
`;
