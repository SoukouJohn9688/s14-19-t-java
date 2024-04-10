import React from "react";
import { Button, Card } from "flowbite-react";
import Logo from "../../assets/Logo-Card.png";
import Telephone from "../../assets/telephone.svg";
import Ubicacion from "../../assets/ubicacion.svg";
import ProfileIcon from "../../assets/profile-icon.svg";
import fotoUser from "../../assets/photoUser.svg";

const profiles = [
  {
    alumno: "Pablo Nudenberg",
    date: "23/07/1995",
    classroom: "www.google.com",
    mark: "7",
    email: "pablonudenberg@gmail.com",
    password: "123456",
    sex: "Masculino",
  },
];

const CardProfile = () => {
  return (
    <>
      {profiles.slice(0, 1).map((profile) => (
        <Card
          className="mt-5 border-[1px] p-8 shadow-xl"
          key={profile.email}
        >
          <div className="flex items-center justify-center">
            <div className="flex flex-shrink-0 items-center">
              <img src={Logo} alt="Logo" className="h-20 w-auto mr-2" />
            </div>
          </div>

          <div className="px-8 py-3">
            <div className="flex justify-center items-center mb-4">
              <img src={fotoUser} alt="img" className="h-40" />{" "}
            </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 text-center pb-5">
              {" "}
              {profile.alumno}
            </h5>
            <div>
              <h6 className="font-bold text-l flex justify-start gap-1">
                {" "}
                <img src={ProfileIcon} className="w-5 h-5" /> Datos Personales
              </h6>
              <p className="font-normal text-gray-700">Cuil: 23-23232323-4</p>
              <p className="font-normal text-gray-700">Documento: 23232323</p>
              <p className="font-normal text-gray-700">
                Fecha de nacimiento: {profile.date}
              </p>
              <p className="font-normal text-gray-700">Sexo: {profile.sex}</p>
              <p className="font-normal text-gray-700">
                Nacionalidad: Argentina
              </p>
            </div>
            <hr className="my-6 border-gray-200 w-full lg:my-8" />
            <div>
              <h6 className="font-bold text-l flex justify-start">
                {" "}
                <img src={Ubicacion} className="w-6 h-6" /> Datos Domicilio
              </h6>
              <p className="font-normal text-gray-700">Calle: Mendoza</p>
              <p className="font-normal text-gray-700">Número: 500</p>
              <p className="font-normal text-gray-700">
                Localidad: Buenos Aires, Argentina.
              </p>
            </div>
            <hr className="my-6 border-gray-200 w-full lg:my-8" />
            <div>
              <h6 className="font-bold text-l flex justify-start gap-1">
                {" "}
                <img src={Telephone} className="w-4 h-5" /> Datos Contacto
              </h6>
              <p className="font-normal text-gray-700">
                Teléfono fijo:{" "}
                <span className="text-yellow-400">no cargado</span>.
              </p>
              <p className="font-normal text-gray-700">
                Celular: +54 9 11 565 42635
              </p>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default CardProfile;
