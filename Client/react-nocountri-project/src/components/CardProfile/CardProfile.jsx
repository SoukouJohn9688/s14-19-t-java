import React from "react";
import { Button, Card } from "flowbite-react";
import Logo from "../../assets/Logo-Card.png";
import Telephone from "../../assets/telephone.svg";
import Ubicacion from "../../assets/ubicacion.svg";
import ProfileIcon from "../../assets/profile-icon.svg";
import fotoUser from "../../assets/photoUser.svg";
import { useSelector } from "react-redux";

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
  const userName = useSelector((state) => state.auth.userName); 
  return (
    <>
      {profiles.slice(0, 1).map((profile) => (
        <Card
          className="border-[2px] shadow-xl p-8 border-black"
          key={profile.email}
        >
          <div className="flex justify-center items-center">
            <div className="flex flex-shrink-0 items-center">
              <img src={Logo} alt="Logo" className="mr-2 w-auto h-20" />
            </div>
          </div>

          <div className="px-8 py-3">
            <div className="flex justify-center items-center mb-4">
              <img src={fotoUser} alt="img" className="h-40" />{" "}
            </div>
            <h5 className="pb-5 font-bold text-2xl text-center text-gray-900 tracking-tight">
              {" "}
              {userName}
            </h5>
            <div>
              <h6 className="flex justify-start gap-1 font-bold text-l">
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
            <hr className="border-gray-200 my-6 lg:my-8 w-full" />
            <div>
              <h6 className="flex justify-start font-bold text-l">
                {" "}
                <img src={Ubicacion} className="w-6 h-6" /> Datos Domicilio
              </h6>
              <p className="font-normal text-gray-700">Calle: Mendoza</p>
              <p className="font-normal text-gray-700">Número: 500</p>
              <p className="font-normal text-gray-700">
                Localidad: Buenos Aires, Argentina.
              </p>
            </div>
            <hr className="border-gray-200 my-6 lg:my-8 w-full" />
            <div>
              <h6 className="flex justify-start gap-1 font-bold text-l">
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
